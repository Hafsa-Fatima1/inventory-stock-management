const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  lowStockThreshold: {
    type: Number,
    default: 10,  // Set default low stock threshold to 10
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);