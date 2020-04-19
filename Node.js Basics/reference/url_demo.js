//Node URL module
//Provides utilities for URL resolution and parsing
//More information: https://nodejs.org/api/url.html
const url = require('url');

const myURL = new URL('httl://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

//Host (root domain)
console.log(myURL.host);

//Hostname
//Almost same as host, but hostname does not include port number
console.log(myURL.hostname);

//Path name
console.log(myURL.pathname);

//Serialized query
console.log(myURL.search);

//Search parameter object
console.log(myURL.searchParams);

//Add parameter
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams);

//Loop through parameters
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
