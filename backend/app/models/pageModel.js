import mongoose from "mongoose";

// SCHMA
const pageSchema = new mongoose.Schema(
  {
    page: { type: String, required: true },
    banner: { type: String },
    show: { type: String, required: true },
    categories: [{ 
      name: { type: String },
      subCategories:[{
        name:{ type: String, required: true },
        img:{ type: String, required: true },
        banner:{ type: String },
        smallDesc:{ type: String, required: true },
        desc:{ type: String, required: true },
      }]
     },
      
    ]
    
  },
  {
    timestamps: true,
  }
);

// MODEL
const pageModel = mongoose.model("page", pageSchema);

export default pageModel;
