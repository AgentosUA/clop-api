const { unitScheme } = require('../models/location');
const mongoose = require('mongoose');

class homeController {
  async add(req, res, next) {
    try {
      // const { name, className, needCrew, cost} = req.body
      // const Unit = mongoose.model('Unit', unitScheme);
      //TODO
    } catch (error) {}
  }

  async getAll(req, res) {}
}

module.exports = new homeController();
