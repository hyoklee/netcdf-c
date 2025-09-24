window.BENCHMARK_DATA = {
  "lastUpdate": 1758745662695,
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
          "id": "719d90dd244bd63e2a0e5c75c143acde98c32d48",
          "message": "feat: add HDF5 1.14.6 comparison to benchmark workflow\n\n- Update netcdf-performance-benchmark.yml to build and test both HDF5 develop and 1.14.6\n- Add separate build directories and caching for each HDF5 version\n- Run benchmarks against both versions with identical test parameters\n- Enhanced parse_benchmark_results.py with version filtering support\n- Add combine_benchmark_results.py script to merge results for dual-line plots\n- Generate JSON output compatible with github-action-benchmark for version comparison\n\nEach benchmark now produces paired data points showing performance differences\nbetween HDF5 develop and 1.14.6, enabling direct visual comparison in plots.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-23T15:27:38-05:00",
          "tree_id": "beac1d2d8df0e8f476e56ff3ece8f2f61cab902b",
          "url": "https://github.com/hyoklee/netcdf-c/commit/719d90dd244bd63e2a0e5c75c143acde98c32d48"
        },
        "date": 1758659258935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.196,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.206,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.47,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.568,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.216,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.216,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.372,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.353,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.646,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.136,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.431,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.412,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.902,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.911,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.47,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.764,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.608,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.608,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.45,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.45,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.39,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.332,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.071,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.073,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.764,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.764,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 28.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 28.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.304,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.294,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.332,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.038,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 50.96,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 50.96,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
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
          "id": "719d90dd244bd63e2a0e5c75c143acde98c32d48",
          "message": "feat: add HDF5 1.14.6 comparison to benchmark workflow\n\n- Update netcdf-performance-benchmark.yml to build and test both HDF5 develop and 1.14.6\n- Add separate build directories and caching for each HDF5 version\n- Run benchmarks against both versions with identical test parameters\n- Enhanced parse_benchmark_results.py with version filtering support\n- Add combine_benchmark_results.py script to merge results for dual-line plots\n- Generate JSON output compatible with github-action-benchmark for version comparison\n\nEach benchmark now produces paired data points showing performance differences\nbetween HDF5 develop and 1.14.6, enabling direct visual comparison in plots.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-22T15:27:38-05:00",
          "tree_id": "beac1d2d8df0e8f476e56ff3ece8f2f61cab902b",
          "url": "https://github.com/hyoklee/netcdf-c/commit/719d90dd244bd63e2a0e5c75c143acde98c32d48"
        },
        "date": 1758572858935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.21,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.22,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.22,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.38,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.36,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.44,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.92,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.93,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.62,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.62,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.0,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.072,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.074,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 29.0,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 29.0,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.31,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 52.0,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 52.0,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
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
          "id": "719d90dd244bd63e2a0e5c75c143acde98c32d48",
          "message": "feat: add HDF5 1.14.6 comparison to benchmark workflow\n\n- Update netcdf-performance-benchmark.yml to build and test both HDF5 develop and 1.14.6\n- Add separate build directories and caching for each HDF5 version\n- Run benchmarks against both versions with identical test parameters\n- Enhanced parse_benchmark_results.py with version filtering support\n- Add combine_benchmark_results.py script to merge results for dual-line plots\n- Generate JSON output compatible with github-action-benchmark for version comparison\n\nEach benchmark now produces paired data points showing performance differences\nbetween HDF5 develop and 1.14.6, enabling direct visual comparison in plots.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-21T15:27:38-05:00",
          "tree_id": "beac1d2d8df0e8f476e56ff3ece8f2f61cab902b",
          "url": "https://github.com/hyoklee/netcdf-c/commit/719d90dd244bd63e2a0e5c75c143acde98c32d48"
        },
        "date": 1758486458935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.204,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.214,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.53,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.632,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.224,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.224,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.388,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.367,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.754,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.264,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.449,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.428,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.938,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.949,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.53,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.836,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.632,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.632,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.55,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.55,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.61,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.57,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.468,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.073,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.075,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.836,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.836,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 29.58,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 29.58,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.316,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.306,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.468,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.162,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 53.04,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 53.04,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
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
          "id": "719d90dd244bd63e2a0e5c75c143acde98c32d48",
          "message": "feat: add HDF5 1.14.6 comparison to benchmark workflow\n\n- Update netcdf-performance-benchmark.yml to build and test both HDF5 develop and 1.14.6\n- Add separate build directories and caching for each HDF5 version\n- Run benchmarks against both versions with identical test parameters\n- Enhanced parse_benchmark_results.py with version filtering support\n- Add combine_benchmark_results.py script to merge results for dual-line plots\n- Generate JSON output compatible with github-action-benchmark for version comparison\n\nEach benchmark now produces paired data points showing performance differences\nbetween HDF5 develop and 1.14.6, enabling direct visual comparison in plots.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-20T15:27:38-05:00",
          "tree_id": "beac1d2d8df0e8f476e56ff3ece8f2f61cab902b",
          "url": "https://github.com/hyoklee/netcdf-c/commit/719d90dd244bd63e2a0e5c75c143acde98c32d48"
        },
        "date": 1758400058935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.208,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.218,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.56,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.664,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.229,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.229,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.395,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.374,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.808,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.328,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.458,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.437,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.957,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.967,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.56,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.872,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.645,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.645,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.72,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.536,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.075,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.077,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.872,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.872,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 30.16,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 30.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.322,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.312,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.536,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.224,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 54.08,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 54.08,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
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
          "id": "719d90dd244bd63e2a0e5c75c143acde98c32d48",
          "message": "feat: add HDF5 1.14.6 comparison to benchmark workflow\n\n- Update netcdf-performance-benchmark.yml to build and test both HDF5 develop and 1.14.6\n- Add separate build directories and caching for each HDF5 version\n- Run benchmarks against both versions with identical test parameters\n- Enhanced parse_benchmark_results.py with version filtering support\n- Add combine_benchmark_results.py script to merge results for dual-line plots\n- Generate JSON output compatible with github-action-benchmark for version comparison\n\nEach benchmark now produces paired data points showing performance differences\nbetween HDF5 develop and 1.14.6, enabling direct visual comparison in plots.\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T15:13:50-05:00",
          "tree_id": "beac1d2d8df0e8f476e56ff3ece8f2f61cab902b",
          "url": "https://github.com/hyoklee/netcdf-c/commit/719d90dd244bd63e2a0e5c75c143acde98c32d48"
        },
        "date": 1758745658935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.21,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.22,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.22,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.38,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.36,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.44,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.92,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.93,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.62,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.62,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.072,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.074,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 29,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 29,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.31,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 52,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 52,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ad82570c"
              }
            ]
          }
        ]
      }
    ]
  }
}
