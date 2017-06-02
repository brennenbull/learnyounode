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
const url = require('url');



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

//<-----------------HTTP COLLECT---------->

// let url = process.argv[2];
// http.get(url, function (response){
//   response.setEncoding('utf8');
//   let string = '';
//   response.on('data', function(word){
//     string += word;
//   });
//   response.on('end', function(){
//     console.log(string.length);
//     console.log(string);
//   });
// });


//<---------------JUGGLING ASYNC---------->>>>>
//
// let url1 = process.argv[2];
// let url2 = process.argv[3];
// let url3 = process.argv[4];
// let url1string = "";
// let url2string = "";
// let url3string = "";
//
// let url2function = function(){
//   http.get(url2 , function(response){
//     response.setEncoding('utf8');
//     let string = '';
//     response.on('data', function(word){
//       string += word;
//     });
//     response.on('end', function(){
//       url2string = string;
//       console.log(url2string);
//       url3function();
//     })
//   });
// }
//
// let url3function = function(){
//   http.get(url3 , function(response){
//     response.setEncoding('utf8');
//     let string = '';
//     response.on('data', function(word){
//       string += word;
//     });
//     response.on('end', function(){
//       url3string = string;
//       console.log(url3string)
//     })
//   });
// }
//
//
// http.get(url1 , function(response){
//   response.setEncoding('utf8');
//   let string = '';
//   response.on('data', function(word){
//     string += word;
//   });
//   response.on('end', function(){
//     url1string = string;
//     console.log(url1string);
//     url2function();
//   })
// });

// //<----------TIME SERVER--------->
// const net = require('net');
// const strftime = require('strftime');
//
// var server = net.createServer(function (socket) {
//   socket.write(strftime('%Y-%m-%d %H:%M'));
//   socket.end('\n');
// })
// server.listen(process.argv[2]);
//<--------HTTP FILE SEVER-------->
// const port = process.argv[2];
// var files = process.argv[3];
// var server = http.createServer((req, res)=>{
//   fs.createReadStream(files).pipe(res);
// });
//
// server.listen(port);

//<---------HTTP UPPERCASERER------>

// var map = require('through2-map')
// var server = http.createServer(function(req, res){
//   req.pipe(map(function (chunk) {
//    return chunk.toString().toUpperCase();
//  })).pipe(res);
// }).listen(process.argv[2]);

//<--------HTTP JSON API SERVER----->

const port = process.argv[2];
var server = http.createServer(function(req, res){
  var pathUrl = url.parse(req.url, true);
  var resultObj ={};
  if(req.method !== 'GET'){
    return res.write('ERRRRROR')
    res.end();
  }else if(pathUrl.pathname === '/api/parsetime'){
    var newDate = new Date(pathUrl.query.iso);
    resultObj.hour = newDate.getHours();
    resultObj.minute = newDate.getMinutes();
    resultObj.second = newDate.getSeconds();
    res.write(JSON.stringify(resultObj));
    res.end();
  }else if(pathUrl.pathname === '/api/unixtime'){
    resultObj.unixtime = Date.parse(pathUrl.query.iso);
    res.write(JSON.stringify(resultObj));
    res.end();
  }else {
    res.sendstatus(404);
    res.end();
  }
}).listen(port);
