setImmediate(()=>{
    console.log("Immediate 1");
})

setTimeout(()=>{
    console.log("TimeOut 1");
},0)

Promise.resolve().then(()=>{
    console.log("promise");
})

process.nextTick(()=>{
    console.log("process.nextTick");    
})