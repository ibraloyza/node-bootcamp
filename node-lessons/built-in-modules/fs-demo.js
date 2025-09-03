import fs from 'fs';
// const fs = require('fs')


// write new file 

// fs.writeFile("hello.txt","hello bro i'm ibra ",(err,data)=>{
//     if (err) {
//         throw err
//     }
//     else{
//         console.log('create new file called hello.txt');
//     }
// });

// read file 
fs .readFile("hello.txt",'utf-8',(err,data)=>{
    if (err) {
        throw err
    }
    else{
        console.log("file content: ", data);
    }
});

// appende new content

fs.appendFileSync("hello.txt","\nthis is a more text",(err,data)=>{
    if (err) {
        throw err
    }
    else{
        console.log("updated:");
    }
})



