console.log("start");


setTimeout(()=>{
    console.log("TimeOut fired");
},0)

// Blocking loop
for(let i = 0; i< 1e9; i++){} //blocking work


console.log("End");

