let path = require('path');
module.exports = {
    context: path.resolve('./src'),
    entry: 'app.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
  module: {
    loaders:
    [
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query:
          {
              presets: ['react', 'es2015']
          }
      }
  ]}}
