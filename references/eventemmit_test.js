const EventEmitter = require('events');

// Create CLass
class TestEvEM extends EventEmitter { }

// Init object
const testEvEm = new TestEvEM();

// Event listener
testEvEm.on('actualeventname', () => {
    console.log('The actual event was triggered');
});

// Init the event
testEvEm.emit('actualeventname');