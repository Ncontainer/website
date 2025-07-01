// ✅ Updated LoginPage.jsx with email & password fields + API integration
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const res = await axios.post('https://backend-production-d773.up.railway.app/api/auth/login', {
      email,
      password,
    });

    // Store login status and token
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', res.data.token);

    alert('Login successful!');
    navigate('/');
  } catch (error) {
    alert('Login failed. Please check your credentials.');
    console.error(error);
  }
};

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      <div className="bg-amber-700">
        <img src={loginImage} alt="Main Example" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white relative flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center" style={{ gap: '7.26px' }}>
          <p className="text-center text-amber-500 font-medium text-lg">Welcome to</p>
          <h1 className="text-center text-4xl font-normal text-black" style={{ textShadow: '1px 1px 0 #FF8901' }}>NCON Containers</h1>
        </div>

        <div className="w-full max-w-sm mb-4 mt-8">
          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="w-full max-w-sm mb-4">
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="w-full max-w-sm mb-4">
          <button
            className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-300"
            onClick={handleLogin}
          >
            Continue
          </button>
        </div>

        <div className="w-full max-w-sm flex items-center justify-center my-4">
          <span className="text-gray-500 text-sm">------------------ OR --------------------</span>
        </div>

        <div className="w-full max-w-sm mb-4">
          <Link to="/register" className="w-full border border-amber-500 text-amber-500 py-3 rounded-full font-semibold hover:bg-amber-50 transition duration-300 text-center block">
            Register
          </Link>
        </div>

        <div className="w-full max-w-sm text-center mt-2">
          <Link to="/forgot-password" className="text-gray-600 text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}