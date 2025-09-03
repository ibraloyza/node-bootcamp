import { addNotes, listNotes,deleteNotes,searchNotes } from "./storage.js";

import { bus } from "./eventBus.js";

function showHelp() {
  console.log(`
        Usage:
            node index.js add "your note text"
            node index.js list
            node index.js delete <id>
            node index.js search "keyword"

        env:
            NOTES_FILE=path/to/file.json default: (notes.json)
        `);
}

bus.on("note:added",(note)=>{
    console.log(`Note added : #${note.id} - ${note.text}`);
    
})

bus.on("notes:list",(notes)=>{
    console.log(`you have ${notes.length} note(s):`);
    for (const n of notes)  console.log(`- (#${n.id}) ${n.text}`);
})





async function main() {
    const args = process.argv.slice(2);
    const cmd = args[0];

    if (!cmd||["-h","--help","help"].includes(cmd)) {
        showHelp()
        return;
    }

    if(cmd === "add"){
        const text = args.slice(1).join(" ").trim();
        if (!text) {
            console.log("Please provide note text.");
            return;
        }
        try {
            const note = await addNotes(text);
            bus.emit("note:added",note)
            
        } catch (error) {
            bus.emit("error",error)
        }
        return;
    }

    else if(cmd === "list"){
        try {
            const list = await listNotes();
            bus.emit('notes:list',list)
        } catch (error) {
            bus.emit("error",error)
        }
    }
    else if(cmd === "delete"){
        const id = args[1];
        if (!id) {
            console.log("please provide note id ");
            return;
        }
        try {
            const deleted = await deleteNotes(id)
            bus.emit("note:deleted",deleted);
            
        } catch (error) {
            bus.emit("Error",error)
        }
    }
    else if(cmd === "search"){
        const keyword = args.slice(1).join(" ".trim());
        if (!keyword) {
            console.log("please provide search keyword ");
            return;
        }
        try {
            const result = await searchNotes(keyword)
            bus.emit("note:search",result,keyword);
            
        } catch (error) {
            bus.emit("Error",error)
        }
    }
    else{
    console.error("Unknown command:", cmd);
    showHelp();
    }
}

main();




// import { add,sub,mul,div } from './math.js';
// const math2 = require('./math')
// import { greet } from './greet.js';
// import fs from 'fs'

// const output = fs.readFile('sample.txt','utf-8',(err)=>{
//     if (err) {
//         throw err
//     }
//     console.log('reading simple file');
// })
//  fs.writeFile('sample.txt',"this is simple content  file ", (err,data)=>{
//     if (err) throw err
//     console.log('written into simple.txt', output);

//  })

// fs.readFile('sample.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
// });

// fs.writeFile('output.txt', 'this is written using fs.writFile\n',(err)=>{
//     if(err) throw err;
//     console.log('output.txt has been created ');
// })

// fs.appendFile('output.txt', 'this is  a line was  appended  later!\n',(err)=>{
//     if(err) throw err
//     console.log('Appended to the output.txt');
// })

// fs.copyFile('output.txt','output-copy.txt',(err)=>{
//     if(err) throw err
//     console.log("File copied to output-copy.txt");
// })

// fs.appendFile('output-copy.txt','\nthis is line was appended  later in output-copy.txt ',(err)=>{
//     if(err) throw err
//     console.log('Appended  to the output-copy.txt');
// })

// fs.writeFileSync('notes.txt',"Hello , this is my first note ", (err, data )=>{
//     console.log('written file', err);

// });

// fs.appendFile('notes.txt','\nthis is and appended notes!', (err,data)=>{
//     console.log('appended file', err);

// });

// const readFile = fs.readFileSync('notes.txt','utf-8', (err, data)=>{
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File content:", data);
// })
// console.log(readFile);

// console.log("same object? ", math === math2);

// console.log(greet("ibra"));

// console.log("3 + 6    = ", add(3,6));
// console.log("4 - 7    = ", sub(4,7));
// console.log("5 * 5    = " , mul(5,5));
// console.log("144 / 12 =",div(144,12));
