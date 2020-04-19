//Examples of including modules from other .js files

//Include person from person.js
const person = require('./person');
console.log(person);

//Include People class from person.js
const People = require('./people');
const person1 = new People('John Doe', 30);
console.log(person1.greeting());

//Include logger event from logger.js
const Logger = require('./logger');
const logger = new Logger();
logger.on('message', (data) => console.log(`Called Listener:`, data));
logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');