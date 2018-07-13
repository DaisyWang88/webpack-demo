#!/usr/bin/env node

var shell = require('shelljs');
var chalk = require('chalk');
// var rd = require('../fis-conf/deploy-hosts.json');

var error = chalk.bold.red;
var info = chalk.bold.cyan;
var warning = chalk.bold.yellow;

// var args = process.argv.slice(2, process.argv.length);

// var rdAddress = '';

// for (var i = 0, length = args.length; i < length; i++) {
//   if(rd[args[i]]) {
//     rdAddress = rd[args[i]].receiver.replace(/receiver\.php/, '');
//     break;
//   }
// }

// console.log('rd address:', rdAddress)

// var fisCommand = 'cross-env HOT=true fis3 release ' + args.join(' ') + ' -c';
var hmrCommand = 'node build/dev-server.js'


//  console.log(info('\n NOW RUNNING:\t' + fisCommand))

// shell.exec(fisCommand, function(code, stdout, stderr){
//   console.log(info('\n RELEASE DONE TO:'));
//   if (rdAddress) {
//     console.log(warning('\n ' + rdAddress))
//   }
//   console.log(info('\n STARTING HMR SERVER...'))
//   console.log(info('\n NOW RUNNING:\t' + hmrCommand + '\n'));
//   shell.exec(hmrCommand);
// })


shell.exec(hmrCommand);

