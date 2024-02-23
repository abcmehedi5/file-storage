const imageModel = require("../../models/image/imageModel");

// post image name and path
const uploadImageService = async (file) => {
  const { filename, path } = file;
  const newImage = new imageModel({ filename, path });
  await newImage.save();
  return { message: "Image uploaded successfully", file: newFile };
};

// get image information
const getAllImageService = async () => {
  const allImages = await imageModel.find();
  return allImages;
};

module.exports = {
  uploadImageService,
  getAllImageService,
};
