//const { google } = require('googleapis');
const axios = require('axios');
const Unit = require('../models/unit');
class homeController {
  async getDataSheet(req, res) {
    try {

    } catch (e) {

    }
  }

  async getAll(req, res) {
    const products = await Unit.find();

    if (!products.length) {
      res.status(404).json({
        message: 'Not found any products'
      })
    }
    res.status(200).json(products);
  }
}

module.exports = new homeController();
