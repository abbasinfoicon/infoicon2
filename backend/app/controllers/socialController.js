import socialModel from "../models/socialModel.js";
import moment from "moment/moment.js";

class socialController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await socialModel.find();

      res.render("pages/social/social", {
        data: data,
        moment: moment,
        page_name: "social",
        sub_page: "allSocial"
      });
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  // CREATE DATA
  static addData = async (req, res) => {
    if (req.method == "POST") {
      try {
        const { name, icon, link } = req.body
        const data = await socialModel({
          name: name,
          icon: icon,
          link: link
        });
        const result = data.save();
        res.redirect("social");

        console.log(result);
      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/social/add-social", { page_name: "social", sub_page: "addSocial" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await socialModel.findById(req.params.id, req.body);

      res.render("pages/social/view-social", {
        data: data,
        moment: moment,
        page_name: "social",
        sub_page: "viewSocial"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await socialModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/social/edit-social", {
        data: data,
        page_name: "social",
        sub_page: "editSocial"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const { name, icon, link } = req.body
      await socialModel.findByIdAndUpdate(req.params.id, {
        name: name,
        icon: icon,
        link: link
      });

      res.redirect("/social");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    // console.log("delete-id", req.params.id);
    try {
      const data = await socialModel.findByIdAndDelete(req.params.id, req.body);
      // console.log("Delete data", data)

      res.redirect("/social");
    } catch (error) {
      // console.log("Delete Data - ", error);
    }
  };
}

export default socialController;
