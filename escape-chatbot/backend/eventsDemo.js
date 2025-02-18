import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello! ' + name);
}

function goodbyeHandler(name) {
    console.log('Goodbye! ' + name);
}

//greet event call greet handler
myEmitter.on('greet', greetHandler);

//goodbye event call goodbye handler
myEmitter.on('goodbye', goodbyeHandler);

//Emit events with events and params
myEmitter.emit('greet', 'John')
myEmitter.emit('goodbye', 'John')


//Error handling
myEmitter.on('error', (err) => {
    console.error('Error: ' + err);
})

myEmitter.emit('error', new Error('Something went wrong!'));