//Node http module
//Designed to support many features of the protocol
//More information: https://nodejs.org/api/http.html
const http = require('http');

//Create server object
http.createServer((request, response) => {
    //Write response
    response.write('Hello World');
    response.end();
}).listen(5000, () => console.log('Server running'));   //Local port 5000