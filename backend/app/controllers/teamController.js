import teamModel from "../models/teamModel.js";
import moment from "moment/moment.js";

class teamController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await teamModel.find();

      res.render("pages/team/team", {
        data: data,
        moment: moment,
        page_name: "team",
        sub_page: "allTeam"
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
        const { name, destination, desc, phone, email, city, address, dob, status } = req.body;
        if (name && mulimg && desc) {
          const data = await teamModel({
            name: name,
            img: mulimg,
            destination: destination,
            desc: desc,
            phone: phone,
            email: email,
            city: city,
            address: address,
            dob: dob,
            status: status,
            moment: moment,
          });
          const result = data.save();
          res.redirect("team");

          console.log(result);
        } else {
          res.render("pages/team/add-team", { page_name: "team", sub_page: "addTeam", status: "failed", message: "All fielded required!!!" });
        }

      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/team/add-team", { page_name: "team", sub_page: "addTeam" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await teamModel.findById(req.params.id, req.body);

      res.render("pages/team/view-team", {
        data: data,
        moment: moment,
        page_name: "team",
        sub_page: "viewTeam"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await teamModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/team/edit-team", {
        data: data,
        page_name: "team",
        sub_page: "editTeam",
        moment: moment,
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const mulimg = req.files["img"]?.[0].filename;
      const { name, destination, desc, phone, email, city, address, dob, status } = req.body;
      await teamModel.findByIdAndUpdate(req.params.id, {
        name: name,
        img: mulimg,
        destination: destination,
        desc: desc,
        phone: phone,
        email: email,
        city: city,
        address: address,
        dob: dob,
        status: status
      });

      res.redirect("/team");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    // console.log("delete-id", req.params.id);
    try {
      const data = await teamModel.findByIdAndDelete(req.params.id, req.body);
      // console.log("Delete data", data)

      res.redirect("/team");
    } catch (error) {
      // console.log("Delete Data - ", error);
    }
  };
}

export default teamController;
