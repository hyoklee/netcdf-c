#!/usr/bin/env python3
"""
Create custom benchmark plot with dates on x-axis

This script reads the detailed benchmark results and creates a custom plot
where the x-axis shows dates instead of HDF5 commit hashes.
"""

import json
import matplotlib.pyplot as plt
import pandas as pd
import sys
import os
from pathlib import Path
from typing import List, Dict, Any
import argparse
import datetime
import matplotlib.dates as mdates


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
    """Create a plot with dates on x-axis."""
    if not benchmarks:
        print("No benchmark data to plot")
        return

    # Filter benchmarks that have timestamp or try to use historical data
    timestamped_benchmarks = [b for b in benchmarks if 'timestamp' in b]

    if not timestamped_benchmarks:
        print("No benchmarks with timestamp found, falling back to available data")
        # Try to use any available benchmarks and assign dates based on their position
        if benchmarks:
            timestamped_benchmarks = benchmarks
            # Assign artificial timestamps for backward compatibility
            base_date = datetime.datetime.now() - datetime.timedelta(days=len(benchmarks))
            for i, benchmark in enumerate(timestamped_benchmarks):
                benchmark['timestamp'] = (base_date + datetime.timedelta(days=i)).isoformat()
        else:
            return

    # Convert to DataFrame for easier manipulation
    df = pd.DataFrame(timestamped_benchmarks)

    # Convert timestamp strings to datetime objects
    df['datetime'] = pd.to_datetime(df['timestamp'])

    # Group by benchmark name
    benchmark_names = df['name'].unique()

    # Create subplot for each benchmark type
    fig, axes = plt.subplots(len(benchmark_names), 1, figsize=(12, 6*len(benchmark_names)))
    if len(benchmark_names) == 1:
        axes = [axes]

    for i, benchmark_name in enumerate(benchmark_names):
        benchmark_data = df[df['name'] == benchmark_name].sort_values('datetime')

        if len(benchmark_data) == 0:
            continue

        ax = axes[i]

        # Plot the data with dates on x-axis
        x_dates = benchmark_data['datetime']
        y_values = benchmark_data['value']

        ax.plot(x_dates, y_values, 'o-', linewidth=2, markersize=6)
        ax.set_ylabel(f"Time ({benchmark_data['unit'].iloc[0]})")
        ax.set_xlabel("Date")
        ax.set_title(f"NetCDF-4 Performance: {benchmark_name}")
        ax.grid(True, alpha=0.3)

        # Format x-axis to show dates nicely
        ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))
        ax.xaxis.set_major_locator(mdates.DayLocator(interval=1))
        plt.setp(ax.xaxis.get_majorticklabels(), rotation=45, ha='right')

        # Add value labels on points
        for x, y in zip(x_dates, y_values):
            ax.annotate(f'{y:.4f}', (x, y), textcoords="offset points",
                       xytext=(0,10), ha='center', fontsize=8)

        # Add HDF5 commit hash as secondary information in legend or subtitle
        if 'hdf5_commit_hash' in benchmark_data.columns:
            unique_hashes = benchmark_data['hdf5_commit_hash'].unique()
            if len(unique_hashes) <= 3:  # Only show if few commits
                hash_str = ', '.join([h[:8] for h in unique_hashes])
                ax.text(0.02, 0.98, f"HDF5 commits: {hash_str}",
                       transform=ax.transAxes, fontsize=8, verticalalignment='top',
                       bbox=dict(boxstyle="round,pad=0.3", facecolor="lightgray", alpha=0.7))

    plt.tight_layout()
    plt.savefig(output_file, dpi=300, bbox_inches='tight')
    print(f"Date-based benchmark plot saved to {output_file}")


def create_comparison_plot(benchmarks: List[Dict[str, Any]], output_file: str):
    """Create a comparison plot showing all benchmark types for latest benchmark run."""
    if not benchmarks:
        return

    # Filter benchmarks that have timestamp
    timestamped_benchmarks = [b for b in benchmarks if 'timestamp' in b]

    if not timestamped_benchmarks:
        return

    # Get the latest benchmark run by timestamp
    latest_timestamp = max(timestamped_benchmarks, key=lambda x: x.get('timestamp', ''))['timestamp']
    latest_benchmarks = [b for b in timestamped_benchmarks if b['timestamp'] == latest_timestamp]

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

    # Format the date for the title
    date_obj = datetime.datetime.fromisoformat(latest_timestamp.replace('Z', '+00:00') if latest_timestamp.endswith('Z') else latest_timestamp)
    date_str = date_obj.strftime('%Y-%m-%d')
    ax.set_title(f'NetCDF-4 Performance Comparison ({date_str})')

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
    create_hdf5_hash_plot(all_benchmarks, output_path / "performance_timeline.png")
    create_comparison_plot(current_benchmarks, output_path / "performance_comparison.png")

    print(f"Custom benchmark plots created in {output_path}")


if __name__ == "__main__":
    main()