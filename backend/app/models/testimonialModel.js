import mongoose from "mongoose";

// SCHMA
const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    img: { type: String, required: true },
    video: { type: String },
    text: { type: String },
    desc: { type: String },
    status: { type: String }
  },
  {
    timestamps: true,
  }
);

// MODEL
const testimonialModel = mongoose.model("testimonial", testimonialSchema);

export default testimonialModel;
