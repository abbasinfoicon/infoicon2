import mongoose from "mongoose";

// SCHMA
const sliderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    status: { type: String },
    createdAt: { type: Date, default: Date.now },
  }
);

// MODEL
const sliderModel = mongoose.model("slider", sliderSchema);

export default sliderModel;
