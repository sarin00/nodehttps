const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('caling', { id: 'uuid.v4()', msg });
    }
}

// module.exports = Logger;

// const Logger = require('./logger');

const mylogger = new Logger();

mylogger.on('caling', data => {
    console.log('Called Listener:', data);
});

mylogger.log('Hello testing logger gere');
mylogger.log();