import fs from 'fs/promises';

//  fs/promises → Async/Await Version

// wrote file 

// async function  writeFile() {
//     try {
//         await fs.writeFile('notes.txt',"Hello from fs/promises 🚀");
//         const data = await fs.readFile('notes.txt','utf-8')
//         console.log('file content: ', data);
//     } catch (error) {
//        console.log(error);
        
//     }
    
// }

// writeFile();


// copy file 

// async function copyFile() {
//     try {
//         await fs.copyFile('notes.txt','notes-copy.txt')
//         const data = await fs.readFile('notes-copy.txt','utf-8')
//         console.log('content copy file:',data);        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// copyFile()

// append file 

async function appendFile() {
    try {
        await fs.appendFile('notes.txt','\nthis is a line  appended into notes.txt')
        const data = await fs.readFile('notes.txt','utf-8')
        console.log('appended content notes.txt file:', data);
        
    } catch (error) {
        console.log(error);
        
    }
    
}

appendFile()