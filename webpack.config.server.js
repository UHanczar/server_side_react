const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExtertals = require('webpack-node-externals');

const baseConfig = require('./webpack.config.base.js');

const config = {
  // inform webpack that we're building a bundle for nodeJS, not for browser
  target: 'node',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExtertals()]
};

module.exports = merge(baseConfig, config);
