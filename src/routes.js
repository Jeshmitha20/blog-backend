import express from "express";
import {login, createUser} from './AuthController.js';

const router = express.Router();

router.post("/auth/createUser", createUser);
router.post("/auth/login", login);

export default router;