var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var utils = require('./utils')
var config = require('./config')
var path = require('path')

module.exports = {
  entry: {
    'index': './src/index.js',
    // 'react-comp': './src/react-comp/app.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js', // 打包后输出文件的文件名
    publicPath: process.env.NODE_ENV === 'production' //相对于html页面
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    // alias: {
    //   'vue$': 'vue/dist/vue.esm.js',
    //   '#': resolve('widget'),
    // },
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module:{
    rules: [
      {
        test: /(\.jsx|\.js|\.es)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('/[name].[ext]')
        }
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html') //new 一个插件的实例，并传入相关的参数
    }),
  ],
}