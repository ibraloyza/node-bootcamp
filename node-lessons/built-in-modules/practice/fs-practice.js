import fs from 'fs';
// fs-practice
fs.writeFile("note.txt","Hello, this is my first file in Node.js!",()=>{
    // console.log("created new file");
})

fs.appendFile("note.txt","\nthis is a more text....",()=>{
    // console.log("updated note file");
})

fs.readFile("note.txt",'utf-8',(err,data)=>{
    console.log("file content: " ,data);
})

fs.copyFile("note.txt",'copy-note.txt',()=>{
    console.log("copied note file");
})

fs.unlink("copy-note.txt",()=>{
    console.log("deleted");
})

