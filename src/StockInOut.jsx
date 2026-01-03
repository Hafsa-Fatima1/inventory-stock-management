import React, { useState } from 'react';
import axios from 'axios';

const StockInOut = ({ productId }) => {
  const [quantity, setQuantity] = useState(0);

  const handleStockIn = () => {
    axios.put(`http://localhost:5000/api/products/${productId}/stock-in`, { quantity })
      .then(response => {
        console.log('Stock In:', response.data);
        setQuantity(0);  // Reset quantity after action
      })
      .catch(error => console.log(error));
  };

  const handleStockOut = () => {
    axios.put(`http://localhost:5000/api/products/${productId}/stock-out`, { quantity })
      .then(response => {
        console.log('Stock Out:', response.data);
        setQuantity(0);  // Reset quantity after action
      })
      .catch(error => console.log(error));
  };

return (
    <div>
      <h3>Update Stock</h3>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        className="p-2 border border-gray-300 rounded-lg"
      />
      <button onClick={handleStockIn} className="bg-green-500 text-white py-2 px-4 rounded-lg">
        Stock In
      </button>
      <button onClick={handleStockOut} className="bg-red-500 text-white py-2 px-4 rounded-lg">
        Stock Out
      </button>
    </div>
  );
};

export default StockInOut;