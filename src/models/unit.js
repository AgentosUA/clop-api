const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  className: String,
  weapon: String,
  ammo: String,
  imageUrl: String,
  isCrew: Boolean,
  crewCount: Number,
  price: { type: Number, required: true },
  side: String,
  category: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Category',
  }
});

module.exports = mongoose.model('Unit', unitSchema);
