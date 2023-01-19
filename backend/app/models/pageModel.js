import mongoose from "mongoose";

// SCHMA
const pageSchema = new mongoose.Schema(
  {
    page: { type: String, required: true },
    banner: { type: String },
    img: { type: String, required: true },
    show: { type: String, required: true },
    smallDesc: { type: String, required: true },
    desc: { type: String, required: true },
    categories: { type: String },
    subCategories: { type: String },
    status: { type: String }
  },
  {
    timestamps: true,
  }
);

// MODEL
const pageModel = mongoose.model("page", pageSchema);

export default pageModel;
