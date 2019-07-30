// 引入HtmlWebpackPlugin
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入webpackBrowserPlugin
var webpackBrowserPlugin = require('webpack-browser-plugin')
module.exports = {
  // webpack入口起点
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './index.js'],
  // webpack 输出
  output: {
    filename: './dist/test.js'
  },
  // webpack-loaders的配置
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
      // use:{
      //   loader:'babel-loader',
      //   options:{
      //     presets:[
      //       'babel-preset-env',
      //       'babel-preser-stage-0'
      //     ]
      //   }
      // }
    }]
  },
  // 配置webpack-dev-server
  devServer: {
    contentBase: './dist',
    open:true
  },
  // 插件配置
  plugins:[
    // HTML  生成插件
    new HtmlWebpackPlugin(),
    // 浏览器控制插件
    new webpackBrowserPlugin({
      url:'http://localhost',
      port:'3000'
    })
  ]
}
