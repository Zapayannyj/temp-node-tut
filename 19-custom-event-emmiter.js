const EventEmitter = require('events')

const customEmitter = new EventEmitter;

customEmitter.on('response', (name, id)=> {
    console.log(`data received by ${name} id ${id} `)
})
customEmitter.on('resonse', ()=>{
    console.log(`another data received `)
})
customEmitter.emit('response','vlad', 22)