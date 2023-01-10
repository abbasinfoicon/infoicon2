import express from "express";
import blogWebController from "../app/controllers/blogWebController.js";
import upload from "../app/middlewares/multerMiddleware.js";

const ejsrout = express.Router();

ejsrout.get("/", (req, res) => {
  res.render("index");
});

ejsrout.get("/blog", blogWebController.getAllData);

// ejsrout.post("/add-blog/post", blogWebController.addBlog)
ejsrout.all(
  "/add-blog",
  upload.fields([{ name: "img", maxCount: 1 }]),
  blogWebController.addBlog
);
ejsrout.delete("/blog/:id?delete", blogWebController.deleteData);

export default ejsrout;
