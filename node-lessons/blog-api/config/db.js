import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("✅mongoDB connected.");  
    } catch (error) {
        console.error("❌ DB connection error", error.message);
        process.exit(1);
    }
}