const fs = require('fs');


// Node.js program to demonstrate the 
// crypto.pbkdf2Sync() method

// Including crypto module
const crypto = require('crypto');

// Implementing pbkdf2Sync
const key = crypto.pbkdf2Sync('secret',
           'salt', 2000, 64, 'sha512');

// Prints buffer
console.log(key);

setTimeout(()=> console.log("timer 1 finished"),0);
setImmediate(()=>console.log("immediate 1 finished"));

const start = Date.now();

fs.readFile('test-file.txt',()=>{
    console.log("I/O finished");
    console.log('--------------------');
    
    setTimeout(()=> console.log("timer 2 finished"),3000);
    setImmediate(()=>console.log("immediate 3 finished"),0);
    setImmediate(()=>console.log("immediate 2 finished"));


    process.nextTick(()=> console.log("process.nextTick"));

    Promise.resolve("promise 1").then(console.log)

    // crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    crypto.pbkdf2Sync("password", "salt", 100000,1024,"sha512")
    console.log(Date.now() - start, "password encrypted");
    
    
})

console.log("hello from top-level code ");

