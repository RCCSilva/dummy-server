'use strict';

const http = require('http')
const PORT = process.env.HTTP_PORT || 3000

function handler(req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(handler)
server.listen(PORT)
console.log(`Listening on ${PORT}`)