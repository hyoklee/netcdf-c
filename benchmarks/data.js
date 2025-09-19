window.BENCHMARK_DATA = {
  "lastUpdate": 1758263885241,
  "repoUrl": "https://github.com/hyoklee/netcdf-c",
  "entries": {
    "NetCDF-4 Chunking Performance Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "fed6d1cd9938114778531dd43ff7f0eef37bc542",
          "message": "ci: fix benchmark action git repository access\n\nFix GitHub Action benchmark failure where git commands were failing\nwith \"not a git repository\" error. The issue was that checkout action\nwas placing the repository in a subdirectory, but the benchmark action\nexpected git repo to be in workspace root.\n\nChanges:\n- Remove path parameter from checkout action to check out to root\n- Update all path references to remove netcdf-c/ prefix\n- Add missing benchmark action configuration parameters\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-18T22:34:57-05:00",
          "tree_id": "03c28e54e682fa60c81ba9017c4340f38419917f",
          "url": "https://github.com/hyoklee/netcdf-c/commit/fed6d1cd9938114778531dd43ff7f0eef37bc542"
        },
        "date": 1758253928588,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "contiguous_write_1x512x512",
            "value": 0.41,
            "unit": "sec"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64",
            "value": 0.43,
            "unit": "sec"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64",
            "value": 0.43,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_512x1x512",
            "value": 4,
            "unit": "sec"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64",
            "value": 0.28,
            "unit": "sec"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64",
            "value": 0.28,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_512x512x1",
            "value": 66,
            "unit": "sec"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64",
            "value": 1.1,
            "unit": "sec"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64",
            "value": 1.1,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_1x512x512",
            "value": 0.042,
            "unit": "sec"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64",
            "value": 0.14,
            "unit": "sec"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64",
            "value": 0.14,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x1x512",
            "value": 1.4,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64",
            "value": 0.16,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64",
            "value": 0.15,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x512x1",
            "value": 24,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "387369a8d07c8670ec40773d80c8d88e77169187",
          "message": "ci: use HDF5 commit hash for benchmark x-axis\n\n- Modify parse_benchmark_results.py to include HDF5 commit hash metadata\n- Update benchmark workflow to pass HDF5 hash to parsing script\n- Add custom plotting script for HDF5-based x-axis visualization\n- Create HTML index page for comprehensive benchmark results\n- Generate both standard timeline and HDF5-commit-based plots\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-19T00:02:32-05:00",
          "tree_id": "e0de54773f7d536f9f71a94f1f98be0493fe674f",
          "url": "https://github.com/hyoklee/netcdf-c/commit/387369a8d07c8670ec40773d80c8d88e77169187"
        },
        "date": 1758258851459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "contiguous_write_1x512x512",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_write_512x1x512",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_write_512x512x1",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_1x512x512",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_512x1x512",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_512x512x1",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "45289ac56dc0f042fb7e4c30acd1b0d1d5dd9993",
          "message": "ci: fix gh-pages plot to show dates on x-axis\n\n- Update parse_benchmark_results.py to add timestamp field to benchmark data\n- Modify create_hdf5_benchmark_plot.py to use dates instead of commit hashes on x-axis\n- Add backward compatibility for historical data without timestamps\n- Improve plot readability with proper date formatting\n- Keep HDF5 commit hashes as supplementary information in plot annotations\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-19T00:23:21-05:00",
          "tree_id": "6d719083f316383830562f9d248a0db2f3b9e75e",
          "url": "https://github.com/hyoklee/netcdf-c/commit/45289ac56dc0f042fb7e4c30acd1b0d1d5dd9993"
        },
        "date": 1758260246355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "contiguous_write_1x512x512",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_write_512x1x512",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_write_512x512x1",
            "value": 68,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_1x512x512",
            "value": 0.047,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_512x1x512",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_512x512x1",
            "value": 26,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "45289ac56dc0f042fb7e4c30acd1b0d1d5dd9993",
          "message": "ci: fix gh-pages plot to show dates on x-axis\n\n- Update parse_benchmark_results.py to add timestamp field to benchmark data\n- Modify create_hdf5_benchmark_plot.py to use dates instead of commit hashes on x-axis\n- Add backward compatibility for historical data without timestamps\n- Improve plot readability with proper date formatting\n- Keep HDF5 commit hashes as supplementary information in plot annotations\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-19T05:23:21Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/45289ac56dc0f042fb7e4c30acd1b0d1d5dd9993"
        },
        "date": 1758263884207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "contiguous_write_1x512x512",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_write_512x1x512",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_write_512x512x1",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_1x512x512",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_512x1x512",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "contiguous_read_512x512x1",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: ceea2c35"
          }
        ]
      }
    ]
  }
};