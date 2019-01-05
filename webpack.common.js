const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {
  entry: {
    client: ["./client/index.js"]
  },
  output: {
    filename: "[name].[hash:5].js",
    path: path.join(__dirname, "/dist"),
    chunkFilename: "[name].[contenthash:5].js",
    publicPath: "./dist/",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          enforce: true,
          chunks: "all"
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    },
  },
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
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "./dist/"
        }
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: "./client/index.html",
      filename: "./index.html"
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, "./")
    }),
  ]
};