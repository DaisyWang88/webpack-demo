// var express = require('express');
// var opn = require('opn');
// var http = require('http');
// http.get('http://int.dpool.sina.com.cn/iplookup/iplookup.php', function(req, res) {
//   res.on(data, function (chunk) {
//     alert(chunk);
//   });
// })




// var app = express();

// app.use(function (req, res) {
//   res.send('Hello World!');
// });

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   var uri = 'http://localhost:' + port;

//   console.log('Example app listening at http://%s:%s', host, port);
//   opn(uri)
// });



var http = require('http');
http.createServer(function(req, res){
  if(req.url === '/message'){
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*' // 则允许所有域名的脚本访问该资源。
    });
    setInterval(function(){
      // res.write('event: bbbb\n');
      res.write('data: ' + +new Date() + '\n\n');
    }, 1000);
  }
}).listen(8888);

