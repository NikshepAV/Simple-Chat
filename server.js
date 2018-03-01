var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);
var messageHistory = []

io.on('connection', function (socket) {

	messageHistory.forEach(function(msg) {
		io.emit('message', msg);
	});

	socket.on('message', function (msg) {
		io.emit('message', msg);
		messageHistory.push(msg);
	});
});

// local deployment
// server.listen(8080, function() {
// 	console.log('Chat server running');
// });

// remote deployment
server.listen(process.env.PORT, process.env.IP);