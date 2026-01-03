import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [supplier, setSupplier] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, category, quantity, price, supplier };

    axios.post('http://localhost:5000/api/products', newProduct)
      .then(response => {
        console.log('Product added:', response.data);
        // Clear form fields
        setName('');
        setCategory('');
        setQuantity(0);
        setPrice(0);
        setSupplier('');
      })
      .catch(error => console.log(error));
  };

return (
    <div className="container mx-auto my-6">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-lg mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-lg mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-lg mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-lg mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded-lg mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;