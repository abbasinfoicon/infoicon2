import mongoose from "mongoose";

// SCHMA
const portfolioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    link: { type: String, },
    desc: { type: String },
    service: { type: String, required: true },
    industries: { type: Array, required: true },
    technologies: { type: String, required: true },
    status:{type:String}
  },
  {
    timestamps: true,
  }
);

// MODEL
const portfolioModel = mongoose.model("portfolio", portfolioSchema);

export default portfolioModel;
