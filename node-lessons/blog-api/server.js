import express from 'express';
import blogsRoutes from './routes/blogRoutes.js'
import { logger } from './middleware/logger.js';
import { errorHandler,notFound } from './middleware/errorHandler.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/authMiddleware.js';
import authRouter from './routes/authRoutes.js';

const app = express();
const PORT =process.env.PORT;

console.log("mongo uri",process.env.MONGO_URI);

app.use(express());

//Application-level middlewar
app.use(logger); 


app.use(errorHandler);

app.use('/api/auth',authRouter);
app.use('/api/blogs',authMiddleware,blogsRoutes)

app.get('/home',(req,res)=>{
  res.end("this is a home page")
})




// connect database
connectDB();

app.get("/", (req, res) => {
  res.send("MongoDB Integration Working 🚀");
});



app.listen(PORT,()=>{
  console.log(`🚀 Express Blog API running at http://localhost:${PORT}`);
    
})