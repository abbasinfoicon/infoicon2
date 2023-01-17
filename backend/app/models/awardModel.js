import mongoose from "mongoose";

// SCHMA
const awadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    link: { type: String, },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// MODEL
const awadModel = mongoose.model("awad", awadSchema);

export default awadModel;
