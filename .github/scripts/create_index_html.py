#!/usr/bin/env python3
"""
Create an index.html file for the gh-pages branch that shows both
standard benchmark results and custom HDF5 plots.
"""

import argparse
from pathlib import Path


def create_index_html(gh_pages_dir: str):
    """Create index.html for the gh-pages branch."""
    gh_pages_path = Path(gh_pages_dir)

    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NetCDF-4 Performance Benchmarks</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1, h2 {
            color: #333;
            border-bottom: 2px solid #007acc;
            padding-bottom: 10px;
        }
        .benchmark-section {
            margin: 30px 0;
        }
        .plot-container {
            text-align: center;
            margin: 20px 0;
        }
        .plot-container img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin: 10px;
        }
        .description {
            background-color: #f8f9fa;
            padding: 15px;
            border-left: 4px solid #007acc;
            margin: 20px 0;
            border-radius: 4px;
        }
        .link-section {
            background-color: #e9ecef;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0;
        }
        .link-section a {
            color: #007acc;
            text-decoration: none;
            font-weight: bold;
        }
        .link-section a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>NetCDF-4 Performance Benchmarks</h1>

        <div class="description">
            <p>This page shows performance benchmarks for NetCDF-4 using different HDF5 versions.
            The benchmarks test various chunking and compression scenarios to track performance
            changes over time as HDF5 develops.</p>
        </div>

        <div class="link-section">
            <h3>Standard Benchmark Results</h3>
            <p>Interactive benchmark charts with timeline view:
            <a href="./index.html" target="_blank">Standard GitHub Pages Benchmark</a></p>
        </div>

        <div class="benchmark-section">
            <h2>Custom HDF5-Based Performance Plots</h2>

            <div class="description">
                <p>These custom plots show benchmark results with HDF5 commit hashes on the x-axis,
                making it easier to correlate performance changes with specific HDF5 versions.</p>
            </div>

            <div class="plot-container">
                <h3>Performance Timeline by HDF5 Commit</h3>
                <img src="./custom-plots/hdf5_performance_timeline.png"
                     alt="HDF5 Performance Timeline"
                     title="Performance changes across different HDF5 commits">
            </div>

            <div class="plot-container">
                <h3>Latest Performance Comparison</h3>
                <img src="./custom-plots/hdf5_performance_comparison.png"
                     alt="HDF5 Performance Comparison"
                     title="Performance comparison for the latest HDF5 commit">
            </div>
        </div>

        <div class="benchmark-section">
            <h2>About the Benchmarks</h2>
            <div class="description">
                <ul>
                    <li><strong>Storage Types:</strong> Contiguous, Chunked, and Compressed storage</li>
                    <li><strong>Operations:</strong> Write and Read operations</li>
                    <li><strong>Compression:</strong> Various deflate compression levels (0-9)</li>
                    <li><strong>HDF5 Version:</strong> Latest develop branch commit</li>
                    <li><strong>Test Dataset:</strong> 3D arrays with different chunking patterns</li>
                </ul>

                <p><strong>Benchmark Test:</strong> The <code>tst_chunks3</code> program tests NetCDF-4
                performance with different chunking and compression settings.</p>
            </div>
        </div>

        <footer style="margin-top: 40px; text-align: center; color: #666; border-top: 1px solid #ddd; padding-top: 20px;">
            <p>Generated automatically by GitHub Actions •
            <a href="https://github.com/Unidata/netcdf-c">NetCDF-C Repository</a></p>
        </footer>
    </div>
</body>
</html>"""

    index_file = gh_pages_path / "benchmark-index.html"
    with open(index_file, 'w') as f:
        f.write(html_content)

    print(f"Created benchmark index at {index_file}")


def main():
    parser = argparse.ArgumentParser(description='Create benchmark index.html')
    parser.add_argument('gh_pages_dir', help='Path to gh-pages directory')

    args = parser.parse_args()
    create_index_html(args.gh_pages_dir)


if __name__ == "__main__":
    main()