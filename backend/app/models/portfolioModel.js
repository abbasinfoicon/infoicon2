import mongoose from "mongoose";

// SCHMA
const portfolioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    banner: { type: String },
    link: { type: String, },
    desc: { type: String },
    service: { type: String, required: true },
    industries: [{
      list: { type: String }
    }],
    technologies: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// MODEL
const portfolioModel = mongoose.model("portfolio", portfolioSchema);

export default portfolioModel;
