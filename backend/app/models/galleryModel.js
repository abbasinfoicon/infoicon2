import mongoose from "mongoose";

// SCHMA
const gallerySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);

// MODEL
const galleryModel = mongoose.model("gallery", gallerySchema);

export default galleryModel;
