import pageModel from "../models/pageModel.js";
import moment from "moment/moment.js";

class pageController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await pageModel.find();

      res.render("pages/page/page", {
        data: data,
        moment: moment,
        page_name: "page",
        sub_page: "allPage"
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
        const { page, banner, show, categories } = req.body
        const data = await pageModel({
          page: page,
          banner: banner,
          show: show,
          categories: categories,
          cname: categories.name,
          subcategories: categories.subCategories,
          name: categories.name,
          img: mulimg,
          cbanner: categories.banner,
          smallDesc: categories.smallDesc,
          desc: categories.desc,
        });
        const result = data.save();
        res.redirect("page");

        console.log(result);
      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/page/add-page", { page_name: "page", sub_page: "addPage" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await pageModel.findById(req.params.id, req.body);

      res.render("pages/page/view-page", {
        data: data,
        moment: moment,
        page_name: "page",
        sub_page: "viewPage"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await pageModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/page/edit-page", {
        data: data,
        page_name: "page",
        sub_page: "editPage"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const mulimg = req.files["img"]?.[0].filename;
      const { page, banner, show, categories } = req.body
      await pageModel.findByIdAndUpdate(req.params.id, {
        page: page,
        banner: banner,
        show: show,
        categories: categories,
        cname: categories.name,
        subcategories: categories.subCategories,
        name: categories.name,
        img: mulimg,
        cbanner: categories.banner,
        smallDesc: categories.smallDesc,
        desc: categories.desc,
      });

      res.redirect("/page");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    // console.log("delete-id", req.params.id);
    try {
      const data = await pageModel.findByIdAndDelete(req.params.id, req.body);
      // console.log("Delete data", data)

      res.redirect("/page");
    } catch (error) {
      // console.log("Delete Data - ", error);
    }
  };
}

export default pageController;
