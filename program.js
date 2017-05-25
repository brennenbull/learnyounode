// function maths(array){
//   let total = 0;
//   for(let i = 2; i < array.length; i++){
//     total += Number(array[i]);
//   }
//   console.log(total);
// }
//
// maths(process.argv)

const fs = require('fs');
const path = require('path');
const http = require('http');
const mymodule = require('./mymodule.js');


// <--My first I/0-->

// let str = fs.readFileSync(process.argv[2]).toString();
// let arr = str.split('\n');
// console.log(arr.length - 1);

// <--My First Async i/0-->

// fs.readFile(process.argv[2], function(err,buf){
//   let str = buf.toString();
//   let arr = str.split('\n');
//   console.log(arr.length - 1);
// });

// <--Filtered LS-->

// let ext = process.argv[3];
// fs.readdir(process.argv[2],function(err, list){
//   if(err){
//     console.log(err)
//   }
//   for(let i = 0; i < list.length; i++){
//     if(path.extname(list[i]) == '.' + ext){
//       console.log(list[i]);
//     }
//   }
// });

// <--Make it Modular--->
// let directory = process.argv[2];
// let ext = process.argv[3];
// var callback = function (err, list) {
//   if (err){
//     console.log(err);
//   }
//   list.forEach(function (file) {
//       console.log(file);
//   })
// };
//
// mymodule(directory, ext, callback);

// <---HTTP Client---->
// let url = process.argv[2];
// http.get(url, function callback (response){
//   response.setEncoding('utf8');
//   response.on('data', function(data){
//     console.log(data);
//   })
//
