
const Net = require('net');

const port = 3000;
const host = 'localhost';

const client = new Net.Socket();

client.connect({ port: port, host: host }, () => {

    console.log('TCP connection established with the server');

    client.write('Hello, server');
});

client.on('data', (chunk)=> {
    console.log(`Data received from the server: ${chunk.toString()}`);

    // Request an end to the connection after the data has been received.
    client.end();
});

client.on('end', ()=> {
    console.log('Requested an end to the TCP connection');
});
