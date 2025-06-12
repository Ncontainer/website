// src/pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation within the page

export default function LoginPage() {
   return (
    // Reverted to the original two-column grid structure
    <div className="min-h-screen grid grid-cols-[60%_40%]">
      {/* Left 60% with Image - Always visible */}
      <div className="bg-amber-700">
        <img
          src="/src/images/add5ce280c52659353300a1f07d05e4e79e2fbff.png"
          alt="Main Example"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right 40% - Login Form - Always white background */}
      <div className="bg-white relative flex flex-col items-center justify-center p-8">
        {/* Removed the background image styles for this div, it's just bg-white now */}
        {/* Removed the overlay div as well */}

        <div
          className="flex flex-col items-center p-0"
          style={{ gap: '7.26px' }}
        >
          {/* Welcome to */}
          <p
            className="text-center tracking-wider"
            style={{
              width: '430px',
              height: '21px',
              fontFamily: 'Saira, sans-serif',
              fontWeight: '500',
              fontSize: '19.3621px',
              lineHeight: '108%',
              color: '#FF8901', // Explicitly orange for desktop
            }}
          >
            Welcome to
          </p>

          {/* NCON Containers */}
          <h1
            className="text-center text-outline-orange" // This class provides black fill and orange stroke
            style={{
              width: '443.71px',
              height: '58px',
              fontFamily: 'Saira, sans-serif',
              fontWeight: '400',
              fontSize: '53.2458px',
              lineHeight: '108%',
            }}
          >
            NCON Containers
          </h1>
        </div>

        {/* The rest of your form elements will follow */}
        <div className="w-full max-w-sm mb-4 mt-8">
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="w-full max-w-sm mb-4">
          <button className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-300">
            Continue
          </button>
        </div>

        <div className="w-full max-w-sm flex items-center justify-center my-4">
          <span className="text-gray-500 text-sm">----------------- OR --------------------</span>
        </div>

        {/* This is the CORRECTED Register button to be a Link */}
        <div className="w-full max-w-sm mb-4">
          <Link
            to="/register" // This is the target path for the registration page
            className="w-full border border-amber-500 text-amber-500 py-3 rounded-full font-semibold hover:bg-amber-50 transition duration-300 text-center block"
          >
            Register
          </Link>
        </div>

        {/* Forgot Password Button - Already using Link component */}
        <div className="w-full max-w-sm text-center mt-2">
          <Link to="/forgot-password" className="text-gray-600 text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Image at the bottom right corner, always visible on this page */}
        <img
          src="/src/images/0f1163addb43adf2881e4d9228b07d4caa1db610.png"
          alt="Bottom Right Corner Image"
          className="absolute bottom-0 right-0 w-66 h-66 object-cover -mb-12 opacity-50"
        />
      </div>
    </div>
  );
}