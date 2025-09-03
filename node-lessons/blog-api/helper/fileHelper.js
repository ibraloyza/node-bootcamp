// helper function 
import {promises as fs} from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const filePath   = path.resolve(__dirname, "../data/blogs.json");

export async  function readBlogs() {
  const text = await fs.readFile(filePath, "utf-8").catch(async (e) => {
    if (e.code === "ENOENT") { await fs.writeFile(filePath, "[]"); return "[]"; }
    throw e;
  });
  return JSON.parse(text || "[]");
}


 export async function writeBlogs(blogs){
    const data =    fs.writeFile(filePath,JSON.stringify(blogs,null,2));
}