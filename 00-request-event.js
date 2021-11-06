const http = require('http')

//const server = http.createServer((req,res) => {
//    res.end('Welcome')
//})

//Using Event emmiter api
const server = http.createServer()
//emits request event 
//subscibe to is / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)