import blogModel from "../models/blogModel.js";
import moment from "moment/moment.js";

class blogWebController {
  static getAllData = async (req, res) => {
    try {
      const data = await blogModel.find();

      res.render("pages/blog", {
        data: data,
        moment: moment,
      });
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

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
      res.render("pages/add-blog");
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    try {
      const data = await blogModel.findByIdAndDelete(req.params._id, req.body);
      res.send({
        data: data,
      });

      res.redirect("blog");
    } catch (error) {
      console.log("Delete Data - ", error);
    }
  };
}

export default blogWebController;
