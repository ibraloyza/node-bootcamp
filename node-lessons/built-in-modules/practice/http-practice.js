import http from 'http';
import { url } from 'inspector';

const server = http.createServer((req,res)=>{
    const pathname = req.url;
    console.log(req.url);
    if (pathname=== "/"|| pathname === "/home") {
        res.end("Welcome to my Node.js server")
    }

    else if (pathname === "/about") {
        res.end("this is about  page")
    }

   else if (pathname === "/contect") {
        res.end("Contact us at: support@example.com")
    }else{
            res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'hello headers'
        })
        res.end("<h1>404 Page Not Found </h1>");
    }

});
const port = 8080;
const localhost = '127.0.0.1';

server.listen(port,localhost,()=>{

    console.log(`start server in localhost ${localhost}: on port ${port}`);
})