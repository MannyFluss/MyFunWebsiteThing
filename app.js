// const Logger = require('./myCoolModule');
// const path = require('path');
// const os = require('os');

// const EventEmitter = require('events');

// const log = new Logger();


// log.on('messageLogged', (arg) =>{
//     console.log('Listener called',arg);
// })
// log.on('logging', (arg) =>{
//     console.log('Listener called',arg);
// })

// log.log('message');




//no window just global


//logger.log(`totalmem : ${os.totalmem()}`);
const app = require('express')();

app.get('/', (req, res) => {
    res.json({message:"docker test"})

})

