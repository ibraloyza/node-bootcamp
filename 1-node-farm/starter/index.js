
const fs = require('fs') 

// this blocking , synchronous way
// reading text from anoother file 
const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);
// writting text into another file
const textOut = `this is what we know about the  avocado: ${textIn}.\nCreated ${Date.now().toLocaleString()}`
fs.writeFileSync('./txt/output.txt',textOut);
console.log('file wrtten !! ');

// this Non-blocking , asynchronous way

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    console.log("--------------------------------------");

    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      console.log("--------------------------------------");

      fs.writeFile(
        "./txt/final.txt",
        `${data2},\n\n ${data3}`,
        "utf-8",
        (err) => {
          console.log("your file has been wrtten 🤗...");
          console.log('-------------------------------------- come in data 4');

          fs.readFile('./txt/final.txt','utf-8',(err,data4)=>{
            console.log(data4);
            
          })
        }
      );
    });
  });
});


console.log('read file while.......');


