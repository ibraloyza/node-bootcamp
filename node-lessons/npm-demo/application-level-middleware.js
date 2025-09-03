import express from 'express';
import { checkAuth } from './route-level-middleware.js';

const app = express();
const PORT = 8080;


// Middleware : logs every request

app.use((req,res,next)=>{
    console.log(`[LOG] ${req.method } ${req.url} `);
    next(); // allow next handler
})


//  Middleware for auth check


app.get('/',(req,res)=>{
    res.end("this is a home page ");
    
})
app.get('/about',(req,res)=>{
    res.end("this is a about page ");
    
})


app.get('/dashboard',checkAuth, (req,res)=>{
    res.end('Welcome to the dashboard');
})


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})