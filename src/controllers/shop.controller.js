const { Unit, Category } = require('../models');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    if (!categories) {
      return res.status(404).json({
        message: 'No categories found',
      });
    }

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json('Failed to get categories:', error);
  }
};

exports.getUnits = async (req, res) => {
  try {
    const units = await Unit.find({});
    if (!units) {
      return res.status(404).json({
        message: 'No units found',
      });
    }

    res.status(200).json(units);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `Failed to get units: ${error?.message}`,
    });
  }
};
