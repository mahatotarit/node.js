const http = require('http');

const PORT = 80;

const server = http.createServer((req, res) => {
  res.write('Nodejs server running...');
  res.end();
});

server.listen(PORT);
