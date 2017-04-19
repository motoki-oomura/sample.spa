const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');
const buildDir = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    app: srcDir + '/index.js'
  },
  output: {
    path: buildDir,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
             scss: 'vue-style-loader!css-loader!sass-loader'
            }
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.html', '.vue'],
    alias: ({
      vue: 'vue/dist/vue.js',
      vueRouter: 'vue-router/dist/vue-router.js'
    })
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: srcDir + '/index.html',
      filename: 'index.html'
    })
  ]
};