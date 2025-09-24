#!/usr/bin/env python3
"""
Transform benchmark data.js to group HDF5 version pairs into dual-line plots.

This script reads the existing data.js file and transforms benchmarks that have
_hdf5_1146 and _hdf5_develop suffixes into grouped entries with multiple series
for comparison plotting.
"""

import json
import re
from collections import defaultdict

def transform_benchmark_data(input_file, output_file):
    """Transform benchmark data to support dual-line plots for HDF5 versions."""

    # Read the original data
    with open(input_file, 'r') as f:
        content = f.read()

    # Extract the JavaScript object (remove window.BENCHMARK_DATA = and trailing semicolon if present)
    js_content = content.strip()
    if js_content.startswith('window.BENCHMARK_DATA = '):
        js_content = js_content[len('window.BENCHMARK_DATA = '):]
    if js_content.endswith(';'):
        js_content = js_content[:-1]

    # Parse JSON
    data = json.loads(js_content)

    # Transform each benchmark entry
    for entry in data['entries']['NetCDF-4 Chunking Performance Benchmarks']:
        transformed_benches = []
        grouped_benches = defaultdict(list)

        # Group benchmarks by base name
        for bench in entry['benches']:
            name = bench['name']

            # Check if this is a versioned benchmark
            if name.endswith('_hdf5_1146'):
                base_name = name[:-len('_hdf5_1146')]
                version = 'HDF5 1.14.6'
            elif name.endswith('_hdf5_develop'):
                base_name = name[:-len('_hdf5_develop')]
                version = 'HDF5 develop'
            else:
                # Keep non-versioned benchmarks as-is
                transformed_benches.append(bench)
                continue

            # Add to grouped benchmarks
            grouped_benches[base_name].append({
                'version': version,
                'value': bench['value'],
                'unit': bench['unit'],
                'extra': bench['extra']
            })

        # Create grouped benchmark entries
        for base_name, versions in grouped_benches.items():
            if len(versions) == 2:  # Only create grouped entry if we have both versions
                # Sort versions to ensure consistent ordering (1.14.6 first, then develop)
                versions.sort(key=lambda x: 0 if x['version'] == 'HDF5 1.14.6' else 1)

                grouped_bench = {
                    'name': base_name,
                    'series': [
                        {
                            'name': version['version'],
                            'value': version['value'],
                            'unit': version['unit'],
                            'extra': version['extra']
                        }
                        for version in versions
                    ]
                }
                transformed_benches.append(grouped_bench)
            else:
                # If we don't have both versions, keep individual entries
                for version in versions:
                    suffix = '_hdf5_1146' if version['version'] == 'HDF5 1.14.6' else '_hdf5_develop'
                    transformed_benches.append({
                        'name': base_name + suffix,
                        'value': version['value'],
                        'unit': version['unit'],
                        'extra': version['extra']
                    })

        # Update the entry with transformed benchmarks
        entry['benches'] = transformed_benches

    # Write the transformed data
    with open(output_file, 'w') as f:
        f.write('window.BENCHMARK_DATA = ')
        json.dump(data, f, indent=2)
        f.write('\n')

if __name__ == '__main__':
    import sys

    input_file = sys.argv[1] if len(sys.argv) > 1 else 'data.js'
    output_file = sys.argv[2] if len(sys.argv) > 2 else 'data_grouped.js'

    print(f"Transforming {input_file} -> {output_file}")
    transform_benchmark_data(input_file, output_file)
    print(f"Transformation complete. {output_file} now contains grouped benchmark data.")