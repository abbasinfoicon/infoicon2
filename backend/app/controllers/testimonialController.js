import testimonialModel from "../models/testimonialModel.js";
import moment from "moment/moment.js";
import fs from "fs"

class testimonialController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await testimonialModel.find();

      res.render("pages/testimonial/testimonial", {
        data: data,
        moment: moment,
        page_name: "testimonial",
        sub_page: "allTestimonial"
      });
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  // CREATE DATA
  static addData = async (req, res) => {
    if (req.method == "POST") {
      try {
        const mulimg = req.files["img"]?.[0].filename;

        // console.log("file-img", req.files);
        const { name, city, video, text, desc, status } = req.body
        if (name && city && mulimg) {
          const data = await testimonialModel({
            name: name,
            city: city,
            img: mulimg,
            video: video,
            text: text,
            desc: desc,
            status: status
          });
          const result = data.save();
          res.redirect("testimonial");

          console.log(result);
        } else {
          res.render("pages/testimonial/add-testimonial", { page_name: "testimonial", sub_page: "addTestimonial", status: "failed", message: "Some Field Required!!" });
        }

      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/testimonial/add-testimonial", { page_name: "testimonial", sub_page: "addTestimonial" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await testimonialModel.findById(req.params.id, req.body);

      res.render("pages/testimonial/view-testimonial", {
        data: data,
        moment: moment,
        page_name: "testimonial",
        sub_page: "viewTestimonial"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await testimonialModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/testimonial/edit-testimonial", {
        data: data,
        page_name: "testimonial",
        sub_page: "editTestimonial"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const mulimg = req.files["img"]?.[0].filename;
      const { name, city, video, text, desc, status } = req.body
      await testimonialModel.findByIdAndUpdate(req.params.id, {
        name: name,
        city: city,
        img: mulimg,
        video: video,
        text: text,
        desc: desc,
        status: status
      });

      res.redirect("/testimonial");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    const data = await testimonialModel.findById(req.params.id);
    const file_name = "public/assets/upload/" + data.img

    // console.log("file-img", file_name);
    try {
      await testimonialModel.findByIdAndDelete(req.params.id, req.body);
      fs.unlinkSync(file_name);

      res.redirect("/testimonial");
    } catch (error) {
      console.log("Delete Data - ", error);
    }
  };
}

export default testimonialController;
