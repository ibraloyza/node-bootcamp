import os from 'os';

console.log("type of os ",os.type());
console.log("version of os ",os.version());
console.log("arch of ob",os.arch());
console.log("totle memory",(os.totalmem()/1024/1024/1024).toFixed(2),"GB");
console.log("free memory",(os.freemem()/1024/1024/1024).toFixed(2),"GB");
// console.log("CPUs",os.cpus());


console.log("Hostname:", os.hostname());
console.log("Home directory:", os.homedir());
console.log("Current user info:", os.userInfo());

