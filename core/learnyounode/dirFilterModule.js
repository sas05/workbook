var fs = require('fs');
var path = require('path');

module.exports = function( dirName, fileExt, callback) {

  fs.readdir(dirName, function (error, lists) {
    if(error) {
      return callback(error);
    }

    var results = [];
    lists.forEach(function(list) {
      if(path.extname(list) === '.' + fileExt) {
        results.push(list);
      }
    });

    return callback(null, results);
  });
}
