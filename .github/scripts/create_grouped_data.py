#!/usr/bin/env python3
"""
Create Grouped Benchmark Data

This script processes the individual benchmark data from github-action-benchmark
and converts it to a grouped format with series data for better visualization
of HDF5 version comparisons.
"""

import json
import sys
import re
from pathlib import Path
from typing import List, Dict, Any, Optional


def parse_data_js(file_path: str) -> Optional[Dict[str, Any]]:
    """Parse the data.js file to extract benchmark data."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()

        # Extract the JavaScript object
        # Look for window.BENCHMARK_DATA = { ... }
        match = re.search(r'window\.BENCHMARK_DATA\s*=\s*({.*});?\s*$', content, re.DOTALL | re.MULTILINE)
        if not match:
            print(f"Error: Could not find BENCHMARK_DATA in {file_path}")
            return None

        json_str = match.group(1)
        return json.loads(json_str)

    except FileNotFoundError:
        print(f"Error: File {file_path} not found")
        return None
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {file_path}: {e}")
        return None
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None


def group_benchmarks(data: Dict[str, Any]) -> Dict[str, Any]:
    """Convert individual benchmarks to grouped series format."""
    if 'entries' not in data:
        print("Error: No entries found in benchmark data")
        return data

    grouped_data = {
        "lastUpdate": data.get("lastUpdate"),
        "repoUrl": data.get("repoUrl"),
        "entries": {}
    }

    for suite_name, entries in data['entries'].items():
        if not entries:
            continue

        # Process each entry (timestamp/commit)
        grouped_entries = []

        for entry in entries:
            if 'benches' not in entry:
                continue

            # Group benchmarks by base name (removing version suffixes)
            benchmark_groups = {}

            for bench in entry['benches']:
                bench_name = bench['name']

                # Extract base name and version
                base_name = None
                version_info = None

                if bench_name.endswith('_hdf5_develop'):
                    base_name = bench_name[:-13]  # Remove '_hdf5_develop'
                    version_info = {
                        'name': 'HDF5 develop',
                        'suffix': '_hdf5_develop'
                    }
                elif bench_name.endswith('_hdf5_1146'):
                    base_name = bench_name[:-11]  # Remove '_hdf5_1146'
                    version_info = {
                        'name': 'HDF5 1.14.6',
                        'suffix': '_hdf5_1146'
                    }
                else:
                    # If no version suffix, treat as individual benchmark
                    base_name = bench_name
                    version_info = None

                if base_name not in benchmark_groups:
                    benchmark_groups[base_name] = {
                        'base_name': base_name,
                        'versions': {},
                        'individual': []
                    }

                if version_info:
                    benchmark_groups[base_name]['versions'][version_info['name']] = {
                        'name': version_info['name'],
                        'value': bench.get('value'),
                        'unit': bench.get('unit'),
                        'extra': bench.get('extra', version_info['name'])
                    }
                else:
                    # Individual benchmark without version pairing
                    benchmark_groups[base_name]['individual'].append(bench)

            # Create grouped benchmarks
            grouped_benches = []

            for base_name, group in benchmark_groups.items():
                if len(group['versions']) >= 2:
                    # Create grouped benchmark with series
                    series_data = []

                    # Add HDF5 1.14.6 first for consistent ordering
                    if 'HDF5 1.14.6' in group['versions']:
                        series_data.append(group['versions']['HDF5 1.14.6'])

                    # Add HDF5 develop second
                    if 'HDF5 develop' in group['versions']:
                        series_data.append(group['versions']['HDF5 develop'])

                    # Add any other versions
                    for version_name, version_data in group['versions'].items():
                        if version_name not in ['HDF5 1.14.6', 'HDF5 develop']:
                            series_data.append(version_data)

                    grouped_bench = {
                        'name': base_name,
                        'series': series_data
                    }
                    grouped_benches.append(grouped_bench)

                elif len(group['versions']) == 1:
                    # Single version - convert to individual benchmark
                    version_name, version_data = next(iter(group['versions'].items()))
                    individual_bench = {
                        'name': f"{base_name}_{version_name.lower().replace(' ', '_').replace('.', '_')}",
                        'value': version_data['value'],
                        'unit': version_data['unit'],
                        'extra': version_data['extra']
                    }
                    grouped_benches.append(individual_bench)

                # Add any individual benchmarks (without version pairing)
                grouped_benches.extend(group['individual'])

            # Create new entry with grouped benchmarks
            grouped_entry = entry.copy()
            grouped_entry['benches'] = sorted(grouped_benches, key=lambda x: x['name'])
            grouped_entries.append(grouped_entry)

        grouped_data['entries'][suite_name] = grouped_entries

    return grouped_data


def write_grouped_data_js(data: Dict[str, Any], output_file: str):
    """Write the grouped data as a JavaScript file."""
    try:
        with open(output_file, 'w') as f:
            f.write('window.GROUPED_BENCHMARK_DATA = ')
            json.dump(data, f, indent=2)
            f.write(';\n')

        print(f"Grouped benchmark data written to {output_file}")

    except Exception as e:
        print(f"Error writing {output_file}: {e}")
        sys.exit(1)


def main():
    if len(sys.argv) != 3:
        print("Usage: create_grouped_data.py <input_data.js> <output_data_grouped.js>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    print(f"Processing benchmark data from {input_file}")

    # Parse input data
    data = parse_data_js(input_file)
    if not data:
        sys.exit(1)

    # Group benchmarks
    grouped_data = group_benchmarks(data)

    # Create output directory if needed
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write grouped data
    write_grouped_data_js(grouped_data, output_file)

    # Print summary
    total_suites = len(grouped_data.get('entries', {}))
    total_entries = sum(len(entries) for entries in grouped_data.get('entries', {}).values())
    total_benchmarks = 0
    grouped_benchmarks = 0

    for entries in grouped_data.get('entries', {}).values():
        for entry in entries:
            benches = entry.get('benches', [])
            total_benchmarks += len(benches)
            grouped_benchmarks += len([b for b in benches if 'series' in b])

    print(f"\nSummary:")
    print(f"  Total benchmark suites: {total_suites}")
    print(f"  Total entries (timestamps): {total_entries}")
    print(f"  Total benchmarks: {total_benchmarks}")
    print(f"  Grouped benchmarks (with series): {grouped_benchmarks}")
    print(f"  Individual benchmarks: {total_benchmarks - grouped_benchmarks}")


if __name__ == "__main__":
    main()