http = require('http');
var concatStream = require('concat-stream');

var results = [];
var count = 0;

function print() {
  for(var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function get(index) {
  http.get(process.argv[2 + index], function callback (response) {
    response.setEncoding('utf8');
    response.pipe(concatStream(function(data) {
      results[index] = data;
      count++;

      if(count === 3)
        print();
    }));
  });
}

for (var j = 0; j < 3; j++) {
  get(j);
}