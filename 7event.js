const ev = require('events');
const evEmitter = new ev.EventEmitter();

let evExample = ()=>{
    console.log('I hear a event');
}

evEmitter.on('runCode',evExample);

evEmitter.emit('runCode');