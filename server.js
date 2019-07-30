// const webpackDevServer = require('webpack-dev-server')
const express =  require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const app = express()
const config = require('./webpack.config.js')
// const compiler = webpack(config)
// 将webpack-dev-middleware配置到express中
app.use(webpackDevMiddleware(webpack(config),{}))
// 监听3000端口
app.listen(3000,()=>{
  console.log(`server listen on port 3000\n`)
})
// const server  = new webpackDevServer(compiler,{});
// server.listen(8080,'localhost',()=>{
//   console.log('dev server li sten on port 8080')
// })/