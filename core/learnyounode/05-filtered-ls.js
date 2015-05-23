var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (error, lists){

  if(error) {
    console.log(error);
  }
  lists.forEach(function(list) {
    if(path.extname(list) === '.' + process.argv[3])
      console.log(list);
  });
});
