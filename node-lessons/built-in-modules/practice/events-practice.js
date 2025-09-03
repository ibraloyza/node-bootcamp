import EventEmitter from "events"

const  emiter  = new EventEmitter();

emiter.on("greet", greet =>{
    console.log("Hello, welcome to Node.js Events!");
})

emiter.on("sum", (a , b)=>{
    console.log("the sum of a + b = " , a + b); 
})


// function sum(a,b){
//     console.log("the sum of a + b = " , a + b);
// }



// emiter.on("greet",greet)
// emiter.on("sum",sum(5,10))

emiter.emit("greet")
emiter.emit("sum",5,10)