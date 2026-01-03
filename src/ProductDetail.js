import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [quantityIn, setQuantityIn] = useState(0);
  const [quantityOut, setQuantityOut] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [productId]);

  const handleStockIn = async () => {
    try {
      const response = await axios.put('http://localhost:5000/api/products/stock-in', {
        productId,
        quantity: quantityIn,
      });
      alert('Stock In successful!');
      setProduct(response.data.product); // Update the product state
    } catch (error) {
      console.error(error);
      alert('Error in Stock In');
    }
  };

  const handleStockOut = async () => {
    try {
      const response = await axios.put('http://localhost:5000/api/products/stock-out', {
        productId,
        quantity: quantityOut,
      });
      alert('Stock Out successful!');
      setProduct(response.data.product); // Update the product state
    } catch (error) {
      console.error(error);
      alert('Error in Stock Out');
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Category: {product.category.name}</p>
          <p>Price: {product.price}</p>
          <p>Supplier: {product.supplier}</p>
          <p>Stock: {product.quantity}</p>

          <div>
            <input
              type="number"
              value={quantityIn}
              onChange={(e) => setQuantityIn(Number(e.target.value))}
              placeholder="Stock In"
            />
            <button onClick={handleStockIn}>Stock In</button>
          </div>

          <div>
            <input
              type="number"
              value={quantityOut}
              onChange={(e) => setQuantityOut(Number(e.target.value))}
              placeholder="Stock Out"
            />
            <button onClick={handleStockOut}>Stock Out</button>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;