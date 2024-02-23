const imageService = require("../../services/image/imageService");

// upload image
const uploadImageController = async (req, res) => {
  try {
    const file = req.file;
    const result = await imageService.uploadImageService(file);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get all images
const getAllImagesController = async (req, res) => {
  try {
    const result =  await imageService.getAllImageService();
    console.log(result)
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  uploadImageController,
  getAllImagesController
};
