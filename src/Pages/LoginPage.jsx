// src/pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    // Responsive: stack columns on small screens, side-by-side on md and above
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      
      {/* Left - Image */}
      <div className="bg-amber-700">
        <img
          src="/src/images/add5ce280c52659353300a1f07d05e4e79e2fbff.png"
          alt="Main Example"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Login Form */}
      <div className="bg-white relative flex flex-col items-center justify-center p-8">
        <div
          className="flex flex-col items-center p-0"
          style={{ gap: '7.26px' }}
        >
          <p
            className="text-center tracking-wider"
            style={{
              fontFamily: 'Saira, sans-serif',
              fontWeight: '500',
              fontSize: '19.3621px',
              lineHeight: '108%',
              color: '#FF8901',
            }}
          >
            Welcome to
          </p>

          <h1
            className="text-center"
            style={{
              fontFamily: 'Saira, sans-serif',
              fontWeight: '400',
              fontSize: '53.2458px',
              lineHeight: '108%',
              color: 'black',
              textShadow: `
                -1px -1px 0 #FF8901,
                1px -1px 0 #FF8901,
                -1px 1px 0 #FF8901,
                1px 1px 0 #FF8901
              `,
            }}
          >
            NCON Containers
          </h1>
        </div>

        {/* Email input */}
        <div className="w-full max-w-sm mb-4 mt-8">
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Continue button */}
        <div className="w-full max-w-sm mb-4">
          <button className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-300">
            Continue
          </button>
        </div>

        {/* OR separator */}
        <div className="w-full max-w-sm flex items-center justify-center my-4">
          <span className="text-gray-500 text-sm">------------------ OR --------------------</span>
        </div>

        {/* Register link */}
        <div className="w-full max-w-sm mb-4">
          <Link
            to="/register"
            className="w-full border border-amber-500 text-amber-500 py-3 rounded-full font-semibold hover:bg-amber-50 transition duration-300 text-center block"
          >
            Register
          </Link>
        </div>

        {/* Forgot password */}
        <div className="w-full max-w-sm text-center mt-2">
          <Link to="/forgot-password" className="text-gray-600 text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Decorative image - only show on md and larger */}
        
      </div>
    </div>
  );
}