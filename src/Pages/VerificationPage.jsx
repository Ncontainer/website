import React, { useState } from 'react';
import axios from 'axios';
import bannerImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';

function VerificationPage() {
  const [otp, setOtp] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+91 9876543210'); // you can dynamically pull this from storage/context if available

  const handleVerify = async () => {
    try {
      const res = await axios.post('https://backend-production-d773.up.railway.app/api/auth/verify-otp', {
        phoneNumber,
        otp,
      });
      alert('OTP Verified Successfully!');
      // Optional: Navigate or proceed to reset page
    } catch (error) {
      alert('Invalid OTP. Please try again.');
      console.error(error);
    }
  };

  const handleResend = async () => {
    try {
      await axios.post('https://backend-production-d773.up.railway.app/api/auth/resend-otp', {
        phoneNumber,
      });
      alert('OTP re-sent successfully!');
    } catch (error) {
      alert('Failed to resend OTP.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      <div className="bg-amber-700 hidden md:block">
        <img src={bannerImage} alt="Main Example" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white relative flex flex-col justify-start p-8">
        <div className="w-full mb-8">
          <p className="text-center text-[#FF8901] font-medium text-sm">Welcome to</p>
          <div className="w-full border-b-4 border-orange-400 pb-2 mt-1">
            <h1 className="text-center text-2xl font-normal">NCON Containers</h1>
          </div>
        </div>

        <div className="w-full max-w-sm">
          <p className="text-gray-600 mb-2">We have sent a 6-Digit code to your Mobile Number</p>
          <p className="font-bold text-lg text-gray-900 mb-6 flex items-center">
            {phoneNumber}
            <span className="ml-2 cursor-pointer">✏️</span>
          </p>

          <div className="mb-6">
            <label htmlFor="otp" className="block text-gray-700 text-sm font-medium mb-2">One Time Password (OTP)</label>
            <div className="flex gap-2">
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                className="bg-white text-orange-500 border border-orange-500 py-3 px-6 rounded-md font-semibold hover:bg-orange-50 transition duration-300"
                onClick={handleResend}
              >
                Re-send
              </button>
            </div>
          </div>

          <button
            className="w-full bg-orange-400 text-white py-3 rounded-full font-semibold hover:bg-orange-300 transition duration-300"
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationPage;