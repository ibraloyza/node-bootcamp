// import  {original,chunk} from './simp-array.js';
import express, { json } from 'express';
import fs from 'fs'
// original();
// chunk();

const app = express();
app.use(express.json());
const FILE = 'user.json';
const port = 8080;

app.get('/',(req,res)=>{
    res.send("Hello World from Express!");
})

// app.get('/about',(req,res)=>{
//     res.end('hello this is a about page')
// })

// app.get('/contect',(req,res)=>{
//     res.end("this is contect page please contect us node@gmail.com")
// })

// app.use((req,res,next)=>{
//     console.log(`${req.method} ${req.url}`);
//     next;
// })

// crud operation 

function readData(){
    if(!fs.existsSync(FILE))return [];
    return JSON.parse(fs.readFileSync(FILE,'utf-8') ||" []")
}

function writeData(data){
    fs.writeFileSync(FILE,JSON.stringify(data,null,2))
}

//  read all userd
app.get('/user',(req,res)=>{
    const user = readData();
    res.json(user)
})

// get user by id 

app.get("/user/:id",(req,res)=>{
    const users = readData();
    const user = users.find(u => u.id == req.params.id);
    if (!user)  return res.status(404).json({message: "user not found"})  ;
    res.json(user);
    
})

// create  new user

app.post("/user",(req,res)=>{
    const users = readData();
    const newUser =  {id: Date.now(), ...req.body};
    users.push(newUser);
    writeData(users);
    res.status(201).json(newUser);
})

// apdate user
app.put("/user/:id",(req,res)=>{
    const users = readData()
    const user =  users.find(u=> u.id == req.params.id);
    if( user === -1) return res.status(404).json({message: "User not found"});
    users[user] = { ...users[user], ...req.body };
    writeData(users)
    res.json(user[user]);
})

// delete user 

app.delete('/user/:id',(req,res)=>{
   const  user = users.filter(u=>u.id != req.params.id)
   res.send('user deleted')
})

app.listen(port,()=>{
      console.log(`Server running at http://localhost:${port}`);
})