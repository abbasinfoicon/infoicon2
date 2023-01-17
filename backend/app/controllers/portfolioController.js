import portfolioModel from "../models/portfolioModel.js";
import moment from "moment/moment.js";

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
        const mulimg = req.files["img"][0].filename;

        // console.log("file-img", req.files);
        const { name, banner, link, desc, service, industries, technologies } = req.body
        const data = await portfolioModel({
          name: name,
          img: mulimg,
          banner: banner,
          link: link,
          desc: desc,
          service: service,
          industries: industries,
          technologies: technologies
        });
        const result = data.save();
        res.redirect("portfolio");

        console.log(result);
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
      const { name, banner, link, desc, service, industries, technologies } = req.body
      await portfolioModel.findByIdAndUpdate(req.params.id, {
        name: name,
        img: mulimg,
        banner: banner,
        link: link,
        desc: desc,
        service: service,
        industries: industries,
        technologies: technologies
      });

      res.redirect("/portfolio");
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    // console.log("delete-id", req.params.id);
    try {
      const data = await portfolioModel.findByIdAndDelete(req.params.id, req.body);
      // console.log("Delete data", data)

      res.redirect("/portfolio");
    } catch (error) {
      // console.log("Delete Data - ", error);
    }
  };
}

export default portfolioController;
