const io = require('socket.io')(80);

io.on('connection', (socket) => {

	console.log('New connection');

	socket.on('disconnect', () =>{
		console.log('anyone leave the server');
	})

});

