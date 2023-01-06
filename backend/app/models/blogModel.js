import mongoose from "mongoose";

// SCHMA
const blogSchema = new mongoose.Schema({
  img: { type: String, required: true },
  banner: { type: String },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  desc: { type: String, required: true },
  author: { type: String },
  author_img: { type: String },
  category: { type: String },
  date: { type: Date },
});

// MODEL
const blogModel = mongoose.model("blog", blogSchema);

export default blogModel;
