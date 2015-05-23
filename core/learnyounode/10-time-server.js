var net = require('net');

var server = net.createServer(function (socket) {
  var date = new Date();

  var data = socket.write(date.getFullYear() + '-' + date.getMonth() + '-' + date.getUTCDay() + ' ' + date.getHours() + ':' + date.getMinutes());

  socket.end(data);
});

server.listen(process.argv[2]);