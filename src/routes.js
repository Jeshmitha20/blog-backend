import express from "express";
import {login, createUser, logout} from './Controller/AuthController.js';
import { checkIsAuthorizedUser } from "./checkIsAuthorized.js";
import {createBlog, getBlogs, deleteBlog, getBlogById, getAllBlogs} from './Controller/blogController.js';
import { upload } from "./ImageSetUp.js";

const router = express.Router();

router.post("/auth/createUser", createUser);
router.post("/auth/login", login);
router.post("/auth/logout", checkIsAuthorizedUser, logout);
router.post("/auth/createNewBlog", checkIsAuthorizedUser, upload.single("image"), createBlog);
router.get("/auth/getBlogs/:id", checkIsAuthorizedUser, getBlogs);
router.delete("/auth/deleteBlog/:id", checkIsAuthorizedUser, deleteBlog);
router.get("/auth/getBlogById/:id",getBlogById);
router.get("/auth/getAllBlogs", getAllBlogs);

export default router;