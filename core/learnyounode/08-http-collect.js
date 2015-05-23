http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function callback (response) {
  response.setEncoding('utf8');
  response.pipe(concatStream(function(data) {
    console.log(data.length);
    console.log(data);
  }));
});