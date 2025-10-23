window.BENCHMARK_DATA = {
  "lastUpdate": 1761201337503,
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
          "id": "15610063e9b6e2fbd3cceab616c11154bdc9f95b",
          "message": "fix: resolve github-action-benchmark NaN value errors\n\n- Modified combine_benchmark_results.py to output individual benchmarks instead of grouped series format, as github-action-benchmark doesn't support the grouped format\n- Added validation in parse_benchmark_results.py to detect and skip invalid timing values (NaN, infinity, negative)\n- Added validation in combine_benchmark_results.py to prevent invalid values from propagating to final output\n- This should resolve the \"Invalid input: expected number, received NaN\" errors in the GitHub Action\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T16:39:10-05:00",
          "tree_id": "ce3be7b514538a248438da209b26c22c9ac01204",
          "url": "https://github.com/hyoklee/netcdf-c/commit/15610063e9b6e2fbd3cceab616c11154bdc9f95b"
        },
        "date": 1758750366881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
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
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
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
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.17,
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
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.44,
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
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
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
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
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
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
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
                "value": 1.4,
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
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
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
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
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
                "value": 4.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4.1,
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
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
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
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
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
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
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
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 25,
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
                "value": 0.41,
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
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
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
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 66,
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
          "id": "6b061cfa94dfb948e88187c98b128a39ba507173",
          "message": "feat: add workflow to process benchmark data into grouped format\n\n- Added process-benchmark-data.yml workflow that triggers after main benchmark workflow\n- Created create_grouped_data.py script to convert individual benchmarks to series format\n- Workflow automatically updates data_grouped.js and index.html on gh-pages\n- This maintains github-action-benchmark compatibility while providing grouped visualizations\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T16:46:07-05:00",
          "tree_id": "a6378d2a868c27aee9a2c07486ed55d2b9da19af",
          "url": "https://github.com/hyoklee/netcdf-c/commit/6b061cfa94dfb948e88187c98b128a39ba507173"
        },
        "date": 1758750753989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.21,
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
                "value": 1.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.1,
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
                "value": 0.23,
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
                "value": 0.37,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.39,
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
                "value": 3.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.5,
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
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
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
                "value": 0.97,
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
                "value": 1.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2,
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
                "value": 5.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 5.9,
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
                "value": 3.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.5,
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
                "value": 0.076,
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
                "value": 2,
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
                "value": 31,
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
                "value": 0.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.31,
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
                "value": 3.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.5,
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
                "value": 51,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 53,
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
          "id": "947c01459bba244d7979f28d5feb3aaf2d27bbf8",
          "message": "fix: resolve YAML syntax errors in process-benchmark-data workflow\n\n- Add document start marker (---)\n- Fix indentation for all workflow steps\n- Quote 'on' keyword to avoid truthy warnings\n- Break long lines for better readability\n- Use HEREDOC for multi-line commit message\n- Add newline at end of file\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T16:59:05-05:00",
          "tree_id": "855f3b2c53ed721f5a5913f14a9bbccae005d741",
          "url": "https://github.com/hyoklee/netcdf-c/commit/947c01459bba244d7979f28d5feb3aaf2d27bbf8"
        },
        "date": 1758751627368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
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
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.97,
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
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
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
                "value": 0.41,
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
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
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
                "value": 0.26,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
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
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
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
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
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
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.65,
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
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
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
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.8,
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
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
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
                "value": 0.04,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.041,
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
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
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
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
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
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
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
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.6,
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
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 62,
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T20:08:07-05:00",
          "tree_id": "4254e417d2fc4bc74cd586d2384421e9e123e2c0",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1758762894311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
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
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
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
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
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
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
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
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
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
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
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
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
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
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
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
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
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
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
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
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
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
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
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
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
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
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
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
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
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
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
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
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.8,
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
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 66,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1758782111175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.99,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
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
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 562a2e2d"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1758868517564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.04,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 3914bb7f"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1758954719892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.18,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.45,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.45,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.29,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.29,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.68,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.054,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.049,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c38b1480"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759041258657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759127862697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.12,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.99,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.44,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.99,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.26,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.39,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 62,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 8f89d1fe"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759214159230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.04,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 62,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 1f52fdcc"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759300662060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.29,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
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
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.047,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 68,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759386727169,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.44,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
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
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.68,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.046,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: c83b798d"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759473319732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.046,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 68,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac5d5253"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759559562840,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.045,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 62,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759645995062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: a9ba4917"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759732640325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 4399814d"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759818984723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
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
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.045,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.045,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 62,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 20557aea"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759905276588,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 22,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 62,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: ac169ed3"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759991839505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.12,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.44,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.26,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.039,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 701b46da"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760078091805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.44,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.29,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
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
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.045,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 6c86f97e"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760164405014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.44,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.045,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760250660158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.18,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.045,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 61cfe6ca"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760337380099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760423629087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.32,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
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
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.68,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.04,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 5047b30f"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760510111714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 849de4ec"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760596497349,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.99,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.44,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 2ff6c649"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760682954391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.12,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.96,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.26,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.039,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.042,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 22,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 62,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760769007702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.12,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.25,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.26,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.04,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.39,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
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
                "value": 6.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 57,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 59,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760855468882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.99,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.25,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.26,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.04,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.39,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.39,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
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
                "value": 6.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 59,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 60,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760942102188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.68,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.045,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.044,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.5,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 64,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 62,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 7dd11025"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761028615467,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.42,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.26,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.041,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 23,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.6,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 63,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761114891378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.13,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.15,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.16,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.3,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.9,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.049,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 6.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 65,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: 26a76baf"
              }
            ]
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
          "id": "c4a987a946ab0e494d0c2a083f895bea7253c35d",
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n\ud83e\udd16 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761201329267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.14,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.2,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.17,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.27,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.28,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 1.6,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 1.5,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.67,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 2.8,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 4,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 3.7,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.043,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.046,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6",
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
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 24,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 25,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 0.41,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 0.43,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 4.1,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 7.2,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6",
            "series": [
              {
                "name": "HDF5 1.14.6",
                "value": 66,
                "unit": "sec",
                "extra": "HDF5 1.14.6"
              },
              {
                "name": "HDF5 develop",
                "value": 66,
                "unit": "sec",
                "extra": "HDF5 develop - HDF5: f981c9c9"
              }
            ]
          }
        ]
      }
    ]
  }
};
