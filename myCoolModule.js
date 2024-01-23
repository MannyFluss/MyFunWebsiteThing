
const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message) {
        console.log(__filename);
        console.log(__dirname);
        console.log(message);
    
        this.emit('logging',{data:"message goes here"} )
    
    
    }
}


module.exports = Logger;
