const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const MinifyPlugin = require('babel-minify-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: "[name].[contenthash:5].js",
    chunkFilename: "[name].[contenthash:5].js",
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true
  //     }),
  //     new OptimizeCSSAssetsPlugin({})
  //   ]
  // },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production"),
    }),
    new MiniCssExtractPlugin({
      publicPath: "./",
      filename: "style.[contenthash:5].css"
    }),
    new CleanWebpackPlugin(["dist", "build"], {
      verbose: true,
      dry: false
      // exclude: ['shared.js']
    }),
    // new MinifyPlugin()
  ]
});