console.log("start");

setTimeout(()=>{
    console.log("TimeOut 0ms");
    
},0)

setImmediate(()=>{
    console.log("Immediate ");
})

Promise.resolve().then(()=>{
    console.log("promise");
})

process.nextTick(()=>{
    console.log("process.textTick");
})

console.log("End");

