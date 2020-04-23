//=-=-=-=-=-= HTTP =-=-=-=-=-=
//Creates a local server on local port 5000
//More information at: https://nodejs.org/dist/latest-v12.x/docs/api/http.html

const http = require('http');

//Create server
const server = http.createServer((request, response) => {
    response.write('Hello!');
    response.write(JSON.stringify(['apple', 'pear', 'banana']));
    response.end();
}).listen(5000);    //Run on local port 5000