const http = require('http');
const path = require('path');
const fs = require('fs');

//Create server
const server = http.createServer((request, response) => {

    /*=-=-=-=-= Not really an efficient method =-=-=-=-=
    //Read index.html file
    if(request.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            //Check for error
            if(err) throw err;
            //Set content type
            response.writeHead(200, {'Content-Type': 'text.html'});
            //Output content of the file
            response.end(content);
        });
    }

    //Read about.html file
    if(request.url === '/about') {
        //read index.html file
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            //Check for error
            if(err) throw err;
            //Set content type
            response.writeHead(200, {'Content-Type': 'text.html'});
            //Output content of the file
            response.end(content);
        });
    }

    //Example of fetching data from a data base
    //data has been hardcoded in
    if(request.url === '/api/users') {
        //Users data
        const users = [
            { name: 'Bob Smith', age: 40},
            { name: 'John Doe', age: 30}
        ];
        //Set content type
        response.writeHead(200, {'Content-Type': 'application/json'});
        //Convert users objects into JSON
        response.end(JSON.stringify(users));
    }*/


    //=-=-=-= Better Method =-=-=-=

    //Build file path - allow file path to be dynamic
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);

    //Extnesion of file
    let extname = path.extname(filePath);

    //Initial content type
    let contentType = 'text/html';

    //Check extension and set content type
    switch(extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
                break;
        case ".jpg":
            contentType = "image/jpg";
            break;
        }

    //Check if contextType is text/html but no .html file extension
    if(contentType == "text/html" && extname == "")
        filePath += ".html";

    //Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(content, 'utf8');
                });
            } else {
                //Some server error
                response.writeHead(500);
                response.end(`Server Error: ${err.code}`);
            } 
        } else {
            //Success
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf8');
        }
    });
});

//Create port number
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));