//Node path module
//Provides utilities for working with file and directory paths
//For more information: https://nodejs.org/api/path.html
const path = require('path');

//Gets whole file path
console.log(__filename);    //not part of path

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));