import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    publish: {type: Boolean, default: false},
    created: {type: Date, default: Date.now}
});

const Blog = mongoose.model("Blog",blogSchema);

export default Blog;