import express from "express";
import blogWebController from "../app/controllers/blogWebController.js";
import sliderController from "../app/controllers/sliderController.js";
import authController from "../app/controllers/authController.js";
import upload from "../app/middlewares/multerMiddleware.js";

const ejsrout = express.Router();

ejsrout.get("/dashboard", (req, res) => {
  res.render("index", { page_name: "home", sub_page: "home" });
});

ejsrout.get("/", (req, res) => {
  res.render("auth/pages/login", { page_name: "login" });
});

// blog-router
ejsrout.get("/blog", blogWebController.getAllData);
ejsrout.all(
  "/add-blog",
  upload.fields([{ name: "img", maxCount: 1 }]),
  blogWebController.addBlog
);
ejsrout.get("/view-blog/:id", blogWebController.singleBlog);
ejsrout.get("/edit-blog/:id", blogWebController.openUpdateBlog);
ejsrout.all(
  "/edit-blog/?:id",
  upload.fields([{ name: "img", maxCount: 1 }]),
  blogWebController.updateBlog
);
ejsrout.all("/blog/?:id", blogWebController.deleteData);

// slider-router
ejsrout.get("/slider", sliderController.getAllData);
ejsrout.all("/add-slider",upload.fields([{ name: "img", maxCount: 1 }]),sliderController.addSlider);
ejsrout.get("/view-slider/:id", sliderController.singleSlider);
ejsrout.get("/edit-slider/:id", sliderController.openUpdateSlider);
ejsrout.all("/edit-slider/?:id",upload.fields([{ name: "img", maxCount: 1 }]),sliderController.updateSlider);
ejsrout.all("/slider/?:id", sliderController.deleteData);

// auth-router
ejsrout.get("/register", authController.getRegister);
ejsrout.all("/new-register", upload.fields([{ name: "img", maxCount: 1 }]), authController.addRegister);
ejsrout.get("/login", authController.getLogin);
ejsrout.get("/forgot-password", authController.getForgotPassword);

export default ejsrout;
