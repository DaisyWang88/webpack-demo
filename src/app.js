import React from 'react';
import { render } from 'react-dom';
import Greeter from './greeter';
import './main.css'; //使用require导入css文件

// const es = new EventSource('http://localhost:8888/message');// /message是服务端支持EventSource的接口
// es.onmessage = function(e){
//   console.log('ondata', e.data); // 打印服务器推送的信息
// }
render(
  <Greeter />, document.getElementById('root')
);