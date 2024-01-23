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

const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('FUCK');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');

