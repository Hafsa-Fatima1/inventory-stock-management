import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LowStockAlert = () => {
  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        const lowStock = response.data.filter(product => product.quantity < 5);
        setLowStockProducts(lowStock);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Low Stock Alert</h2>
      <ul>
        {lowStockProducts.map(product => (
          <li key={product._id}>
            {product.name} - Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowStockAlert;