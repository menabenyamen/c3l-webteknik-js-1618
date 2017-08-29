// Expand the chat server by writing a bot.
// The bot could example auto reply every time someone
// types "jeans" and explain that your shop has the best jeans
// Or everytime someone swears tell them, not to etc.

const net = require('net');

const PORT = 5000;
let sockets = [];

function broadcast(message) {
  sockets.forEach((socket) => {
    socket.write(`${message}\n`);
  });
}

net.createServer((socket) => {
  socket.write('Welcome to Tom\'s server');

  // Put the socket with all the other sockets in
  // client array
  sockets.push(socket);

  // When the client sends me data
  socket.on('data', (message) => {
    // Pass on the message to everyone else
    broadcast(message);
  });

  socket.on('end', () => {
    sockets = sockets.filter((client) => {
      return client !== socket;
    });
  })







}).listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`server started on ${PORT}`);
  }
});
