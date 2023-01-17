import mongoose from "mongoose";

// SCHMA
const socialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    link: { type: String, required: true}
  },
  {
    timestamps: true,
  }
);

// MODEL
const socialModel = mongoose.model("social", socialSchema);

export default socialModel;
