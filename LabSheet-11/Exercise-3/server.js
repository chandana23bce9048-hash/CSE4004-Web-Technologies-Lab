// Import events module
const EventEmitter = require('events');

// Create an event emitter object
const eventEmitter = new EventEmitter();

// Listener 1 for 'greet' event
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

// Listener 2 for 'greet' event (multiple listeners)
eventEmitter.on('greet', (name) => {
    console.log(`How are you, ${name}?`);
});

// Listener for 'dataReceived' event
eventEmitter.on('dataReceived', (data) => {
    console.log('Data received:', data);
});

// Listener demonstrating async behavior
eventEmitter.on('asyncEvent', () => {
    setTimeout(() => {
        console.log('Async event handled after 2 seconds');
    }, 2000);
});

// Emit events with data
console.log('Triggering greet event...');
eventEmitter.emit('greet', 'Adil');

console.log('\nTriggering dataReceived event...');
eventEmitter.emit('dataReceived', { id: 101, message: 'Hello Node.js' });

console.log('\nTriggering async event...');
eventEmitter.emit('asyncEvent');