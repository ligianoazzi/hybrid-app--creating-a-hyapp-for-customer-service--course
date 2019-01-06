const io = require('socket.io')(80);

io.on('connection', (socket) => {

	console.log('Nova conexão');

});