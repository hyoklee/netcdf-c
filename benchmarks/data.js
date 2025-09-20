window.BENCHMARK_DATA = {
  "lastUpdate": 1758349653859,
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
      }
    ]
  }
}