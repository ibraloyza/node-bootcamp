// Require non-empty string helper
const isNonEmpty = v => typeof v === "string"  && v.trim().length > 0;

// For POST /blogs

export function validateCreateBlog(req,res,next) {
    const {title,content,auther} = req.body || {};
    if (!isNonEmpty(title)|| !isNonEmpty(content)||isNonEmpty(auther)) {
        return res.status(400).json({ error: "title, content, author are required (non-empty strings)" });
    }
    next();
}

// For PUT /blogs/:id  (partial update allowed, but if provided must be valid)
export function validateUpdateBlog(req,res,next){
    const {title,content,auther} = req.body || {};
    const provided = ["title","content","auther"].some(k=>k in (req.body || {}));
    if(!provided){
        return res.status(400).json({ error: "Provide at least one field to update: title, content, author" });
    }
    if(title !== undefined && !isNonEmpty(title)) return res.status(400).json({message:"title must be a non-empty string"});
    if(content !== undefined && !isNonEmpty(content)) return res.status(400).json({message:"content must be a non-empty string"});
    if(auther !== undefined && !isNonEmpty(auther))   return res.status(400).json({message:"auther must be a non-empty string"})
    next();
}

