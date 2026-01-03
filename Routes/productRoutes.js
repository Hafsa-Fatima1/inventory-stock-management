const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');


router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

router.put('/:id/stock-in', productController.stockIn);

// Stock Out - Decrease product quantity
router.put('/:id/stock-out', productController.stockOut);
module.exports = router;