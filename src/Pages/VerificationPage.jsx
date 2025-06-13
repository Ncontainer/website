import React from 'react';
import { Link } from 'react-router-dom';

function VerificationPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      {/* Left 60% with Image */}
      <div className="bg-amber-700 hidden md:block">
        <img
          src="/src/images/add5ce280c52659353300a1f07d05e4e79e2fbff.png"
          alt="Main Example"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right 40% - Verification Form Content */}
      <div className="bg-white relative flex flex-col justify-start p-8">
        {/* Header */}
        <div className="w-full mb-8">
          <p
            className="text-center tracking-wider"
            style={{
              fontFamily: 'Saira, sans-serif',
              fontWeight: '500',
              fontSize: '15.3621px',
              lineHeight: '109%',
              color: '#FF8901',
            }}
          >
            Welcome to
          </p>

          <div className="w-full border-b-4 border-orange-400 pb-2 mt-1">
            <h1
              className="text-center text-2xl leading-normal font-saira font-normal"
              style={{
                fontFamily: 'Saira, sans-serif',
                width: 'fit-content',
                margin: '0 auto',
              }}
            >
              NCON Containers
            </h1>
          </div>
        </div>

        {/* Verification Section */}
        <div className="w-full max-w-sm">
          <p className="text-gray-600 mb-2">
            We have sent a 6-Digit code to your Mobile Number
          </p>
          <p className="font-bold text-lg text-gray-900 mb-6 flex items-center">
            +91 9876543210
            <span className="ml-2 cursor-pointer">✏️</span>
          </p>

          {/* OTP Input and Re-send */}
          <div className="mb-6">
            <label htmlFor="otp" className="block text-gray-700 text-sm font-medium mb-2">
              One Time Password (OTP)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="otp"
                placeholder="Enter OTP"
                className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-white text-orange-500 border border-orange-500 py-3 px-6 rounded-md font-semibold hover:bg-orange-50 transition duration-300">
                Re-send
              </button>
            </div>
          </div>

          {/* Verify Button */}
          <button className="w-full bg-orange-400 text-white py-3 rounded-full font-semibold hover:bg-orange-300 transition duration-300">
            Verify
          </button>
        </div>

        {/* Bottom Right Image */}
        <img
          src="/src/assets/images/0f1163addb43adf2881e4d9228b07d4caa1db610.png"
          alt="Bottom Right Corner Image"
          className="absolute bottom-0 right-0 w-66 h-66 object-cover -mb-12 opacity-20"
        />
      </div>
    </div>
  );
}

export default VerificationPage;