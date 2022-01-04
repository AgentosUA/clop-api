const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../../config/client_secret.json');
const { Unit, Category } = require('../models');

const getDefaultTableId = (clopType) => {
  if (clopType === 'heavy') return '1KfrDPs1aCkgWuw0VjbL5IOAgfLJlYZCHTMmppA6cJ7I';
  if (clopType === 'light') return '1iwW59fJ5FTGkfxZElDDDUv7af1M0Cyl6UCm0wIZbxGc';
};

exports.setTable = async (req, res) => {
  try {
    const { tableId, clopType = 'heavy' } = req.query;

    const doc = new GoogleSpreadsheet(tableId || getDefaultTableId(clopType));
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const US = doc.sheetsByIndex[0];
    const RF = doc.sheetsByIndex[1];

    await US.loadCells();
    await RF.loadCells();

    const getUnitsData = async (side, sideName) => {
      const rows = await side.getRows();
      const units = [];
      const categories = [];
      let currentCategory = '';

      for (let i = 1; i < rows.length; i++) {
        if (side.getCell(i, 0).backgroundColor) {
          currentCategory = side.getCell(i, 0).value;
          categories.push(currentCategory);
          continue;
        }

        units.push({
          name: side.getCell(i, 0).value,
          className: side.getCell(i, 1).value,
          weapon: side.getCell(i, 2).value,
          ammo: side.getCell(i, 3).value,
          comment: side.getCell(i, 4).value || '',
          isCrew: Boolean(side.getCell(i, 5).value === 'X'),
          crewCount: side.getCell(i, 6).value,
          price: isNaN(Number(side.getCell(i, 7).value))
            ? 1
            : Number(side.getCell(i, 7).value),
          side: sideName,
          category: currentCategory,
          clopType,
        });
      }

      return [units, categories];
    };

    await Unit.deleteMany({ clopType });
    await Category.deleteMany({ clopType });

    const [usUnits, usCategories] = await getUnitsData(US, 'US');
    const [rfUnits, rfCategories] = await getUnitsData(RF, 'RF');

    await Unit.insertMany([...rfUnits, ...usUnits]);

    await Category.insertMany(
      usCategories.map((category) => {
        return {
          name: category,
          clopType,
        };
      })
    );

    res.status(200).json({
      message: 'Table successfully updated',
      US_ARMY: {
        units: usUnits,
        categories: usCategories,
      },
      RF_ARMY: {
        units: rfUnits,
        categories: rfCategories,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `Failed to update: ${error?.message}`,
    });
  }
};
