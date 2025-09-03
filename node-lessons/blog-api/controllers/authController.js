import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '../models/user.js';

export async function registerUser(req,res) {
    try {
        const {username,email,password} = req.body;

            // 1. check if user already exists
        const existing = await User.findOne({ email});
        if (existing) {
            return res.status(400).json({ message: "User already exists" });
        }

            // 2. hash password
        const hashedPass = await bcrypt.hash(password,10);

            // 3. create new user
        const user = new User({
            username,
            email,
            password: hashedPass,
        })

        await user.save();

        res.status(201).json({
            message: "User registered successfully",
            user:{
                id: user._id,
                username: user.username,
                email: user.email,
                password: user.password,
            },
        });
    } catch (error) {
        res.status(500).json({message:"internal server error", error:error.message})
    }
}


export async function login(req,res) {
    try {
        const {email, password} = req.body;

        // check if user exists
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid credentials"});

            // compare password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:"Invalid credentials"});

        // generate token
        const token = jwt.sign(
            {id: user._id,email: user.email},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )

        res.json({
            token,
            user:{
                id:user._id,
                username: user.username,
                email:user.email,
            }
            
        })
        
    } catch (error) {
         res.status(500).json({ error: err.message });

    }
}