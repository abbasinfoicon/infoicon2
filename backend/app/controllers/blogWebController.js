import blogModel from "../models/blogModel.js";
import moment from "moment/moment.js";

class blogWebController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await blogModel.find();

      res.render("pages/blog/blog", {
        data: data,
        moment: moment,
        page_name: "blog", 
        sub_page: "allBlog"
      });
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  // CREATE DATA
  static addBlog = async (req, res) => {
    if (req.method == "POST") {
      try {
        const blogImg = req.files["img"][0].filename;

        // console.log("file-img", req.files);

        const data = await blogModel({
          title: req.body.title,
          desc: req.body.desc,
          status: req.body.status,
          img: blogImg,
          category: req.body.category,
        });
        const result = data.save();
        res.redirect("blog");

        console.log(result);
      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/blog/add-blog", { page_name: "blog", sub_page: "addBlog" });
    }
  };

  // READ SINGLE DATA
  static singleBlog = async (req, res) => {
    try {
      const data = await blogModel.findById(req.params.id, req.body);

      res.render("pages/blog/view-blog", {
        data: data,
        moment: moment,
        page_name: "blog", 
        sub_page: "viewBlog"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateBlog = async (req, res) => {
    try {
      const data = await blogModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/blog/edit-blog", {
        data: data,
        page_name: "blog", 
        sub_page: "editBlog"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateBlog = async (req, res) => {
    try {
      const blogImg = req.files["img"]?.[0].filename;

      await blogModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        desc: req.body.desc,
        status: req.body.status,
        img: blogImg,
        category: req.body.category,
      });

      res.redirect("/blog");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    // console.log("delete-id", req.params.id);
    try {
      const data = await blogModel.findByIdAndDelete(req.params.id, req.body);
      // console.log("Delete data", data)
      
      res.redirect("/blog");
    } catch (error) {
      // console.log("Delete Data - ", error);
    }
  };
}

export default blogWebController;
