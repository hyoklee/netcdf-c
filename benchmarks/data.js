window.BENCHMARK_DATA = {
  "lastUpdate": 1762929460479,
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
          "message": "fix: resolve github-action-benchmark NaN value errors\n\n- Modified combine_benchmark_results.py to output individual benchmarks instead of grouped series format, as github-action-benchmark doesn't support the grouped format\n- Added validation in parse_benchmark_results.py to detect and skip invalid timing values (NaN, infinity, negative)\n- Added validation in combine_benchmark_results.py to prevent invalid values from propagating to final output\n- This should resolve the \"Invalid input: expected number, received NaN\" errors in the GitHub Action\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T16:39:10-05:00",
          "tree_id": "ce3be7b514538a248438da209b26c22c9ac01204",
          "url": "https://github.com/hyoklee/netcdf-c/commit/15610063e9b6e2fbd3cceab616c11154bdc9f95b"
        },
        "date": 1758750366881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "feat: add workflow to process benchmark data into grouped format\n\n- Added process-benchmark-data.yml workflow that triggers after main benchmark workflow\n- Created create_grouped_data.py script to convert individual benchmarks to series format\n- Workflow automatically updates data_grouped.js and index.html on gh-pages\n- This maintains github-action-benchmark compatibility while providing grouped visualizations\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T16:46:07-05:00",
          "tree_id": "a6378d2a868c27aee9a2c07486ed55d2b9da19af",
          "url": "https://github.com/hyoklee/netcdf-c/commit/6b061cfa94dfb948e88187c98b128a39ba507173"
        },
        "date": 1758750753989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.21,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 2.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.39,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 3.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 0.97,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 5.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.076,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 31,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.31,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 53,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.21,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.37,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 0.92,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.62,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 5.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.073,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 29,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 51,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: resolve YAML syntax errors in process-benchmark-data workflow\n\n- Add document start marker (---)\n- Fix indentation for all workflow steps\n- Quote 'on' keyword to avoid truthy warnings\n- Break long lines for better readability\n- Use HEREDOC for multi-line commit message\n- Add newline at end of file\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T16:59:05-05:00",
          "tree_id": "855f3b2c53ed721f5a5913f14a9bbccae005d741",
          "url": "https://github.com/hyoklee/netcdf-c/commit/947c01459bba244d7979f28d5feb3aaf2d27bbf8"
        },
        "date": 1758751627368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.97,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-24T20:08:07-05:00",
          "tree_id": "4254e417d2fc4bc74cd586d2384421e9e123e2c0",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1758762894311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ad82570c"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1758782111175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 562a2e2d"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 4.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1758868517564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3914bb7f"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1758954719892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.18,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.45,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.29,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.68,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.049,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c38b1480"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.45,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.29,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.054,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759041258657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759127862697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 8f89d1fe"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.12,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.39,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759214159230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 1f52fdcc"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759300662060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.29,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.047,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 4.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 68,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759386727169,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.68,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.046,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 4.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: c83b798d"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759473319732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.046,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac5d5253"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 68,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759559562840,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759645995062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: a9ba4917"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759732640325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 4399814d"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759818984723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 20557aea"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759905276588,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: ac169ed3"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1759991839505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 701b46da"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.12,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.039,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760078091805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.29,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 7.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 6c86f97e"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760164405014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760250660158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.18,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 61cfe6ca"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760337380099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760423629087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.32,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.68,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5047b30f"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760510111714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 849de4ec"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760596497349,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 2ff6c649"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760682954391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.12,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.96,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.039,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760769007702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 59,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.12,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.25,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.39,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 57,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760855468882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.39,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 60,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.25,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.39,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 59,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1760942102188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.68,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 7dd11025"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761028615467,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761114891378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.049,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 26a76baf"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761201329267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.046,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 7.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f981c9c9"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 4.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761287806573,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.047,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 3266a56a"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761373924788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "message": "fix: correct version suffix parsing in create_grouped_data.py\n\n- Fix string slicing for _hdf5_1146 suffix (10 chars, not 11)\n- Improve version detection logic to check both name and extra fields\n- Change output variable from window.GROUPED_BENCHMARK_DATA to window.BENCHMARK_DATA\n- Now correctly groups benchmarks by base name with series format\n- All benchmarks with both HDF5 versions are properly paired\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-25T01:08:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/c4a987a946ab0e494d0c2a083f895bea7253c35d"
        },
        "date": 1761460217192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 6.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c97b9a12c7c09b12fee7778bb72b75dcd825295",
          "message": "Merge branch 'Unidata:main' into main",
          "timestamp": "2025-10-26T13:02:31-05:00",
          "tree_id": "3a4841729ccf7dd53b26cd65cfd8a610d215e4de",
          "url": "https://github.com/hyoklee/netcdf-c/commit/7c97b9a12c7c09b12fee7778bb72b75dcd825295"
        },
        "date": 1761502227277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 60,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "a7195612f3893c400a58926bf314bdecc9552cdc",
          "message": "Fix MPI type conflict when HDF5 is built with MPI support\n\nAdd MPI_COMM_WORLD guard to prevent dummy MPI type definitions from\nconflicting with real MPI types included via HDF5 headers. This resolves\ncompilation errors when HDF5 library is compiled with MPI support.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T15:38:08-05:00",
          "tree_id": "6c71d598e000ef25a38ebf8af25323e56c72a552",
          "url": "https://github.com/hyoklee/netcdf-c/commit/a7195612f3893c400a58926bf314bdecc9552cdc"
        },
        "date": 1761511555601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.97,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "5ff6e175d3896604fb11da33c2c9988ce7b8efaa",
          "message": "Fix MPI type conflict by ensuring correct include order\n\nWhen HDF5 is built with MPI support but netcdf-c is not built with\nparallel support, MPI type conflicts occur because ncdispatch.h defines\ndummy MPI types (int) before hdf5.h includes the real MPI types.\n\nThis fix ensures HDF5 headers are included before any netcdf headers:\n- Move hdf5.h include in hdf5internal.h before the header guard\n- Reorder includes in nc4var.c to include hdf5internal.h before nc4dispatch.h\n\nThis allows HDF5's mpi.h to define MPI types first, preventing ncdispatch.h\nfrom creating conflicting dummy type definitions.\n\nResolves compilation errors when linking against HDF5 built with MPI support.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T16:34:10-05:00",
          "tree_id": "d6d6926547cd8c8de910f0cbc635ef6517268179",
          "url": "https://github.com/hyoklee/netcdf-c/commit/5ff6e175d3896604fb11da33c2c9988ce7b8efaa"
        },
        "date": 1761514948158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "b3afd13d4534751104cbd731ba888c3a72d02e00",
          "message": "Fix MPI type conflict in libdispatch/dvarinq.c\n\nMove hdf5.h include before ncdispatch.h in dvarinq.c to ensure HDF5's\nMPI types are defined before ncdispatch.h attempts to define dummy types.\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T17:05:01-05:00",
          "tree_id": "ad840cdadd6c0e9eafd762c046ec044983e5ad8c",
          "url": "https://github.com/hyoklee/netcdf-c/commit/b3afd13d4534751104cbd731ba888c3a72d02e00"
        },
        "date": 1761516695147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "9a94290c2abbea6dfc420683537500ce384ff5d5",
          "message": "Fix MPI type conflict in libdispatch/dfilter.c\n\nMove hdf5internal.h include before ncdispatch.h in dfilter.c to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T17:11:32-05:00",
          "tree_id": "fa783f03512959bf1ba688538a30c34848de7401",
          "url": "https://github.com/hyoklee/netcdf-c/commit/9a94290c2abbea6dfc420683537500ce384ff5d5"
        },
        "date": 1761517230325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T17:54:07-05:00",
          "tree_id": "21f8894d46fa733af761bdf6c09df74dec89bdbd",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1761519727446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1761547548442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: cd2414b2"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1761633429800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.12,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.39,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1761719615425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e5f526b6"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.96,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1761806106106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 42588aeb"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1761892639259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e4113ffa"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1761978760924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.045,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.45,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 62,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762065042880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 85f7f8f0"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.12,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762151801079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 10c2ddc3"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762238237941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: eb72e67e"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762324606284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.042,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 03b0b4fe"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.12,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.26,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.04,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762411088548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.046,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 25,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f64c1902"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.046,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 63,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762497555880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.21,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.22,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.36,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 2.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 0.92,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.62,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.075,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 29,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.33,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 52,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 53b52f85"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.36,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 2.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 0.91,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.069,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.29,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 50,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762583574311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.22,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.23,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.39,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 0.93,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.63,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 5.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.077,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 29,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 52,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: f8baa1b4"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.21,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.36,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 3.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 0.92,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.62,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 5.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.074,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 29,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.29,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 51,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762670259757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.66,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.043,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 65,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 5fb78e20"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.13,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.99,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.27,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.65,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.041,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 22,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 61,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762756652297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.22,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.37,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 2.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 0.91,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.61,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.072,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 29,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 2.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 52,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 9b865ef6"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.21,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.37,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 2.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 0.91,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.07,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 50,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762843010924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.15,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.46,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.29,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.68,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.046,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 26,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 4.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 68,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: 94b38391"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.44,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.3,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.6,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.9,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.047,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 24,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.42,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 4.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
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
          "id": "659ddf2794934c3c0a61e45041293ef534129849",
          "message": "Fix MPI type conflict in libhdf5/nc4hdf.c and liblib/nc_initialize.c\n\nMove hdf5internal.h include before ncdispatch.h in both files to ensure\nHDF5's MPI types are defined before ncdispatch.h attempts to define\ndummy types.\n\nChanges:\n- libhdf5/nc4hdf.c: Swap include order of hdf5internal.h and ncdispatch.h\n- liblib/nc_initialize.c: Move USE_HDF5 block before ncdispatch.h include\n\nThis resolves compilation errors when HDF5 is built with MPI support but\nnetcdf-c is not built with parallel support enabled.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-26T22:54:07Z",
          "url": "https://github.com/hyoklee/netcdf-c/commit/659ddf2794934c3c0a61e45041293ef534129849"
        },
        "date": 1762929448264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.16,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.18,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_develop",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_develop",
            "value": 0.3,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_develop",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_develop",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.046,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 1.5,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 26,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_develop",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_develop",
            "value": 3.9,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_develop",
            "value": 68,
            "unit": "sec",
            "extra": "HDF5 develop - HDF5: e99a4958"
          },
          {
            "name": "chunked_read_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.14,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.2,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_read_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.17,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_1x512x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.43,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x1x64_chunks_512x64x64_ctx_deflate6_hdf5_1146",
            "value": 1.1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "chunked_write_512x512x64_chunks_1x64x64_ctx_deflate6_hdf5_1146",
            "value": 0.28,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_read_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 0.67,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_1x512x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 2.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x1x64_chunks_512x64x64_deflate6_hdf5_1146",
            "value": 4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "compressed_write_512x512x64_chunks_1x64x64_deflate6_hdf5_1146",
            "value": 3.7,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.044,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 1.4,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_read_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 23,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_1x512x512_ctx_deflate6_hdf5_1146",
            "value": 0.41,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x1x512_ctx_deflate6_hdf5_1146",
            "value": 3.8,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          },
          {
            "name": "contiguous_write_512x512x1_ctx_deflate6_hdf5_1146",
            "value": 64,
            "unit": "sec",
            "extra": "HDF5 1.14.6"
          }
        ]
      }
    ]
  }
}