const fs = require('fs');
const path = require('path');


module.exports = function(directory, ext, callback){
  fs.readdir(directory,function(err, list){
    if(err){
      return callback(err);
    }
    var filelist = [];
    for(let i = 0; i < list.length; i++){
      if(path.extname(list[i]) == '.' + ext){
        filelist.push(list[i]);
      }
    }
    return callback(null, filelist);
  });
};
