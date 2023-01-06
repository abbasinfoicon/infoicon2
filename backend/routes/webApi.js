import express from "express";

import blogController from "../app/controllers/blogController.js";

const router = express.Router();

// router.post("/blog/create", blogController.createData);
router.get("/", blogController.getAllData);
// router.get("/blog/:id", blogController.singleData);
// router.put("/blog/:id", blogController.updateData);
// router.delete("/blog/:id", blogController.deleteData);
// router.delete("/blog/", blogController.deletAllData);

export default router;
