const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { generateScopedName } = require('./incstr-prod');

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const styleRegex = /(\.css)|(\.(scss|sass))$/;

const nodeModulesRegex = /node_modules/;

// common function to get style loaders
const getStyleLoaders = (env, cssOptions, preProcessor) => {
  const loaders = [
    {
      loader: env.env === 'prod' ? MiniCssExtractPlugin.loader : 'style-loader',
    },
    {
      loader: 'css-loader',
      options: cssOptions,
    },
    {
      loader: 'postcss-loader',
    },
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push(
      {
        loader: 'resolve-url-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: preProcessor,
        options: {
          sourceMap: true,
        },
      },
    );
  }
  return loaders;
};

const moduleObject = (env) => {
  let partialObject = {
    localIdentName: '[name]__[local]__[hash:base64:5]',      
    exportLocalsConvention: 'camelCaseOnly',
  }
  if (env.env === 'prod') {
    partialObject = {
      ...partialObject,
      getLocalIdent: (context, _localIdentName, localName, _options) => {
        return generateScopedName(localName, context.resourcePath);
      },
    }
  }
  return partialObject
}

module.exports = (env) => ({
  entry: {
    app: `${commonPaths.appEntry}/index.tsx`,
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        loader: 'worker-loader',
      },
      {
        test: /\.(js|jsx|ts|tsx?)$/,
        exclude: nodeModulesRegex,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: env.env,
          },
        },
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders(env, {
          importLoaders: 1,
        }),
        sideEffects: true,
      },
      {
        test: cssModuleRegex,
        use: getStyleLoaders(env, {
          modules: moduleObject(env),
          importLoaders: 1,
        }),
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(
          env, {
            importLoaders: 2,
          },
          'sass-loader'
        ),
        sideEffects: true,
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          env, {
            modules: moduleObject(env),
            importLoaders: 2,
          },
          'sass-loader',
        ),
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[contenthash].[ext]',
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/media/[name].[contenthash].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxInitialRequests: 20,
      maxAsyncRequests: 20,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: styleRegex,
          chunks: 'all',
          enforce: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, _chunks, cacheGroupKey) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `node_modules/${cacheGroupKey}.${packageName.replace('@', '')}`;
          },
        },
        common: {
          minChunks: 2,
          priority: -10,
        },
      },
    },
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
});
