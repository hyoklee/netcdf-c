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
    Combine benchmark results from two HDF5 versions into grouped series format.

    Creates benchmark entries with series data containing both HDF5 versions
    for dual-line comparison plots.
    """
    combined_results = []

    # Create a mapping of benchmark names to results
    develop_benchmarks = {bench['name']: bench for bench in develop_results}
    v1146_benchmarks = {bench['name']: bench for bench in v1146_results}

    # Find all unique benchmark names
    all_benchmark_names = set(develop_benchmarks.keys()) | set(v1146_benchmarks.keys())

    for benchmark_name in sorted(all_benchmark_names):
        develop_bench = develop_benchmarks.get(benchmark_name)
        v1146_bench = v1146_benchmarks.get(benchmark_name)

        # Only create grouped benchmarks if we have both versions
        if develop_bench and v1146_bench:
            # Create series data for both versions
            series_data = []

            # Add HDF5 1.14.6 data (first in series for consistent ordering)
            v1146_series = {
                "name": "HDF5 1.14.6",
                "value": v1146_bench["value"],
                "unit": v1146_bench["unit"],
                "extra": "HDF5 1.14.6"
            }
            series_data.append(v1146_series)

            # Add HDF5 develop data
            develop_series = {
                "name": "HDF5 develop",
                "value": develop_bench["value"],
                "unit": develop_bench["unit"]
            }
            # Preserve original extra field with HDF5 commit info
            if 'extra' in develop_bench:
                develop_series['extra'] = f"HDF5 develop - {develop_bench['extra']}"
            else:
                develop_series['extra'] = "HDF5 develop"
            series_data.append(develop_series)

            # Create the grouped benchmark entry
            grouped_benchmark = {
                "name": benchmark_name,
                "series": series_data
            }
            combined_results.append(grouped_benchmark)

        else:
            # If we only have one version, keep it as individual benchmark
            if develop_bench:
                individual_bench = develop_bench.copy()
                individual_bench['name'] = f"{benchmark_name}_hdf5_develop"
                if 'extra' in individual_bench:
                    individual_bench['extra'] = f"HDF5 develop - {individual_bench['extra']}"
                else:
                    individual_bench['extra'] = "HDF5 develop"
                combined_results.append(individual_bench)

            if v1146_bench:
                individual_bench = v1146_bench.copy()
                individual_bench['name'] = f"{benchmark_name}_hdf5_1146"
                individual_bench['extra'] = "HDF5 1.14.6"
                combined_results.append(individual_bench)

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

    # Count grouped vs individual benchmarks
    grouped_count = len([b for b in combined_results if 'series' in b])
    individual_count = len(combined_results) - grouped_count

    print(f"  Grouped benchmarks (with series): {grouped_count}")
    print(f"  Individual benchmarks: {individual_count}")

    # Show details of grouped benchmarks
    if grouped_count > 0:
        print(f"\nGrouped benchmark examples:")
        grouped_benchmarks = [b for b in combined_results if 'series' in b]
        for bench in sorted(grouped_benchmarks[:5], key=lambda x: x['name']):  # Show first 5
            series_versions = [s['name'] for s in bench['series']]
            print(f"  ✓ {bench['name']} ({', '.join(series_versions)})")

    # Show individual benchmarks if any
    if individual_count > 0:
        print(f"\nIndividual benchmarks (missing pair):")
        individual_benchmarks = [b for b in combined_results if 'series' not in b]
        for bench in sorted(individual_benchmarks[:5], key=lambda x: x['name']):  # Show first 5
            version = "develop" if "_hdf5_develop" in bench['name'] else "1.14.6"
            base_name = bench['name'].replace('_hdf5_develop', '').replace('_hdf5_1146', '')
            print(f"  ✗ {base_name} (only {version})")


if __name__ == "__main__":
    main()