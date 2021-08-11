const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  className: String,
  weapon: String,
  ammo: String,
  isCrew: String,
  crewCount: String,
  price: { type: Number, required: true },
  side: String,
  category: String,
});

module.exports = mongoose.model('Unit', unitSchema);
