import Blog from "../models/blog.js";


export const createBlog = async(req, res) => {
    try {
        console.log("@@@@re",req.body,req.file);
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
        res.status(200).json({message: "blog has been created successfully"});
    }catch(err) {
        res.status(500).json({error: err.message});
    }
}

export const getBlogs = async(req, res) => {
    try {
        const userId = req.params.id;
        const blogs = await Blog.find({user: userId})
                        .populate("user", "firstName lastName email")
                        .sort({ createdAt: -1 });
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

export const getBlogById = async(req,res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId);
        res.status(200).json(blog);
    }catch(err) {
        res.status(500).json({error: err.message});
    }
}
