
const fs = require('fs') 

// reading text from anoother file 
const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);


// writting text into another file

const textOut = `this is what we know about the  avocado: ${textIn}.\nCreated ${Date.now().toLocaleString()}`
fs.writeFileSync('./txt/output.txt',textOut);
console.log('file wrtten !! ');



