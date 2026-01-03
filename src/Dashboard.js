import React from 'react';
import LowStockAlert from './LowStockAlert';  // Import Low Stock Alerts

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Display Low Stock Alerts */}
      <LowStockAlert />  

      {/* You can add other dashboard features here */}
    </div>
  );
};

export default Dashboard;