/* eslint-disable */
require('eventsource-polyfill');

var port = require('./config/index').dev.port;
var hotClient = require('webpack-hot-middleware/client?path=http://localhost:8089/__webpack_hmr&noInfo=true&reload=true')
// var hotClient = require('webpack-hot-middleware/client' + '?path=http://localhost:' + port + '/__webpack_hmr&noInfo=true&reload=true');

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
// require('react-hot-loader/patch');
