window.BENCHMARK_DATA = {
  "lastUpdate": 1758782113267,
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
      }
    ]
  }
};
