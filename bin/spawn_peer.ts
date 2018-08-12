#!/usr/bin/env ts-node

import * as net from 'net';

let host = process.env.BIND_HOST || '0.0.0.0'; 
let port = process.env.BIND_PORT || 5252;

let peerHost = '127.0.0.1';
let peerPort = 5252;

(async function() {

    const server = net.createServer({ allowHalfOpen: true })

    server.listen(port);

    server.on('listening', () => {

      console.log(`server listening on port ${port}`);

    });

    server.on('connection', async (socket) => {

      socket.on('close', () => {

        console.log('socket closed');

      });

      console.log('socket connected', socket);

    });

    server.on('connection', async (socket) => {

      console.log('socket connected', socket);

    });

    let socket = new net.Socket(); 

    socket.connect(peerPort);

})();

