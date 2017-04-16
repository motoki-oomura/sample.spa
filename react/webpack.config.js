// babelを使えるようにする
require('babel-core/register');

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// 読み込み元と出力先のパスを定義。console.logでみたらどうなるかわかる
const srcDir = path.resolve(__dirname, 'src');
const buildDir = path.resolve(__dirname, 'build');


// module.export した設定が webpackコマンドで適用される
module.exports = {
  // どのjsを最初に読むかを宣言
  entry: srcDir+ '/index.jsx',

  // どこにファイルを出力するか、 バンドルしたjsの名前を指定して吐き出す
  output: {
    path: buildDir,
    filename: 'build.js'
  },

  // gulpのtaskのように、loaderを指定して、何をするか宣言する
  // test => どのファイルを対象にするかを正規表現で指定
  // exclude => 指定したtaskから除外するフォルダまたはファイル
  // use => どのloaderを使うのか指定 babel-loaderの場合は、testで指定したファイルに対して babel を適用する
  // babel-loader => 別途、.babelrcで設定したのを元に動く。今回の場合は 「es2015」「react」をトランスパイルする。
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  // resolve extensions => entryで読み込んだjsの内部で require または import したファイルの拡張子を指定。指定しないとwebpackでエラーになる
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // webpackの最後に動く部分
  // htmlWebpackPlugin => 指定したhtmlをテンプレートとして、名前を指定して出力。出力先はうえのoutput先
  plugins: [
    new htmlWebpackPlugin({
      template: srcDir + '/index.html',
      filename: 'index.html'
    }),
  ]
};
