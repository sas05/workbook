var filter = require('./dirFilterModule');

filter(process.argv[2], process.argv[3], function callback(error, lists) {
  if(error) {
    console.log(error);
  }

  lists.forEach(function(list) {
    console.log(list);
  })
});