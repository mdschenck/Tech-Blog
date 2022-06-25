const { Category } = require("../models");

const categoryData = [
  {
    name: "Windows OS",
  },
  {
    name: "Apple & iOS",
  },
  {
    name: "Coding with JavaScript",
  },
  {
    name: "Node.js, Express and Back End JS",
  },
  {
    name: "Consumer Devices",
  },
  {
    name: "Gaming",
  },
  {
    name: "Vitrual Reality",
  },
  {
    name: "Immersive Audio",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
