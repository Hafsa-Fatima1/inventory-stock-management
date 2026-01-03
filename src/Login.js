import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // To redirect after login

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory(); // For redirecting user

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      // Store token and role in localStorage
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('userRole', response.data.user.role);

      // Redirect user based on role (optional)
      if (response.data.user.role === 'admin') {
        history.push('/admin-dashboard'); // Admin dashboard route
      } else {
        history.push('/store-manager-dashboard'); // Store manager dashboard route
      }

    } catch (error) {
      setError('Invalid credentials or error during login');
      console.error(error);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg mt-12">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg mb-4 w-full"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;