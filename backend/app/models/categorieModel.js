import mongoose from "mongoose";

// SCHMA
const categorieSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        subCategories: { type: String, },
        status: { type: String },
    },
    {
        timestamps: true,
    }
);

// MODEL
const categorieModel = mongoose.model("categorie", categorieSchema);

export default categorieModel;
