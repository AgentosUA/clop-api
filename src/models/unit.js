const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  className: String,
  weapon: String,
  ammo: String,
  comment: String,
  isCrew: Boolean,
  crewCount: String,
  price: { type: Number, required: true },
  side: String,
  category: String,
  clopType: { type: String, required: true },
});

module.exports = mongoose.model('Unit', unitSchema);
