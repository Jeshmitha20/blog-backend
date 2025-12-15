import express from "express";
import {login, createUser, logout} from './Controller/AuthController.js';
import { checkIsAuthorizedUser } from "./checkIsAuthorized.js";
import {createBlog, getBlogs, deleteBlog, getBlogById} from './Controller/blogController.js';
import { upload } from "./ImageSetUp.js";

const router = express.Router();

router.post("/auth/createUser", createUser);
router.post("/auth/login", login);
router.post("/auth/logout", checkIsAuthorizedUser, logout);
router.post("/auth/createNewBlog", upload.single("image"), createBlog);
router.get("/auth/getBlogs/:id", getBlogs);
router.delete("/auth/deleteBlog/:id",deleteBlog);
router.get("/auth/getBlogById/:id",getBlogById);

export default router;