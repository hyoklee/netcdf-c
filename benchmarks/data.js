window.BENCHMARK_DATA = {
  "lastUpdate": 1758503126432,
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
          "id": "61f40c5f8dfaa7070b213d1826eb901067f916d1",
          "message": "Fix benchmark generation to prevent duplicate entries\n\n- Enhanced parse_benchmark_results.py with deduplication logic\n- Added proper deflate level differentiation for benchmark names\n- Simplified workflow to eliminate redundant test loops\n- Added debug output to identify and report duplicates\n- Streamlined benchmark execution from 5 redundant runs to 1 comprehensive test\n\nThis fixes the root cause that generated 288 duplicate entries in benchmarks/data.js\nby ensuring unique benchmark names across different compression levels and preventing\nmultiple executions of the same test scenarios.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-19T10:28:14-05:00",
          "tree_id": "1bbe23385a798890021ac9d7bf2f4533cd5e282b",
          "url": "https://github.com/hyoklee/netcdf-c/commit/61f40c5f8dfaa7070b213d1826eb901067f916d1"
        },
        "date": 1758296196527,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.98,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "value": 2.7,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
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
          "id": "61f40c5f8dfaa7070b213d1826eb901067f916d1",
          "message": "Fix benchmark generation to prevent duplicate entries\n\n- Enhanced parse_benchmark_results.py with deduplication logic\n- Added proper deflate level differentiation for benchmark names\n- Simplified workflow to eliminate redundant test loops\n- Added debug output to identify and report duplicates\n- Streamlined benchmark execution from 5 redundant runs to 1 comprehensive test\n\nThis fixes the root cause that generated 288 duplicate entries in benchmarks/data.js\nby ensuring unique benchmark names across different compression levels and preventing\nmultiple executions of the same test scenarios.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-19T15:28:14Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/61f40c5f8dfaa7070b213d1826eb901067f916d1"
        },
        "date": 1758349651676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5: fe8de456"
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
          "id": "61f40c5f8dfaa7070b213d1826eb901067f916d1",
          "message": "Fix benchmark generation to prevent duplicate entries\n\n- Enhanced parse_benchmark_results.py with deduplication logic\n- Added proper deflate level differentiation for benchmark names\n- Simplified workflow to eliminate redundant test loops\n- Added debug output to identify and report duplicates\n- Streamlined benchmark execution from 5 redundant runs to 1 comprehensive test\n\nThis fixes the root cause that generated 288 duplicate entries in benchmarks/data.js\nby ensuring unique benchmark names across different compression levels and preventing\nmultiple executions of the same test scenarios.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-19T15:28:14Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/61f40c5f8dfaa7070b213d1826eb901067f916d1"
        },
        "date": 1758436555508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
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
          "id": "b9f5694c9b3248bc6871a3864cad7f0ec52f90a2",
          "message": "test: hdf5-1.10",
          "timestamp": "2025-09-21T13:33:22-05:00",
          "tree_id": "2eaf76135dcacca2f727a5ba9d8f82e610e87b6c",
          "url": "https://github.com/hyoklee/netcdf-c/commit/b9f5694c9b3248bc6871a3864cad7f0ec52f90a2"
        },
        "date": 1758479924101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
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
          "id": "f74facce030cf843d54f29dc682392cb700f5c67",
          "message": "chore: set name to 1.10",
          "timestamp": "2025-09-21T13:59:49-05:00",
          "tree_id": "6727fc9fbaca7b6665e4f3cbc655e7bb110e701e",
          "url": "https://github.com/hyoklee/netcdf-c/commit/f74facce030cf843d54f29dc682392cb700f5c67"
        },
        "date": 1758481534532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.29,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "value": 0.68,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "value": 67,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
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
          "id": "1e2fec1247803d0d9d5ba07b80bae5ed0a1ded01",
          "message": "ci: free up space",
          "timestamp": "2025-09-21T15:44:45-05:00",
          "tree_id": "90257a1f9e8ef3afb789d2025938b4bed4a822c4",
          "url": "https://github.com/hyoklee/netcdf-c/commit/1e2fec1247803d0d9d5ba07b80bae5ed0a1ded01"
        },
        "date": 1758487796921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
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
          "id": "4e04ca00d12e33c2acd69e7847aeb215f0f90d01",
          "message": "ci: free up space",
          "timestamp": "2025-09-21T15:46:38-05:00",
          "tree_id": "b27f262107b50e4b119f100fe3112fb820c29b70",
          "url": "https://github.com/hyoklee/netcdf-c/commit/4e04ca00d12e33c2acd69e7847aeb215f0f90d01"
        },
        "date": 1758487929018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "value": 26,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "value": 67,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
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
          "id": "ff3287c93384796128aa1393c75b00c150f1e837",
          "message": "fix: prevent hanging in tst_chunks3 by adding disk space checks\n\nAdd disk space validation to tst_chunks3 benchmark test to prevent\nhanging when insufficient disk space is available. The test now:\n- Checks available disk space before execution\n- Calculates required space for 3 variables with 20% overhead\n- Exits gracefully with error message if space insufficient\n- Monitors disk space during write operations\n- Uses portable statvfs() on Linux/Unix/macOS systems\n\nThis resolves hanging issues in GitHub Actions medium-size tests\nwhere ~8.6GB is required but only ~25GB is available on runners.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-21T20:00:43-05:00",
          "tree_id": "e065bc8062dd130260a5c5a5c1d4b0bca0255f8e",
          "url": "https://github.com/hyoklee/netcdf-c/commit/ff3287c93384796128aa1393c75b00c150f1e837"
        },
        "date": 1758503124796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5: 6ea1f504"
          }
        ]
      }
    ]
  }
}