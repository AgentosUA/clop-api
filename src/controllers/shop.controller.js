const { Unit, Category } = require('../models');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json('Failed to get categories:', error);
  }
};

exports.getUnits = async (req, res) => {
  try {
    const units = await Unit.find({});

    res.status(200).json(units);
  } catch (error) {
    console.log(error);
    res.status(500).json('Failed to get units:', error);
  }
};
