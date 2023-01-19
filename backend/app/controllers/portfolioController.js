import portfolioModel from "../models/portfolioModel.js";
import moment from "moment/moment.js";
import fs from "fs"

class portfolioController {
  // ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await portfolioModel.find();

      res.render("pages/portfolio/portfolio", {
        data: data,
        moment: moment,
        page_name: "portfolio",
        sub_page: "allPortfolio"
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
        const { name, link, desc, service, industries, technologies, status } = req.body
        if (name && mulimg) {
          const data = await portfolioModel({
            name: name,
            img: mulimg,
            link: link,
            desc: desc,
            service: service,
            industries: industries,
            technologies: technologies,
            status: status
          });
          const result = data.save();

          console.log(result);
          res.redirect("portfolio");
        } else {
          res.render("pages/portfolio/add-portfolio", { page_name: "portfolio", sub_page: "addPortfolio", status: "failed", message: "Some field Required!!!" });
        }
      } catch (error) {
        console.log("Create Data - ", error);
      }
    } else {
      res.render("pages/portfolio/add-portfolio", { page_name: "portfolio", sub_page: "addPortfolio" });
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await portfolioModel.findById(req.params.id, req.body);

      res.render("pages/portfolio/view-portfolio", {
        data: data,
        moment: moment,
        page_name: "portfolio",
        sub_page: "viewPortfolio"
      });
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static openUpdateData = async (req, res) => {
    try {
      const data = await portfolioModel.findById(req.params.id, req.body);
      // console.log("Update data", data);

      res.render("pages/portfolio/edit-portfolio", {
        data: data,
        page_name: "portfolio",
        sub_page: "editPortfolio"
      });
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const mulimg = req.files["img"]?.[0].filename;
      const { name, link, desc, service, industries, technologies, status } = req.body
      await portfolioModel.findByIdAndUpdate(req.params.id, {
        name: name,
        img: mulimg,
        link: link,
        desc: desc,
        service: service,
        industries: industries,
        technologies: technologies,
        status: status
      });

      res.redirect("/portfolio");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    const data = await portfolioModel.findById(req.params.id);
    const file_name = "public/assets/upload/" + data.img

    // console.log("file-img", file_name);
    try {
      await portfolioModel.findByIdAndDelete(req.params.id, req.body);
      fs.unlinkSync(file_name);

      res.redirect("/portfolio");
    } catch (error) {
      console.log("Delete Data - ", error);
    }
  };
}

export default portfolioController;
