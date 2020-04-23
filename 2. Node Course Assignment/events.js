//=-=-=-=-=-= Events =-=-=-=-=-=
//Handles emitters and listeners
//More information at: https://nodejs.org/dist/latest-v12.x/docs/api/events.html

//Event emitter class
const EventEmitter = require('events');
//Emitter object
const emitter = new EventEmitter();

//Make a listener
emitter.on('message', (e) => {
    console.log('Listener called', e, e.id, e.msg);
});

//Make an emitter
//Pass in data through an object
emitter.emit('message', { id: 1, msg: 'Hello!'});

//Better method: Using a class instead of the emitter object directly

class Item extends EventEmitter {
    logItem(id, name) {
        //Raise an event
        this.emit('item', {id, name});
    }
}

const item = new Item();
item.on('item', (data) => console.log('Called listener:', data));

item.logItem(1, 'apple');
