
const fs = require('fs') ;
const http = require('http');
const url = require('url');


/////////////////////////////
// FILES
// this blocking , synchronous way
// reading text from anoother file 
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// writting text into another file
// const textOut = `this is what we know about the  avocado: ${textIn}.\nCreated ${Date.now().toLocaleString()}`
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('file wrtten !! ');

// this Non-blocking , asynchronous way

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     console.log("--------------------------------------");

//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       console.log("--------------------------------------");

//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2},\n\n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("your file has been wrtten 🤗...");
//           console.log('-------------------------------------- come in data 4');

//           fs.readFile('./txt/final.txt','utf-8',(err,data4)=>{
//             console.log(data4);
            
//           })
//         }
//       );
//     });
//   });
// });


// console.log('read file while.......');

/////////////////////////////
// SERVER
// this is a asynchronous way
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res)=>{    
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end('this is overview page');        
    }else if(pathName  === '/product'){
        res.end('this is a product page ');        
    }else if(pathName === '/api'){
        // this is a asynchronouse way
        // fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data)=>{
        //     const productData = JSON.parse(data)
        //     res.writeHead(200,{'content-type':'application/json'})
        //     res.end(data);
        // })

        res.writeHead(200,{'content-type':'application/json'})
        res.end(data);
    }else{
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'hello headers'
        })
        res.end("<h1>page not found! </h1>");
    }
})

const port = 8080;
const localhost = '127.0.0.1';

server.listen(port,localhost,()=>{
    console.log(`start server in localhost ${localhost}: on port ${port}`);
})
