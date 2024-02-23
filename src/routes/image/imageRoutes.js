const { Router } = require("express");
const {
  uploadImageController,
  getAllImagesController,
} = require("../../controllers/image/imageController");
const imageRouter = Router();
// upload image route
imageRouter.post("/product", uploadImageController);
imageRouter.get("/images", getAllImagesController);
module.exports = imageRouter;
