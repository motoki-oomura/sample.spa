const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.css', '.html']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: srcDir + '/index.html',
      filename: 'index.html'
    })
  ]
};