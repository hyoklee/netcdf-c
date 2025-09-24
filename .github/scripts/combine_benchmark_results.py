#!/usr/bin/env python3
"""
Combine benchmark results from different HDF5 versions for comparison plots.

This script combines benchmark results from HDF5 develop and HDF5 1.14.6
into a single JSON file that can be used by github-action-benchmark to
generate comparison plots with two line graphs.
"""

import json
import sys
from pathlib import Path
from typing import List, Dict, Any


def load_benchmark_results(file_path: str) -> List[Dict[str, Any]]:
    """Load benchmark results from a JSON file."""
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Error: File {file_path} not found")
        return []
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {file_path}: {e}")
        return []


def combine_benchmark_results(develop_results: List[Dict[str, Any]],
                            v1146_results: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Combine benchmark results from two HDF5 versions.

    Creates pairs of benchmarks with version-specific names so that
    github-action-benchmark can plot them as separate lines.
    """
    combined_results = []

    # Add develop results with version suffix
    for bench in develop_results:
        develop_bench = bench.copy()
        develop_bench['name'] = f"{bench['name']}_hdf5_develop"
        # Keep the original extra field or create one
        if 'extra' in develop_bench:
            develop_bench['extra'] = f"HDF5 develop - {develop_bench['extra']}"
        else:
            develop_bench['extra'] = "HDF5 develop"
        combined_results.append(develop_bench)

    # Add 1.14.6 results with version suffix
    for bench in v1146_results:
        v1146_bench = bench.copy()
        v1146_bench['name'] = f"{bench['name']}_hdf5_1146"
        # Set extra field to indicate version
        v1146_bench['extra'] = "HDF5 1.14.6"
        combined_results.append(v1146_bench)

    # Sort by base name to group related benchmarks together
    def get_base_name(bench_name: str) -> str:
        """Extract base benchmark name without version suffix."""
        if '_hdf5_develop' in bench_name:
            return bench_name.replace('_hdf5_develop', '')
        elif '_hdf5_1146' in bench_name:
            return bench_name.replace('_hdf5_1146', '')
        return bench_name

    combined_results.sort(key=lambda x: (get_base_name(x['name']), x['extra']))

    return combined_results


def main():
    if len(sys.argv) != 4:
        print("Usage: combine_benchmark_results.py <develop_json> <v1146_json> <output_json>")
        sys.exit(1)

    develop_file = sys.argv[1]
    v1146_file = sys.argv[2]
    output_file = sys.argv[3]

    print(f"Loading develop results from {develop_file}")
    develop_results = load_benchmark_results(develop_file)

    print(f"Loading 1.14.6 results from {v1146_file}")
    v1146_results = load_benchmark_results(v1146_file)

    if not develop_results and not v1146_results:
        print("Error: No benchmark results found in either file")
        sys.exit(1)

    print(f"Found {len(develop_results)} develop benchmarks and {len(v1146_results)} v1.14.6 benchmarks")

    # Combine results
    combined_results = combine_benchmark_results(develop_results, v1146_results)

    # Create output directory if it doesn't exist
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write combined results
    with open(output_file, 'w') as f:
        json.dump(combined_results, f, indent=2)

    print(f"Combined benchmark results written to {output_file}")
    print(f"Total combined benchmarks: {len(combined_results)}")

    # Print summary by version
    develop_count = len([b for b in combined_results if '_hdf5_develop' in b['name']])
    v1146_count = len([b for b in combined_results if '_hdf5_1146' in b['name']])

    print(f"  HDF5 develop: {develop_count} benchmarks")
    print(f"  HDF5 1.14.6: {v1146_count} benchmarks")

    # Show example benchmark pairs for verification
    base_names = set()
    for bench in combined_results:
        if '_hdf5_develop' in bench['name']:
            base_name = bench['name'].replace('_hdf5_develop', '')
            base_names.add(base_name)
        elif '_hdf5_1146' in bench['name']:
            base_name = bench['name'].replace('_hdf5_1146', '')
            base_names.add(base_name)

    print(f"\nBenchmark types found: {len(base_names)}")
    for base_name in sorted(list(base_names)[:5]):  # Show first 5 as examples
        develop_name = f"{base_name}_hdf5_develop"
        v1146_name = f"{base_name}_hdf5_1146"
        has_develop = any(b['name'] == develop_name for b in combined_results)
        has_v1146 = any(b['name'] == v1146_name for b in combined_results)
        pair_status = "✓" if has_develop and has_v1146 else "✗"
        print(f"  {pair_status} {base_name}")


if __name__ == "__main__":
    main()