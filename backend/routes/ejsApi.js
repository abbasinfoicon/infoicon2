import express from "express";
import blogWebController from "../app/controllers/blogWebController.js";
import sliderController from "../app/controllers/sliderController.js";
import authController from "../app/controllers/authController.js";
import awardController from "../app/controllers/awardController.js";
import careerController from "../app/controllers/careerController.js";
import galleryController from "../app/controllers/galleryController.js";
import pageController from "../app/controllers/pageController.js";
import portfolioController from "../app/controllers/portfolioController.js";
import socialController from "../app/controllers/socialController.js";
import teamController from "../app/controllers/teamController.js";
import testimonialController from "../app/controllers/testimonialController.js";
import upload from "../app/middlewares/multerMiddleware.js";
import auth from "../app/middlewares/authMiddleware.js"
import categorieController from "../app/controllers/categorieController.js";

const ejsrout = express.Router();

ejsrout.get("/dashboard", auth, authController.dashboard);

ejsrout.get("/", (req, res) => { res.render("auth/pages/login", { page_name: "login" }); });
ejsrout.get("/contact", (req, res) => { res.render("pages/contact", { page_name: "contact", sub_page: "home" }); });

// blog-router
ejsrout.get("/blog", blogWebController.getAllData);
ejsrout.all("/add-blog", upload.fields([{ name: "img", maxCount: 1 }]), blogWebController.addData);
ejsrout.get("/view-blog/:id", blogWebController.singleData);
ejsrout.get("/edit-blog/:id", blogWebController.openUpdateData);
ejsrout.all("/edit-blog/?:id", upload.fields([{ name: "img", maxCount: 1 }]), blogWebController.updateData);
ejsrout.all("/blog/?:id", blogWebController.deleteData);

// slider-router
ejsrout.get("/slider", sliderController.getAllData);
ejsrout.all("/add-slider", upload.fields([{ name: "img", maxCount: 1 }]), sliderController.addData);
ejsrout.get("/view-slider/:id", sliderController.singleData);
ejsrout.get("/edit-slider/:id", sliderController.openUpdateData);
ejsrout.all("/edit-slider/?:id", upload.fields([{ name: "img", maxCount: 1 }]), sliderController.updateData);
ejsrout.all("/slider/?:id", sliderController.deleteData);

// award-router
ejsrout.get("/award", awardController.getAllData);
ejsrout.all("/add-award", upload.fields([{ name: "img", maxCount: 1 }]), awardController.addData);
ejsrout.get("/view-award/:id", awardController.singleData);
ejsrout.get("/edit-award/:id", awardController.openUpdateData);
ejsrout.all("/edit-award/?:id", upload.fields([{ name: "img", maxCount: 1 }]), awardController.updateData);
ejsrout.all("/award/?:id", awardController.deleteData);

// career-router
ejsrout.get("/career", careerController.getAllData);
ejsrout.all("/add-career", upload.fields([{ name: "img", maxCount: 1 }]), careerController.addData);
ejsrout.get("/view-career/:id", careerController.singleData);
ejsrout.get("/edit-career/:id", careerController.openUpdateData);
ejsrout.all("/edit-career/?:id", careerController.updateData);
ejsrout.all("/career/?:id", careerController.deleteData);

// gallery-router
ejsrout.get("/gallery", galleryController.getAllData);
ejsrout.all("/add-gallery", upload.fields([{ name: "img", maxCount: 1 }]), galleryController.addData);
ejsrout.get("/view-gallery/:id", galleryController.singleData);
ejsrout.get("/edit-gallery/:id", galleryController.openUpdateData);
ejsrout.all("/edit-gallery/?:id", upload.fields([{ name: "img", maxCount: 1 }]), galleryController.updateData);
ejsrout.all("/gallery/?:id", galleryController.deleteData);

// page-router
ejsrout.get("/page", pageController.getAllData);
ejsrout.all("/add-page", upload.fields([{ name: "img", maxCount: 1 }, { name: "banner", maxCount: 1 }]), pageController.addData);
ejsrout.get("/view-page/:id", pageController.singleData);
ejsrout.get("/edit-page/:id", pageController.openUpdateData);
ejsrout.all("/edit-page/?:id", upload.fields([{ name: "img", maxCount: 1 }]), pageController.updateData);
ejsrout.all("/page/?:id", pageController.deleteData);

// portfolio-router
ejsrout.get("/portfolio", portfolioController.getAllData);
ejsrout.all("/add-portfolio", upload.fields([{ name: "img", maxCount: 1 }]), portfolioController.addData);
ejsrout.get("/view-portfolio/:id", portfolioController.singleData);
ejsrout.get("/edit-portfolio/:id", portfolioController.openUpdateData);
ejsrout.all("/edit-portfolio/?:id", upload.fields([{ name: "img", maxCount: 1 }]), portfolioController.updateData);
ejsrout.all("/portfolio/?:id", portfolioController.deleteData);

// social-router
ejsrout.get("/social", socialController.getAllData);
ejsrout.all("/add-social", socialController.addData);
ejsrout.get("/view-social/:id", socialController.singleData);
ejsrout.get("/edit-social/:id", socialController.openUpdateData);
ejsrout.all("/edit-social/?:id", socialController.updateData);
ejsrout.all("/social/?:id", socialController.deleteData);

// team-router
ejsrout.get("/team", teamController.getAllData);
ejsrout.all("/add-team", upload.fields([{ name: "img", maxCount: 1 }]), teamController.addData);
ejsrout.get("/view-team/:id", teamController.singleData);
ejsrout.get("/edit-team/:id", teamController.openUpdateData);
ejsrout.all("/edit-team/?:id", upload.fields([{ name: "img", maxCount: 1 }]), teamController.updateData);
ejsrout.all("/team/?:id", teamController.deleteData);

// testimonial-router
ejsrout.get("/testimonial", testimonialController.getAllData);
ejsrout.all("/add-testimonial", upload.fields([{ name: "img", maxCount: 1 }]), testimonialController.addData);
ejsrout.get("/view-testimonial/:id", testimonialController.singleData);
ejsrout.get("/edit-testimonial/:id", testimonialController.openUpdateData);
ejsrout.all("/edit-testimonial/?:id", upload.fields([{ name: "img", maxCount: 1 }]), testimonialController.updateData);
ejsrout.all("/testimonial/?:id", testimonialController.deleteData);

// categories-router
ejsrout.get("/categories", categorieController.getAllData);
ejsrout.post("/categories", categorieController.addData);
ejsrout.get("/categories/:id", categorieController.singleData);
ejsrout.all("/categories/?:id", categorieController.updateData);
ejsrout.all("/categories/del/?:id", categorieController.deleteData);







// =======================================================================//
//=================== auth-router ========================================//
//========================================================================//
ejsrout.all("/register", upload.fields([{ name: "img", maxCount: 1 }]), authController.addRegister);
ejsrout.all("/login", authController.userLogin);
ejsrout.get("/forgot-password", authController.getForgotPassword);

export default ejsrout;
