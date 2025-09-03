 const fs = require('fs')

const net = require('net')

 const http = require('http');
const { Socket } = require('dgram');

console.log("Start");

setTimeout(()=>{
    console.log("inside TimeOut");
},2000)

setImmediate(()=>{
    console.log("Immediate");
    
})

process.nextTick(()=>{
    console.log("process");
    
})
Promise.resolve().then(()=>{
    console.log("promise");
    
})

// 🔹 Example: Network Request (I/O macrotask)

// File read (asynchronous I/O callback → macrotask)
fs.readFile('fileSystem.txt', 'utf-8',(err,data) =>{
    if(err) throw err
    console.log("File read complete async (I/O callback)");
})


// 🔹 Example: Network Request (I/O macrotask)
http.get("http://jsonplaceholder.typicode.com/todos/1",(res)=>{
    console.log("get response (I/O collback)");

    res.on("data", (chunk)=>{
        console.log("Recived data.......");
    })

    res.on("end", ()=>{
        console.log("Response Ended");
    })
    
})

// 🔹 Example: Socket (I/O macrotask)

const server = net.createServer((Socket)=>{
    Socket.on('data', (data) =>{
        console.log("Recived data", data.toString());
        
    })
})

server.listen(3000,()=>{
    console.log("Server listening on port 3000");
    
})



console.log("End");



