const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');
const buildDir = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    'bundle': srcDir + '/index.ts',
    'vendor': srcDir + '/vendor.ts'
  },
  output: {
    path: buildDir,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.ts$/,
        exclude: '/node_modules/',
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.scss$/,
        exclude: '/node_modules/',
        use: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader', publicPath: '/assets' })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss','.css', '.html']
  },
  plugins: [
    new ExtractTextWebpackPlugin('assets/css/style.css'),
    new HtmlWebpackPlugin({
      template: srcDir + '/index.html',
      filename: 'index.html'
    })
  ]
};