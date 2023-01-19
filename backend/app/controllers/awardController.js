import awardModel from "../models/awardModel.js";
import moment from "moment/moment.js";
import fs from "fs"

class awardController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await awardModel.find();

      res.render("pages/award/award", {
        data: data,
        moment: moment,
        page_name: "award",
        sub_page: "allAward"
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

        // console.log("file-img", req.files);
        const { name, link, desc } = req.body;
        if (name && link && desc) {
          const data = await awardModel({
            name: name,
            desc: desc,
            link: link,
            img: mulimg,
          });
          const result = data.save();
          res.redirect("award");

          console.log(result);
        } else {
          res.render("pages/award/add-award", { page_name: "award", sub_page: "addAward", status: "failed", message: "All field Required!!" });
        }
      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/award/add-award", { page_name: "award", sub_page: "addAward" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await awardModel.findById(req.params.id, req.body);

      res.render("pages/award/view-award", {
        data: data,
        moment: moment,
        page_name: "award",
        sub_page: "viewAward"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await awardModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/award/edit-award", {
        data: data,
        page_name: "award",
        sub_page: "editAward"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const mulimg = req.files["img"]?.[0].filename;
      const { name, link, desc } = req.body;
      await awardModel.findByIdAndUpdate(req.params.id, {
        name: name,
        desc: desc,
        link: link,
        img: mulimg,
      });

      res.redirect("/award");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    const data = await awardModel.findById(req.params.id);
    const file_name = "public/assets/upload/" + data.img

    // console.log("file-img", file_name);
    try {
      await awardModel.findByIdAndDelete(req.params.id, req.body);
      fs.unlinkSync(file_name);

      res.redirect("/award");
    } catch (error) {
      console.log("Delete Data - ", error);
    }
  };
}

export default awardController;
