import moment from "moment/moment.js";
import sliderModel from "../models/sliderModel.js";
import fs from "fs"

class sliderController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await sliderModel.find();

      res.render("pages/slider/slider", {
        data: data,
        moment: moment,
        page_name: "slider",
        sub_page: "allSlider"
      });
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  // CREATE DATA
  static addData = async (req, res) => {
    if (req.method == "POST") {
      try {
        const mulimg = req.files["img"][0].filename;

        const data = await sliderModel({
          title: req.body.title,
          desc: req.body.desc,
          status: req.body.status,
          img: mulimg,
        });
        const result = data.save();
        res.redirect("slider");

        console.log(result);
      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/slider/add-slider", { page_name: "slider", sub_page: "addSlider" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await sliderModel.findById(req.params.id, req.body);

      res.render("pages/slider/view-slider", {
        data: data,
        moment: moment,
        page_name: "slider",
        sub_page: "viewSlider"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await sliderModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/slider/edit-slider", {
        data: data,
        page_name: "slider",
        sub_page: "editSlider"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const blogImg = req.files["img"]?.[0].filename;
      // console.log("file-img", req.files);

      await sliderModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        desc: req.body.desc,
        status: req.body.status,
        img: blogImg,
      });

      res.redirect("/slider");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    const data = await sliderModel.findById(req.params.id);
    const file_name = "public/assets/upload/" + data.img

    // console.log("file-img", file_name);
    try {
      await sliderModel.findByIdAndDelete(req.params.id, req.body);
      fs.unlinkSync(file_name);

      res.redirect("/slider");
    } catch (error) {
      console.log("Delete Data - ", error);
    }
  };
}

export default sliderController;
