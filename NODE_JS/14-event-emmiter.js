const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("response",(id,age) => {
    console.log(`The id is ${id} and the age is ${age}`);
});

customEmitter.on("response",() => {
    console.log(`Some BS I'm thinking about`);
});

customEmitter.emit("response",23145,21)

