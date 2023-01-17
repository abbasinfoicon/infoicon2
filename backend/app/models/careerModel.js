import mongoose from "mongoose";

// SCHMA
const careerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, },
    vacancy: { type: String },
    qualification: { type: Object, required: true },
    skills: { type: Object, required: true },
    desc: { type: String, required: true },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

// MODEL
const careerModel = mongoose.model("career", careerSchema);

export default careerModel;
