import { readBlogs,writeBlogs } from "../helper/fileHelper.js";
import { Blog } from "../models/blogDB.js";
export async function getBlogs(req,res,next) {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (e) {
        next(e);
    }
    
}


export async function getBlogById(req,res,next) {
    try {
        const {id } =( req.params)
        const blogs = await Blog.findById(id)
        if(!blogs) return res.status(400).json({error:"blog not found"})
        res.json(blogs);
    } catch (error) {
        next(error);
    }
}


export async function createBlog(req,res,next) {
    try {
        const {title,content,auther} = req.body;
        const newBlog = new Blog({title,content,auther});

        const nextID = newBlog.length > 0  ? newBlog[newBlog.length - 1].id + 1:1;
        await newBlog.save();

        res.status(201).json({
            message:"Blog created successfully",
            blog: newBlog
        })
        
    } catch (error) {
        next(error);        
    }
}

export async function updateBlog(req,res,next) {
    try {
        const id = (req.params.id); // get id from url
      
        const updateBlog = await Blog.findByIdAndUpdate(
            id,
            {...req.body,updatedAt:Date.now()},
            {new:true}
        )
        if (!updateBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json({
            message: "blog updated successfuly",
            updateBlog: updateBlog
        })
        
    } catch (err) {
        next(err);        
    }
}


export async function deleteBlog(req,res,next) {
    try {
        const {id} = (req.params);
        const delBlog = await Blog.findByIdAndDelete(id);
        if (!delBlog) {
             return res.status(404).json({ message: "Blog not found" });
        }
        res.json({message:"blog deleted successfully", blogDeleted: delBlog})
    } catch (error) {
        next(error)
    }
}