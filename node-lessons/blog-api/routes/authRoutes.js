import express, { Router } from 'express';
import { login, registerUser } from '../controllers/authController.js';

const authRouter = express.Router();
authRouter.use(express.json());


authRouter.post("/register", registerUser);
authRouter.post("/login", login);

export default authRouter;