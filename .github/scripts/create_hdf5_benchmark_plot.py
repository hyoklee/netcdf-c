#!/usr/bin/env python3
"""
Create custom benchmark plot with HDF5 commit hash on x-axis

This script reads the detailed benchmark results and creates a custom plot
where the x-axis shows HDF5 commit hashes instead of timestamps.
"""

import json
import matplotlib.pyplot as plt
import pandas as pd
import sys
import os
from pathlib import Path
from typing import List, Dict, Any
import argparse


def load_benchmark_history(gh_pages_dir: str) -> List[Dict[str, Any]]:
    """Load historical benchmark data from gh-pages branch."""
    history = []
    benchmarks_dir = Path(gh_pages_dir) / "benchmarks"

    if not benchmarks_dir.exists():
        print(f"Warning: Benchmarks directory {benchmarks_dir} does not exist")
        return []

    # Look for all benchmark data files
    for json_file in benchmarks_dir.glob("*.json"):
        try:
            with open(json_file, 'r') as f:
                data = json.load(f)
                if isinstance(data, list):
                    history.extend(data)
                elif isinstance(data, dict):
                    history.append(data)
        except Exception as e:
            print(f"Warning: Could not load {json_file}: {e}")

    return history


def load_current_benchmarks(detailed_results_file: str) -> List[Dict[str, Any]]:
    """Load current benchmark results."""
    try:
        with open(detailed_results_file, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading current benchmarks: {e}")
        return []


def create_hdf5_hash_plot(benchmarks: List[Dict[str, Any]], output_file: str):
    """Create a plot with HDF5 commit hash on x-axis."""
    if not benchmarks:
        print("No benchmark data to plot")
        return

    # Filter benchmarks that have HDF5 commit hash
    hdf5_benchmarks = [b for b in benchmarks if 'hdf5_commit_hash' in b]

    if not hdf5_benchmarks:
        print("No benchmarks with HDF5 commit hash found")
        return

    # Convert to DataFrame for easier manipulation
    df = pd.DataFrame(hdf5_benchmarks)

    # Group by benchmark name and HDF5 commit
    benchmark_names = df['name'].unique()

    # Create subplot for each benchmark type
    fig, axes = plt.subplots(len(benchmark_names), 1, figsize=(12, 6*len(benchmark_names)))
    if len(benchmark_names) == 1:
        axes = [axes]

    for i, benchmark_name in enumerate(benchmark_names):
        benchmark_data = df[df['name'] == benchmark_name].sort_values('hdf5_commit_hash')

        if len(benchmark_data) == 0:
            continue

        ax = axes[i]

        # Plot the data
        x_labels = [h[:8] for h in benchmark_data['hdf5_commit_hash']]  # Use short hash
        y_values = benchmark_data['value']

        ax.plot(range(len(x_labels)), y_values, 'o-', linewidth=2, markersize=6)
        ax.set_xticks(range(len(x_labels)))
        ax.set_xticklabels(x_labels, rotation=45, ha='right')
        ax.set_ylabel(f"Time ({benchmark_data['unit'].iloc[0]})")
        ax.set_xlabel("HDF5 Commit Hash")
        ax.set_title(f"NetCDF-4 Performance: {benchmark_name}")
        ax.grid(True, alpha=0.3)

        # Add value labels on points
        for j, (x, y) in enumerate(zip(range(len(x_labels)), y_values)):
            ax.annotate(f'{y:.4f}', (x, y), textcoords="offset points",
                       xytext=(0,10), ha='center', fontsize=8)

    plt.tight_layout()
    plt.savefig(output_file, dpi=300, bbox_inches='tight')
    print(f"HDF5 benchmark plot saved to {output_file}")


def create_comparison_plot(benchmarks: List[Dict[str, Any]], output_file: str):
    """Create a comparison plot showing all benchmark types for latest HDF5 commit."""
    if not benchmarks:
        return

    # Filter benchmarks that have HDF5 commit hash
    hdf5_benchmarks = [b for b in benchmarks if 'hdf5_commit_hash' in b]

    if not hdf5_benchmarks:
        return

    # Get the latest HDF5 commit
    latest_commit = max(hdf5_benchmarks, key=lambda x: x.get('timestamp', 0))['hdf5_commit_hash']
    latest_benchmarks = [b for b in hdf5_benchmarks if b['hdf5_commit_hash'] == latest_commit]

    # Group by storage type and operation
    df = pd.DataFrame(latest_benchmarks)

    # Create grouped bar chart
    fig, ax = plt.subplots(figsize=(14, 8))

    # Group by storage_type and operation
    grouped = df.groupby(['storage_type', 'operation'])['value'].mean().reset_index()

    # Create bar positions
    storage_types = grouped['storage_type'].unique()
    operations = grouped['operation'].unique()

    x = range(len(storage_types))
    width = 0.35

    for i, operation in enumerate(operations):
        operation_data = grouped[grouped['operation'] == operation]
        values = [operation_data[operation_data['storage_type'] == st]['value'].iloc[0]
                 if len(operation_data[operation_data['storage_type'] == st]) > 0 else 0
                 for st in storage_types]

        ax.bar([pos + i * width for pos in x], values, width,
               label=f'{operation.capitalize()}', alpha=0.8)

    ax.set_xlabel('Storage Type')
    ax.set_ylabel('Time (seconds)')
    ax.set_title(f'NetCDF-4 Performance Comparison (HDF5: {latest_commit[:8]})')
    ax.set_xticks([pos + width/2 for pos in x])
    ax.set_xticklabels(storage_types)
    ax.legend()
    ax.grid(True, alpha=0.3)

    plt.tight_layout()
    plt.savefig(output_file, dpi=300, bbox_inches='tight')
    print(f"Comparison plot saved to {output_file}")


def main():
    parser = argparse.ArgumentParser(description='Create HDF5 benchmark plots')
    parser.add_argument('detailed_results', help='Path to detailed_results.json file')
    parser.add_argument('output_dir', help='Output directory for plots')
    parser.add_argument('--gh-pages-dir', help='Path to gh-pages directory for historical data')

    args = parser.parse_args()

    # Load current benchmark data
    current_benchmarks = load_current_benchmarks(args.detailed_results)

    # Load historical data if available
    historical_benchmarks = []
    if args.gh_pages_dir:
        historical_benchmarks = load_benchmark_history(args.gh_pages_dir)

    # Combine all benchmarks
    all_benchmarks = historical_benchmarks + current_benchmarks

    # Create output directory
    output_path = Path(args.output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    # Create plots
    create_hdf5_hash_plot(all_benchmarks, output_path / "hdf5_performance_timeline.png")
    create_comparison_plot(current_benchmarks, output_path / "hdf5_performance_comparison.png")

    print(f"Custom benchmark plots created in {output_path}")


if __name__ == "__main__":
    main()