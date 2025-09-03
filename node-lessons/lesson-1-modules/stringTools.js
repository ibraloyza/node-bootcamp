// stringTools.js (ESM)

export function upper(s) {return s.toUpperCase();}
export const lower  = (s) => {return s.toLowerCase();}


export default function title(s){
    return s.replace(/\b\w/g,  c=> c.toUpperCase());
}