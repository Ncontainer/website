// ✅ Updated LoginPage.jsx with email & password fields + API integration
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.webp';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popup, setPopup] = useState({ visible: false, message: '', success: true });
  const navigate = useNavigate();

  // Define the base URL as a constant for easy modification
  const BASE_BACKEND_URL = 'https://cktgf93ztd.us-east-1.awsapprunner.com/';

  // If already logged in, redirect to home
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (isLoggedIn) {
    navigate('/', { replace: true });
    return null;
  }

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BASE_BACKEND_URL}api/auth/login`, {
        email,
        password,
      });

      // Store login status and token
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      setPopup({ visible: true, message: 'Login failed. Please check your credentials.', success: false });
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

        {/* Pop-up Modal for Success/Error */}
        {popup.visible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300">
            <div className={`relative bg-white rounded-3xl shadow-2xl w-[90%] max-w-sm text-center border-t-4 ${popup.success ? 'border-orange-500' : 'border-red-500'} scale-100 opacity-100 translate-y-0 transition-all duration-500`}
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', backdropFilter: 'blur(10px)' }}>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`rounded-full h-20 w-20 flex items-center justify-center shadow-lg ${popup.success ? 'bg-gradient-to-r from-orange-400 to-amber-500' : 'bg-gradient-to-r from-red-400 to-rose-500'}`}>
                      {popup.success ? (
                        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className={`text-2xl font-bold ${popup.success ? 'text-orange-600' : 'text-red-600'}`}>{popup.success ? 'Success!' : 'Error!'}</h2>
                  <p className="text-gray-600 leading-relaxed">{popup.message}</p>
                </div>
                {!popup.success && (
                  <button
                    onClick={() => setPopup({ ...popup, visible: false })}
                    className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}