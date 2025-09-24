window.BENCHMARK_DATA = {
  "lastUpdate": 1758751632448,
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
      },
    ]
  }
};
