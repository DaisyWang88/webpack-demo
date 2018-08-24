import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './main.css'; //使用require导入css文件

import { sayHi } from './greeting.js';

import config from './config';
console.log(config);

let util = require('./util'); // 测试CMD规范的支持

// const es = new EventSource('http://localhost:8888/message');// /message是服务端支持EventSource的接口
// es.onmessage = function(e){
//   console.log('ondata', e.data); // 打印服务器推送的信息
// }
sayHi();
console.log(util.age);
util.addAge();
console.log(util.age);


render(
  <App />, document.getElementById('root')
);