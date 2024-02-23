const imageModel = require("../../models/image/imageModel");

// post image name and path
const uploadImageService = async (file) => {
  const { filename, path } = file;
  const newImage = new imageModel({ filename, path });
  await newImage.save();
  const url = `${process.env.BASE_URL}/${path}`;
  console.log(path);
  return {
    message: "Image uploaded successfully",
    image: url,
  };
};

// get image information
const getAllImageService = async () => {
  const allImages = await imageModel.find();
  return allImages;
};

// get single image
const getSingleImage = async (imageName) => {
  const getImage = await imageModel.findOne({ filename: imageName });
  return getImage;
};

module.exports = {
  uploadImageService,
  getAllImageService,
  getSingleImage,
};
