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