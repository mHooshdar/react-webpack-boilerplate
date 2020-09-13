const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'static/[contenthash].js',
  },
  // comment this line if you want to use
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            comparisons: false,
            drop_console: true
          },
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
          warnings: false,
        },
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css',
      chunkFilename: 'styles/[contenthash].chunk.css',
    }),
    // new WorkboxPlugin.GenerateSW({
    //   swDest: 'service-worker.js',
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    // comment the devtool if you want to uncomment this section
    // new webpack.SourceMapDevToolPlugin({
    //   // server url
    //   publicPath: 'https://localhost:5050/',
    //   filename: '[file].map',
    // }),
  ],
};
