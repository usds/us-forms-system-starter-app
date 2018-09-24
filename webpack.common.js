const path = require('path');

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  context: process.cwd(),
  node: { __filename: true },
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'js/app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg/,
        loaders: ['svg-url-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 4096,
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 4096,
            name: 'fonts/[name].[ext]',
            mimetype: 'application/font-woff'
          }
        }
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 4096,
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  }
};
