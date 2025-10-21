import express from "express";
import {login, createUser, logout} from './AuthController.js';

const router = express.Router();

router.post("/auth/createUser", createUser);
router.post("/auth/login", login);
router.post("/auth/logout", logout);

export default router;