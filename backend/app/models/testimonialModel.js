import mongoose from "mongoose";

// SCHMA
const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    img: { type: String },
    video: { type: String },
    desc: { type: String },
  },
  {
    timestamps: true,
  }
);

// MODEL
const testimonialModel = mongoose.model("testimonial", testimonialSchema);

export default testimonialModel;
