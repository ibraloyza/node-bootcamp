
import path from "path";

const filePath = "D:/fullStuck-developer/bootcamp/node-lessons/built-in-modules/practice/path-pracice.js"

console.log("Basename",path.basename(filePath));
console.log("Dirname",path.dirname(filePath));
console.log("Extname",path.extname(filePath));
console.log("join",path.join("fullStuck-developer","bootcamp","node-lessons","built-in-modules","practice","path-pracice.js"));
console.log("resolve",path.resolve("path-pracice.js"));

