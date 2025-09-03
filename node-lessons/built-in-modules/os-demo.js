import os from 'os';

console.log("platform",os.platform());
console.log("Architecture",os.arch());
console.log("CPUs",os.cpus().length);
console.log("free memory",os.freemem());
console.log("Home dir",os.homedir());


