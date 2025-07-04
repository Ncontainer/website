import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import heroImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Define the base URL as a constant for easy modification
  const BASE_BACKEND_URL = 'https://cktgf93ztd.us-east-1.awsapprunner.com/';

  const handleReset = async () => {
    try {
      const res = await axios.post(`${BASE_BACKEND_URL}api/auth/forgot-password`, {
        email,
      });
      console.log('Reset link or OTP sent to your email.'); // Replaced alert

      // Redirect to VerificationPage and pass email as state
      navigate('/verify', { state: { email } });

    } catch (error) {
      console.error('Failed to send reset instructions. Please try again.', error); // Replaced alert
      // You might want to implement a custom modal or toast notification here
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      <div className="bg-amber-700">
        <img src={heroImage} alt="Main Visual" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white relative flex flex-col justify-start px-6 py-10 md:px-12">
        <div className="w-full mb-8">
          <p className="text-center text-[#FF8901] font-medium text-sm">Welcome to</p>
          <div className="w-full border-b-4 border-orange-400 pb-2 mt-1">
            <h1 className="text-center text-2xl font-normal">NCON Containers</h1>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
          <p className="text-gray-600">Enter your registered email address:</p>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleReset}
              className="bg-amber-500 w-80 text-white px-4 py-3 rounded-full font-semibold hover:bg-amber-400 transition duration-300"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;