// Stock In
exports.stockIn = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findById(productId);
    product.quantity += quantity;
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Stock Out
exports.stockOut = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findById(productId);
    if (product.quantity < quantity) {
      return res.status(400).json({ message: 'Not enough stock' });
    }
    product.quantity -= quantity;
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};