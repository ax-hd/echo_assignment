var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './js/app.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', "stage-0"],
          plugins: ['transform-decorators-legacy', "transform-regenerator"],
        }
      }
    ]
  },
  stats:{
    color: true
  },
  devtool: 'source-map'
};
