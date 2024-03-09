const{ EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('launch' , () => {
    console.log('yum bum');
})

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

