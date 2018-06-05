var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']}
    ]
  }
}
