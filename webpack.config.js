var path = require('path');
var webpack = require('webpack')
module.exports = {
  entry: './app/index.js',
  devtool: "cheap-eval-source-map",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};