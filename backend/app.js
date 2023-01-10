import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';

import connectDB from "./app/configs/ConnectDB.js";
import webApi from "./routes/webApi.js";
import ejsrout from "./routes/ejsApi.js";

const app = express();
// set the view engine to ejs
app.set("view engine", "ejs");
//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//now please load my static html and css files for my express app, from my /dist directory
app.use(express.static(path.join(__dirname ,'public')));

dotenv.config();
app.use(cors());
app.use(express.json());

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect start here

mongoose.set("strictQuery", true);
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

// API_ROUTER START
app.use("/api", webApi);
app.use("/", ejsrout);

// SERVER-START HERE
const PORT = process.env.PORT || 3034;
app.listen(PORT, () => {
  console.log(`Server Start on ${PORT}`);
});
