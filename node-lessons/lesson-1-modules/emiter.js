import EventEmitter  from 'events'

const emitter = new EventEmitter();

// emitter.once('login',()=>{
//     console.log('user logged in (once atime )');
// })

// emitter.on('login-user',()=>{
//     console.log('user logged in (every  atime  you emit)'); 
// })



// setTimeout(()=>{
//     console.log('..................');
//     emitter.emit('login-user')
//     emitter.emit('login-user') 

// },2000)

// emitter.emit('login')
// emitter.emit('login')// ignored 


//  remove Listener

const greet = ()=>{console.log('hello');}

emitter.on('greet',greet);
emitter.emit('greet');

emitter.removeAllListeners('greet',greet);
emitter.emit('greet');