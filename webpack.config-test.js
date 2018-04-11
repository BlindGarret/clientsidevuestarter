var nodeExternals = require('webpack-node-externals')
var webpackConfig = require('./webpack.config.js')

module.exports = {
  externals: [nodeExternals()],
  devtool: '#inline-cheap-module-source-map',
  mode: webpackConfig.mode,
  plugins: webpackConfig.plugins,
  module: webpackConfig.module
}