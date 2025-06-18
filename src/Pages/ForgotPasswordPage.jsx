import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png'; // ✅ Proper image import

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      {/* Left - Image Section */}
      <div className="bg-amber-700">
        <img
          src={heroImage}
          alt="Main Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Form Area */}
      <div className="bg-white relative flex flex-col justify-start px-6 py-10 md:px-12">
        {/* Header */}
        <div className="w-full mb-8">
          <p className="text-center tracking-wider text-[#FF8901] font-medium text-sm">
            Welcome to
          </p>
          <div className="w-full border-b-4 border-orange-400 pb-2 mt-1">
            <h1 className="text-center text-2xl font-normal" style={{ fontFamily: 'Saira, sans-serif' }}>
              NCON Containers
            </h1>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
          <p className="text-gray-600">
            Please enter the email address associated with your account and we will email you a link to reset your password.
          </p>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <div className="flex justify-center md:justify-start">
            <Link
              to="/verify"
              className="bg-amber-500 w-80 text-white px-4 py-3 rounded-full font-semibold text-center hover:bg-amber-400 transition duration-300"
            >
              Reset Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;