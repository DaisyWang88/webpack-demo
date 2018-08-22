// export function simplifyParams(params) {
//   const param = {};
//   Object.keys(params).forEach((item) => {
//     let val = params[item];
//     if (typeof val === 'string') {
//       val = val.trim();
//     }
//     if (val) {
//       param[item] = val;
//     }
//   });
//   return param;
// }
//  export function isContains(arr, obj) {
//   let i = arr.length;
//   while (i--) {
//     if (arr[i] === obj) {
//       return true;
//     }
//   }
//   return false;
// }
// export let age = 12;
// export function addAge () {
//   age++;
// }
// module.exports = {
//   age,
//   addAge: ()=>{
//     age++;
//   }
// }
define(function(require, exports, module){
  //依赖模块a
  var a = require('./add');
  var age = 18;
  module.exports = {
    age,
    addAge: ()=>{
      age++;
    }
  }
  //调用模块a的方法
  console.log(a(12, 34));
})