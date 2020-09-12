const port = process.env.PORT || 3000;
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: 'inline-source-map',
  plugins: [new ErrorOverlayPlugin()],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
    compress: true,
    overlay: true,
  },
};
