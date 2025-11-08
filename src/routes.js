import express from "express";
import {login, createUser, logout} from './Controller/AuthController.js';
import { checkIsAuthorizedUser } from "./checkIsAuthorized.js";
import {createBlog} from './Controller/blogController.js';

const router = express.Router();

router.post("/auth/createUser", createUser);
router.post("/auth/login", login);
router.post("/auth/logout", checkIsAuthorizedUser, logout);
router.post("/auth/createNewBlog", createBlog);

export default router;