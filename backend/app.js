import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./app/configs/ConnectDB.js";
import webApi from "./routes/webApi.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.static("public/update"));
app.use(express.json());

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect start here
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

// API_ROUTER START
app.use("/api", webApi);

// SERVER-START HERE
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server Start on ${PORT}`);
});
