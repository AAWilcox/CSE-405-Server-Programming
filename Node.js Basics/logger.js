//More practical example of Node's event module

const EventEmitter = require('events');
const uuid = require('uuid');   //To randomly create ID

class Logger extends EventEmitter {

    //Every time we call log, it should display message and id
    log(msg){
        //Call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

//Export module
module.exports = Logger;

const logger = new Logger();
logger.on('message', (data) => console.log(`Called Listener:`, data));
logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');