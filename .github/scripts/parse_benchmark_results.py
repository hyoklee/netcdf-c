#!/usr/bin/env python3
"""
NetCDF-4 Performance Benchmark Result Parser

This script parses the output from tst_chunks3 benchmark and converts it to JSON format
compatible with benchmark-action/github-action-benchmark.

The JSON format expected by github-action-benchmark is:
[
  {
    "name": "benchmark name",
    "unit": "time unit (e.g. sec, ms)",
    "value": numeric_value
  }
]
"""

import re
import json
import sys
import os
from pathlib import Path
from typing import List, Dict, Any


def parse_timing_line(line: str) -> Dict[str, Any]:
    """
    Parse a timing line from tst_chunks3 output.

    Example line:
    "  contiguous write   1 256 256       0.00012 sec"
    "  chunked    write   1 256 256  32  32  32       0.00015 sec  1.25 x slower"
    """
    # Remove extra whitespace and split
    parts = line.strip().split()

    if len(parts) < 4:
        return None

    # Extract operation type and direction
    storage_type = parts[0]  # contiguous, chunked, compressed
    operation = parts[1]     # write, read

    # Find the timing value (should end with 'sec')
    time_sec = None
    for i, part in enumerate(parts):
        if part == 'sec' and i > 0:
            try:
                time_sec = float(parts[i-1])
                break
            except ValueError:
                continue

    if time_sec is None:
        return None

    # Extract dimensions (numbers between operation and time)
    dimensions = []
    chunks = []

    # Find where dimensions start (after operation) and end (before time)
    dim_start = 2
    time_idx = None
    for i, part in enumerate(parts):
        if part == 'sec':
            time_idx = i - 1
            break

    if time_idx is None:
        return None

    # Parse dimensions and chunks
    for i in range(dim_start, time_idx):
        try:
            val = int(parts[i])
            if storage_type == "contiguous":
                dimensions.append(val)
            else:
                # For chunked/compressed, alternate between dimensions and chunks
                if len(dimensions) == len(chunks):
                    dimensions.append(val)
                else:
                    chunks.append(val)
        except ValueError:
            continue

    # Create benchmark name
    dim_str = "x".join(map(str, dimensions))
    if chunks:
        chunk_str = "x".join(map(str, chunks))
        name = f"{storage_type}_{operation}_{dim_str}_chunks_{chunk_str}"
    else:
        name = f"{storage_type}_{operation}_{dim_str}"

    return {
        "name": name,
        "unit": "sec",
        "value": time_sec,
        "storage_type": storage_type,
        "operation": operation,
        "dimensions": dimensions,
        "chunks": chunks if chunks else None
    }


def parse_benchmark_file(file_path: str) -> List[Dict[str, Any]]:
    """Parse a single benchmark result file."""
    benchmarks = []

    try:
        with open(file_path, 'r') as f:
            content = f.read()

        # Extract compression level from file content or filename
        compression_level = 0
        deflate_match = re.search(r'deflate level[:\s]+(\d+)', content, re.IGNORECASE)
        if deflate_match:
            compression_level = int(deflate_match.group(1))
        elif 'shuffle' in file_path.lower():
            # For shuffle tests, extract from "shuffle + deflate level: X"
            shuffle_match = re.search(r'shuffle \+ deflate level[:\s]+(\d+)', content, re.IGNORECASE)
            if shuffle_match:
                compression_level = int(shuffle_match.group(1))

        # Split into lines and parse each timing line
        lines = content.split('\n')
        for line in lines:
            if 'sec' in line and ('write' in line or 'read' in line):
                if any(storage in line for storage in ['contiguous', 'chunked', 'compressed']):
                    parsed = parse_timing_line(line)
                    if parsed:
                        # Add file-specific metadata
                        parsed['compression_level'] = compression_level
                        parsed['source_file'] = os.path.basename(file_path)

                        # Modify name to include compression info
                        if compression_level > 0:
                            parsed['name'] += f"_deflate{compression_level}"
                        if 'shuffle' in file_path.lower():
                            parsed['name'] += "_shuffle"

                        benchmarks.append(parsed)

    except FileNotFoundError:
        print(f"Warning: File {file_path} not found")
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")

    return benchmarks


def parse_all_benchmarks(results_dir: str, hdf5_hash: str = None) -> List[Dict[str, Any]]:
    """Parse all benchmark result files in the directory."""
    all_benchmarks = []

    results_path = Path(results_dir)
    if not results_path.exists():
        print(f"Error: Results directory {results_dir} does not exist")
        return []

    # Find all .txt files containing benchmark results
    txt_files = list(results_path.glob("*.txt"))

    if not txt_files:
        print(f"Warning: No .txt files found in {results_dir}")
        return []

    for txt_file in txt_files:
        print(f"Parsing {txt_file}")
        benchmarks = parse_benchmark_file(str(txt_file))

        # Add HDF5 hash to each benchmark if provided
        if hdf5_hash:
            for benchmark in benchmarks:
                benchmark['hdf5_commit_hash'] = hdf5_hash
                benchmark['hdf5_commit_short'] = hdf5_hash[:8] if hdf5_hash else None

        all_benchmarks.extend(benchmarks)

    return all_benchmarks


def create_benchmark_json(benchmarks: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Convert parsed benchmarks to github-action-benchmark JSON format."""
    json_benchmarks = []

    for bench in benchmarks:
        # Create base benchmark entry
        benchmark_entry = {
            "name": bench["name"],
            "unit": bench["unit"],
            "value": bench["value"]
        }

        # Add HDF5 commit hash information if available
        if "hdf5_commit_hash" in bench:
            benchmark_entry["extra"] = f"HDF5: {bench['hdf5_commit_short']}"

        json_benchmarks.append(benchmark_entry)

    return json_benchmarks


def main():
    if len(sys.argv) < 3 or len(sys.argv) > 4:
        print("Usage: parse_benchmark_results.py <results_directory> <output_json_file> [hdf5_commit_hash]")
        sys.exit(1)

    results_dir = sys.argv[1]
    output_file = sys.argv[2]
    hdf5_hash = sys.argv[3] if len(sys.argv) == 4 else None

    print(f"Parsing benchmark results from {results_dir}")
    if hdf5_hash:
        print(f"Using HDF5 commit hash: {hdf5_hash}")

    # Parse all benchmark files
    all_benchmarks = parse_all_benchmarks(results_dir, hdf5_hash)

    if not all_benchmarks:
        print("Error: No benchmarks found")
        sys.exit(1)

    print(f"Found {len(all_benchmarks)} benchmark results")

    # Convert to JSON format
    json_benchmarks = create_benchmark_json(all_benchmarks)

    # Create output directory if it doesn't exist
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write JSON output
    with open(output_file, 'w') as f:
        json.dump(json_benchmarks, f, indent=2)

    print(f"Benchmark results written to {output_file}")

    # Also write detailed results for debugging
    detailed_file = output_path.parent / "detailed_results.json"
    with open(detailed_file, 'w') as f:
        json.dump(all_benchmarks, f, indent=2)

    print(f"Detailed results written to {detailed_file}")

    # Print summary
    print("\nBenchmark Summary:")
    print(f"Total benchmarks: {len(json_benchmarks)}")

    # Group by storage type and operation
    by_type = {}
    for bench in all_benchmarks:
        key = f"{bench['storage_type']}_{bench['operation']}"
        if key not in by_type:
            by_type[key] = []
        by_type[key].append(bench['value'])

    for key, values in by_type.items():
        avg_time = sum(values) / len(values)
        print(f"  {key}: {len(values)} tests, avg {avg_time:.6f} sec")


if __name__ == "__main__":
    main()