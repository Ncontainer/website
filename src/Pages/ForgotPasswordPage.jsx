import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import heroImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.webp';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [popup, setPopup] = useState({ visible: false, message: '', success: true });
  const navigate = useNavigate();

  // Define the base URL as a constant for easy modification
  const BASE_BACKEND_URL = 'https://cktgf93ztd.us-east-1.awsapprunner.com/';

  const handleReset = async () => {
    try {
      const res = await axios.post(`${BASE_BACKEND_URL}api/auth/forgot-password`, {
        email,
      });
      setPopup({ visible: true, message: 'Reset link or OTP sent to your email.', success: true });
      setTimeout(() => {
        setPopup({ visible: false, message: '', success: true });
        navigate('/'); // Redirect to home page after success popup
      }, 2000);
    } catch (error) {
      setPopup({ visible: true, message: 'Failed to send reset instructions. Please try again.', success: false });
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
            <h1 className="text-center text-2xl font-normal" style={{ textShadow: '1px 1px 0 #FF8901' }}>NCON Containers</h1>
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

            {/* <button
  onClick={() => navigate('/reset-password')}
  className="bg-amber-500 w-80 text-white px-4 py-3 rounded-full font-semibold hover:bg-amber-400 transition duration-300"
>
  Reset Password
</button> */}
          </div>
        </div>
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
  );
}

export default ForgotPasswordPage;