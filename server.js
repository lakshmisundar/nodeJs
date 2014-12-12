/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1127, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1127/');
*/
/*
var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');
console.log('woo hoo');
*/
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('input.html', function(err, data){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(data);
  });
}).listen(1127, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1127/');