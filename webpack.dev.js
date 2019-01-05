const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].[hash:5].js',
    chunkFilename: '[name].[contenthash:5].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 8080,
    publicPath: '/dist/',
    https: false,
    hotOnly: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    open: 'http://localhost:8080/',
    proxy: {
      "/api": {
        "target": "http://localhost:3001"
      },
      "/assets": {
        "target": "http://localhost:3001"
      }
    },
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                'react-hot-loader/babel'
              ]
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader?url=false',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});