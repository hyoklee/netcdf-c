# NetCDF-4 Performance Benchmarking Workflows

This directory contains GitHub Actions workflows for automated NetCDF-4 performance testing.

## Workflows

### `netcdf-performance-benchmark.yml`

Comprehensive performance testing workflow that:

1. **Builds HDF5 from develop branch**: Always uses the latest HDF5 development version
2. **Builds NetCDF-C**: Compiles against the latest HDF5 with parallel support
3. **Runs Performance Tests**: Executes `tst_chunks3` with various configurations:
   - Different chunk sizes (small, medium, large)
   - Various compression levels (0-9)
   - Shuffle filter testing
   - Read/write performance comparison

4. **Processes Results**: Converts benchmark output to JSON format compatible with `github-action-benchmark`
5. **Publishes to GitHub Pages**: Automatically updates performance charts

## Benchmark Configurations

The workflow tests multiple scenarios:

- **Small Chunks**: 64x64x64 chunks with 512x512x512 dimensions
- **Medium Chunks**: 128x128x128 chunks with 1024x1024x1024 dimensions
- **Large Chunks**: 256x256x256 chunks with 2048x2048x2048 dimensions
- **Compression Levels**: Tests deflate levels 0, 1, 3, 6, 9
- **Shuffle Filter**: Tests shuffle + compression combinations

## Output

- **Performance Charts**: Available at `https://yourusername.github.io/netcdf-c/benchmarks/`
- **Raw Data**: Stored as GitHub Actions artifacts
- **JSON Results**: Compatible with benchmark visualization tools

## Trigger Events

- **Push to main**: Tests performance impact of changes
- **Pull Requests**: Validates performance before merging
- **Daily Schedule**: Tracks performance over time (6 AM UTC)
- **Manual Dispatch**: On-demand testing

## Environment

- **OS**: Ubuntu 24.04
- **HDF5**: Latest develop branch
- **MPI**: OpenMPI for parallel I/O testing
- **Compiler**: GCC with optimizations enabled