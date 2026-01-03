// src/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  // Function to handle stock-in
  const handleStockIn = (id, quantity) => {
    axios.put(`http://localhost:5000/api/products/${id}/stock-in`, { quantity })
      .then(response => {
        setProducts(products.map(product => 
          product._id === id ? response.data : product
        ));
      })
      .catch(error => {
        console.error('There was an error updating the stock-in!', error);
      });
  };

  // Function to handle stock-out
  const handleStockOut = (id, quantity) => {
    axios.put(`http://localhost:5000/api/products/${id}/stock-out`, { quantity })
      .then(response => {
        setProducts(products.map(product => 
          product._id === id ? response.data : product
        ));
      })
      .catch(error => {
        console.error('There was an error updating the stock-out!', error);
      });
  };


const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="container mx-auto my-6">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.category.name}</td>
              <td className="px-4 py-2">{product.quantity}</td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-lg"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between my-4">
        <button onClick={handlePreviousPage} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Previous
        </button>
        <button onClick={handleNextPage} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;