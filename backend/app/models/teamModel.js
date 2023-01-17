import mongoose from "mongoose";

// SCHMA
const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    destination: { type: String, },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// MODEL
const teamModel = mongoose.model("team", teamSchema);

export default teamModel;
