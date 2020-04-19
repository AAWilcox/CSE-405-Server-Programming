//Node event module
///Emitters emit named events that cause function objects (listeners) to be called
//More information: https://nodejs.org/api/events.html
const EventEmitter = require('events');

//Create emitter class
class MyEmitter extends EventEmitter { }

//Initialize object
const myEmitter = new MyEmitter();

//Event listener
//Whenever 'event' is emitted, console.log('Even fired!)' will deploy
myEmitter.on('event', () => console.log('Even fired!'));

//Initialize event
myEmitter.emit('event');

//More practical example of event: logger.js