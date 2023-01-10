import mongoose from "mongoose";

// SCHMA
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  desc: { type: String, required: true },
  status: { type: String },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// MODEL
const blogModel = mongoose.model("blog", blogSchema);

export default blogModel;
