import {EventEmitter} from 'events';

export const bus = new EventEmitter();

bus.on('error', (err)=>{
    console.log("Error:", err.message || err);
})

