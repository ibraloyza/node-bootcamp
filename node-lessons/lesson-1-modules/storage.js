import {access,readFile,writeFile} from 'fs/promises'
import {constants} from 'fs'
import { error } from 'console';


const NOTES_FILE = process.env.NOTES_FILE || "notes.json";
// const file = process.env.NOTES_FILE || "notes.json";

async function ensureFile() {
    try {
        await access(NOTES_FILE,constants.F_OK);
    } catch  {
       await writeFile(NOTES_FILE,"[]","utf-8")
    }
}

async function loadNotes() {
    await ensureFile();
    const  row = await readFile(NOTES_FILE,'utf-8');
    return JSON.parse(row);
}

async function saveNotes(notes) {
    await writeFile(NOTES_FILE, JSON.stringify(notes,null,2),'utf-8');

}

export async function addNotes(text) {
    const notes = await loadNotes();
    const note = {id:Date.now(),text};
    notes.push(note);
    await saveNotes(notes);
    return note;
}

export async function listNotes() {
    return await loadNotes();
}

// async function readNotes() {
//     try {
//         const data = await readFile(file,'utf-8');
//         return JSON.parse(data);
//     } catch (error) {
//         return [];
//     }
// }


// delete

export async function deleteNotes(id) {
    const notes = await  loadNotes()
    const index = notes.findIndex((n)=> n.id === Number(id));
    if(index === -1)throw new Error("Notes not found");
    const removed = notes.replace(index,1)[0];
    await writeFile(notes);
    return removed;
}

// 🆕 search notes by keyword
export async function searchNotes(keyword) {
  const notes = await loadNotes();
  return notes.filter((n) =>
    n.text.toLowerCase().includes(keyword.toLowerCase())
  );
}

