require('./check-versions')()

var config = require('./config')
if (!process.env.NODE_ENV) { //process.env 返回一个包含用户环境信息的对象，可以给这个对象设置属性。
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn') //各种open open文件 app 网页
var path = require('path')
var express = require('express') //快速、开放、极简的 web 开发框架
var cors = require('cors')  // cors跨域
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
// var autoOpenBrowser = !!config.dev.autoOpenBrowser
var autoOpenBrowser = true
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

app.use(cors());

var compiler = webpack(webpackConfig)

//webpack-dev-middleware调用webpack的api对系统文件watch，当文件发生改变，webpack进行编译打包，并发送到服务器
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  // publicPath: webpackConfig.output.publicPath,
  publicPath: 'http://localhost:8088', //服务端口路径
  quiet: true //不向控制台显示任何内容
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  // path: "http://localhost:8080/"
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
// Object.keys(proxyTable).forEach(function (context) {
//   var options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(options.filter || context, options))
//   // app.use(proxyMiddleware('http://localhost:3133/__webpack_hmr', {target: 'http://localhost:8080/__webpack_hmr'}))
// })


// app.use(cors);

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
