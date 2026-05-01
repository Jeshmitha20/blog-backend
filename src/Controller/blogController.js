import Blog from "../models/blog.js";


export const createBlog = async(req, res) => {
    try {
        const image = req.file ? req.file.filename : null;
        const blog = new Blog({
          title: req.body.title,
          subTitle: req.body.subTitle,
          category: req.body.category,
          user: req.body.user,
          publish: req.body.publish,
          content: req.body.content,
          image: image,
        });
        const savedBlog = await blog.save();
        console.log("blog data is ",savedBlog);
        return res.status(200).json({message: "blog has been created successfully"});
    }catch(err) {
        return res.status(500).json({error: err.message});
    }
}

export const getBlogs = async(req, res) => {
    try {
        const userId = req.params.id;
        const blogs = await Blog.find({user: userId})
                        .populate("user", "firstName lastName email")
                        .sort({ createdAt: -1 });
        return res.status(200).json(blogs);
    }catch(err) {
        return res.status(500).json({error: err.message});
    }
}

export const deleteBlog = async(req,res) => {
    try {
        const blogId = req.params.id;
        const deletionStatus = await Blog.findByIdAndDelete(blogId);
        if (!deletionStatus) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(204).send();
    }catch(err){
        return res.status(500).json({error: err.message});
    }
}

export const getBlogById = async(req,res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId).populate("user","firstName lastName email");
        return res.status(200).json(blog);
    }catch(err) {
        return res.status(500).json({error: err.message});
    }
}

export const getAllBlogs = async(req,res) => {
    try {
        const allBlogs = await Blog.find()
                            .populate("user", "firstName lastName email")                    
                            .sort({ createdAt: -1 });
        return res.status(200).json(allBlogs);
    }catch(err) {
        return res.status(500).json({error: err.message});
    }
}
