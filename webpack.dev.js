const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.common.js'), {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
  }
});
