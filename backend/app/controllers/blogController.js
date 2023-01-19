import blogModel from "../models/blogModel.js";
import fs from "fs"

class blogController {
  // READ ALL DATA
  static getAllData = async (req, res) => {
    try {
      const data = await blogModel.find();

      if (data.length > 0) {
        res.status(200).send({
          status: "success",
          message: "All Data Show!!!",
          data: data,
        });
      } else {
        res.status(404).send({
          status: "failed",
          message: "Data not found...!",
        });
      }
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  // CREAT
  static createData = async (req, res) => {
    try {
      const data = await blogModel(req.body);
      const result = data.save();

      if (req.body) {
        res.status(201).send({
          status: "success",
          message: "Create New Data successful!!!",
          result: result,
        });
      } else {
        res.status(404).send({
          status: "failed",
          message: "Data not Created...!",
        });
      }
    } catch (error) {
      console.log("Create Data - ", error);
    }
  };

  // READ SINGLE DATA
  static singleData = async (req, res) => {
    try {
      const data = await blogModel.findById(req.params.id, req.body);
      if (data) {
        res.status(200).send({
          status: "success",
          message: "Single Data Show!!!",
          data: data,
        });
      } else {
        res.status(404).send({
          status: "failed",
          message: "Data not found...!",
        });
      }
    } catch (error) {
      console.log("Single Data - ", error);
    }
  };

  // UPDATE
  static updateData = async (req, res) => {
    try {
      const data = await blogModel.findByIdAndUpdate(req.params.id, req.body);
      if (data) {
        res.status(200).send({
          status: "success",
          message: "Data Update Successful!!!",
          data: data,
        });
      } else {
        res.status(404).send({
          status: "failed",
          message: "Data not Update...!",
        });
      }
    } catch (error) {
      console.log("Update Data - ", error);
    }
  };

  // DELETE
  static deleteData = async (req, res) => {
    try {
      const data = await blogModel.findByIdAndDelete(req.params.id, req.body);
      if (data) {
        res.status(200).send({
          status: "success",
          message: "Delete data Successful!!!",
          data: data,
        });
      } else {
        res.status(404).send({
          status: "failed",
          message: "Data not Delete...!",
        });
      }
    } catch (error) {
      console.log("Delete Data - ", error);
    }
  };
}

export default blogController;
