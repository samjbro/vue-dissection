var alias = require('../../scripts/alias')
var webpackConfig = {
  resolve: {
    alias
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = {
  frameworks: ['jasmine'],
  files: [
    './index.js'
  ],
  webpack: webpackConfig,
  preprocessors: {
    './index.js': ['webpack']
  },
  plugins: [
    'karma-jasmine',
    'karma-webpack'
  ]
}