const { Unit, Category } = require('../models');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    if (!categories) {
      return res.status(404).json({
        message: 'No categories found',
      });
    }

    res.status(200).json({
      us: {
        heavy: categories.filter(unit => unit.clopType === 'heavy'),
        light: categories.filter(unit => unit.clopType === 'light'),
      },
      ru: {
        heavy: categories.filter(unit => unit.clopType === 'heavy'),
        light: categories.filter(unit => unit.clopType === 'light'),
      }
    });
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

    res.status(200).json({
      us: {
        heavy: units.filter(unit => unit.side === 'US' && unit.clopType === 'heavy'),
        light: units.filter(unit => unit.side === 'US' && unit.clopType === 'light'),
      },
      ru: {
        heavy: units.filter(unit => unit.side === 'RF' && unit.clopType === 'heavy'),
        light: units.filter(unit => unit.side === 'RF' && unit.clopType === 'light'),
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `Failed to get units: ${error?.message}`,
    });
  }
};
