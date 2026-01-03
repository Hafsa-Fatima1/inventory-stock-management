import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import StockInOut from './StockInOut';
import CategoryList from './CategoryList';
import LowStockAlert from './LowStockAlert';


const App = () => {
 return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory & Stock Management System</h1>
      
      {/* Add Product Form */}
      <AddProduct />
      
      {/* Display Low Stock Alerts */}
      <LowStockAlert />
      
      {/* Product List with Stock In/Out functionality */}
      <ProductList />
      <StockInOut productId="some-product-id" />
      
      {/* Category List */}
      <CategoryList />
    </div>
    
  );
};

export default App;