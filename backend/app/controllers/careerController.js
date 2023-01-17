import careerModel from "../models/careerModel.js";
import moment from "moment/moment.js";

class careerController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await careerModel.find();

      res.render("pages/career/career", {
        data: data,
        moment: moment,
        page_name: "career",
        sub_page: "allCareer"
      });
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  // CREATE DATA
  static addData = async (req, res) => {
    if (req.method == "POST") {
      try {
        // console.log("file-img", req.files);
        const { title, experience, salary, vacancy, qualification, skills, desc, status } = req.body
        const data = await careerModel({
          title: title,
          experience: experience,
          salary: salary,
          vacancy: vacancy,
          qualification: qualification,
          skills: skills,
          desc: desc,
          status: status,
        });
        const result = data.save();
        res.redirect("career");

        console.log(result);
      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/career/add-career", { page_name: "career", sub_page: "addCareer" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await careerModel.findById(req.params.id, req.body);

      res.render("pages/career/view-career", {
        data: data,
        moment: moment,
        page_name: "career",
        sub_page: "viewCareer"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await careerModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/career/edit-career", {
        data: data,
        page_name: "career",
        sub_page: "editCareer"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const { title, experience, salary, vacancy, qualification, skills, desc, status } = req.body
      await careerModel.findByIdAndUpdate(req.params.id, {
        title: title,
        experience: experience,
        salary: salary,
        vacancy: vacancy,
        qualification: qualification,
        skills: skills,
        desc: desc,
        status: status,
      });

      res.redirect("/career");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    // console.log("delete-id", req.params.id);
    try {
      const data = await careerModel.findByIdAndDelete(req.params.id, req.body);
      // console.log("Delete data", data)

      res.redirect("/career");
    } catch (error) {
      // console.log("Delete Data - ", error);
    }
  };
}

export default careerController;
