module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Vite uses this to scan the files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
<div>
  <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
  
  {/* Low Stock Alert */}
  <div className="bg-red-500 text-white p-4 mb-6 rounded-md">
    <h2 className="font-bold">Low Stock Alerts</h2>
    <ul className="list-disc ml-6">
      <li>Widget A - Only 3 left in stock!</li>
      <li>Gadget B - Only 5 left in stock!</li>
      <li>Component C - Only 2 left in stock!</li>
    </ul>
  </div>
  
  {/* Manage Inventory */}
  <div className="grid grid-cols-3 gap-4 mb-6">
    <div className="text-center bg-blue-500 text-white p-4 rounded-md">
      <button className="bg-blue-700 p-2 rounded">Add New Product</button>
    </div>
    <div className="text-center bg-green-500 text-white p-4 rounded-md">
      <button className="bg-green-700 p-2 rounded">View Products</button>
    </div>
    <div className="text-center bg-yellow-500 text-white p-4 rounded-md">
      <button className="bg-yellow-700 p-2 rounded">View Categories</button>
    </div>
  </div>

  {/* Stats Section */}
  <div className="grid grid-cols-4 gap-4">
    <div className="bg-blue-300 p-4 rounded-md text-center">
      <h3>Total Products</h3>
      <p className="text-xl font-bold">120</p>
    </div>
    <div className="bg-red-300 p-4 rounded-md text-center">
      <h3>Low Stock Items</h3>
      <p className="text-xl font-bold">8</p>
    </div>
    <div className="bg-green-300 p-4 rounded-md text-center">
      <h3>Total Orders</h3>
      <p className="text-xl font-bold">350</p>
    </div>
    <div className="bg-orange-300 p-4 rounded-md text-center">
      <h3>Pending Orders</h3>
      <p className="text-xl font-bold">12</p>
    </div>
  </div>