import galleryModel from "../models/galleryModel.js";
import moment from "moment/moment.js";

class galleryController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await galleryModel.find();

      res.render("pages/gallery/gallery", {
        data: data,
        moment: moment,
        page_name: "gallery",
        sub_page: "allGallery"
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
        const { name, category } = req.body;
        if (name && category && mulimg) {
          const data = await galleryModel({
            name: name,
            img: mulimg,
            category: category
          });
          const result = data.save();
          res.redirect("gallery");

          console.log(result);
        } else {
          console.log("All field required!!");
          res.render("pages/gallery/add-gallery", { page_name: "gallery", sub_page: "addGallery", "status": "failed", "message": "All Field Required!!!!" });
        }

      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/gallery/add-gallery", { page_name: "gallery", sub_page: "addGallery" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await galleryModel.findById(req.params.id, req.body);

      res.render("pages/gallery/view-gallery", {
        data: data,
        moment: moment,
        page_name: "gallery",
        sub_page: "viewGallery"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await galleryModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/gallery/edit-gallery", {
        data: data,
        page_name: "gallery",
        sub_page: "editGallery"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const mulimg = req.files["img"]?.[0].filename;
      const { name, category } = req.body;
      await galleryModel.findByIdAndUpdate(req.params.id, {
        name: name,
        img: mulimg,
        category: category
      });

      res.redirect("/gallery");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    // console.log("delete-id", req.params.id);
    try {
      const data = await galleryModel.findByIdAndDelete(req.params.id, req.body);
      // console.log("Delete data", data)

      res.redirect("/gallery");
    } catch (error) {
      // console.log("Delete Data - ", error);
    }
  };
}

export default galleryController;
