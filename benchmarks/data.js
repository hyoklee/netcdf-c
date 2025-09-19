window.BENCHMARK_DATA = {
  "lastUpdate": 1758253929924,
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
          "message": "ci: fix benchmark action git repository access\n\nFix GitHub Action benchmark failure where git commands were failing\nwith \"not a git repository\" error. The issue was that checkout action\nwas placing the repository in a subdirectory, but the benchmark action\nexpected git repo to be in workspace root.\n\nChanges:\n- Remove path parameter from checkout action to check out to root\n- Update all path references to remove netcdf-c/ prefix\n- Add missing benchmark action configuration parameters\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
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
          },
          {
            "name": "contiguous_write_1x512x512",
            "value": 0.41,
            "unit": "sec"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64",
            "value": 0.42,
            "unit": "sec"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64",
            "value": 2.8,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_512x1x512",
            "value": 3.9,
            "unit": "sec"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64",
            "value": 0.27,
            "unit": "sec"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64",
            "value": 2.3,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_512x512x1",
            "value": 67,
            "unit": "sec"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64",
            "value": 2,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_1x512x512",
            "value": 0.045,
            "unit": "sec"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64",
            "value": 0.13,
            "unit": "sec"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64",
            "value": 0.76,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x1x512",
            "value": 1.4,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64",
            "value": 0.15,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64",
            "value": 0.66,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x512x1",
            "value": 25,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64",
            "value": 0.99,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64",
            "value": 1.4,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_1x512x512",
            "value": 0.41,
            "unit": "sec"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64",
            "value": 0.42,
            "unit": "sec"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64",
            "value": 1.8,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_512x1x512",
            "value": 3.9,
            "unit": "sec"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64",
            "value": 0.28,
            "unit": "sec"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64",
            "value": 1.6,
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
            "value": 2,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_1x512x512",
            "value": 0.044,
            "unit": "sec"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64",
            "value": 0.14,
            "unit": "sec"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64",
            "value": 0.78,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x1x512",
            "value": 1.4,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64",
            "value": 0.17,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64",
            "value": 0.68,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x512x1",
            "value": 25,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64",
            "value": 0.99,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64",
            "value": 1.2,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_1x512x512",
            "value": 0.41,
            "unit": "sec"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64",
            "value": 0.42,
            "unit": "sec"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64",
            "value": 2.8,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_512x1x512",
            "value": 3.9,
            "unit": "sec"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64",
            "value": 0.27,
            "unit": "sec"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64",
            "value": 3.7,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_512x512x1",
            "value": 65,
            "unit": "sec"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64",
            "value": 3.9,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_1x512x512",
            "value": 0.042,
            "unit": "sec"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64",
            "value": 0.13,
            "unit": "sec"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x1x512",
            "value": 1.4,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64",
            "value": 0.15,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64",
            "value": 0.66,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x512x1",
            "value": 25,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64",
            "value": 0.96,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64",
            "value": 1.3,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_1x512x512",
            "value": 0.41,
            "unit": "sec"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64",
            "value": 0.42,
            "unit": "sec"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64",
            "value": 2.9,
            "unit": "sec"
          },
          {
            "name": "contiguous_write_512x1x512",
            "value": 3.9,
            "unit": "sec"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64",
            "value": 0.26,
            "unit": "sec"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64",
            "value": 5,
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
            "value": 9.5,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_1x512x512",
            "value": 0.044,
            "unit": "sec"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64",
            "value": 0.13,
            "unit": "sec"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64",
            "value": 1.8,
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
            "value": 0.67,
            "unit": "sec"
          },
          {
            "name": "contiguous_read_512x512x1",
            "value": 25,
            "unit": "sec"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64",
            "value": 1,
            "unit": "sec"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64",
            "value": 1.4,
            "unit": "sec"
          }
        ]
      }
    ]
  }
}