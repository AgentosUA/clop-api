const mongoose = require('mongoose');

const unitScheme = new mongoose.Schema({
  name: { type: String, required: true },
  className: { type: String, required: false },
  needCrew: Boolean,
  cost: { type: Number, required: true },
});

module.exports = unitScheme;
