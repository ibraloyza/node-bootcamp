const EventEmitter = require('events');

console.log('EventEmitter');

const myEmitter = new EventEmitter();

myEmitter.on('newSale',()=>{
    console.log('there was a newSale ');
})

myEmitter.on('newSale',()=>{
    console.log('a customer name: ibra');  
})

myEmitter.on('newSale', stack => {
    console.log(`there are a new ${stack} itesms in left stack items  `);    
})
myEmitter.emit('newSales',9)