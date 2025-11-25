import Blog from "../models/blog.js";


export const createBlog = async(req, res) => {
    try {
        const blog = new Blog(req.body);
        const savedBlog = await blog.save();
        console.log("blog data is ",savedBlog);
        res.status(200).json({message: "blog has been created successfully"});
    }catch(err) {
        res.status(500).json({error: err.message});
    }
}

export const getBlogs = async(req, res) => {
    try {
        const userId = req.params.id;
        const blogs = await Blog.find({user: userId});
        console.log("@@@@@@blogs",blogs);
        res.status(200).json(blogs);
    }catch(err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteBlog = async(req,res) => {
    try {
        const blogId = req.params.id;
        const deletionStatus = await Blog.findByIdAndDelete(blogId);
        res.status(204);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}
