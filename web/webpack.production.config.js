const webpack = require('webpack')

module.exports = {
  entry:
    './source/index.js'
  ,
  output: {
    filename: 'bundle.js',
    path:  './dist',
    publicpath: './dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'SERVER_ADDRESS': '"http://localhost:3000"',
        'NODE_ENV': JSON.stringify('production'),
        'GCAPTCHA_PUBLIC_KEY' : '"6Lcg7CQUAAAAACOO9rQyGwP6XN2hprlTh268VldF"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpg$/,
        loader: 'file-loader'
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
}
