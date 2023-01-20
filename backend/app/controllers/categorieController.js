import categorieModel from "../models/categorieModel.js";
import moment from "moment/moment.js";

class categorieController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await categorieModel.find();

      res.render("pages/categories", {
        data: data,
        moment: moment,
        page_name: "page",
        sub_page: "categories"
      });
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  // CREATE DATA
  static addData = async (req, res) => {
    if (req.method == "POST") {
      try {
        const data = await categorieModel.find();
        const { name, subCategories, status } = req.body
        if (name) {
          const data = await categorieModel({
            name: name,
            subCategories: subCategories,
            status: status
          });
          const result = data.save();
          res.redirect("categories");

          console.log(result);
        } else {
          res.render("pages/categories", { page_name: "page", data: data, moment: moment, sub_page: "categories", "status": "failed", "message": "All Field Required!!!!" });
        }

      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/categories", { page_name: "page", sub_page: "categories" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await categorieModel.findById(req.params.id, req.body);

      res.render("pages/categories", {
        data: data,
        moment: moment,
        page_name: "page",
        sub_page: "categories"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const { name, subCategories, status } = req.body
      await categorieModel.findByIdAndUpdate(req.params.id, {
        name: name,
        subCategories: subCategories,
        status: status
      });

      res.redirect("/categories");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    console.log("delete dat", req.params)
    try {
      
      await categorieModel.findByIdAndDelete(req.params.id, req.body);

      res.redirect("/categories");
    } catch (error) {
      console.log("Delete Data - ", error);
    }
  };
}

export default categorieController;
