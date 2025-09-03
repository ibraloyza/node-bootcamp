import express, { json } from 'express';
import { validateCreateBlog,validateUpdateBlog } from '../middleware/validateBlog.js';
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from '../controllers/blogController.js';
const  router = express.Router();
router.use(express.json())




// get all blogs
router.get('/', getBlogs )
// get single blogs
router.get('/:id', getBlogById)

// POST new blog

router.post('/blogPost', validateCreateBlog, createBlog)

// update blogs

router.put('/update/:id', validateUpdateBlog,updateBlog)


// ✅ DELETE /posts/:id - delete post
router.delete("/delBlog/:id",deleteBlog);


export default router;



