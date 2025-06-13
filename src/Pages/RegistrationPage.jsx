import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNumber: '',
    companyName: '',
    country: '',
    state: '',
    address: '',
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    let fieldName;

    switch (placeholder) {
      case 'First Name': fieldName = 'firstName'; break;
      case 'Last Name': fieldName = 'lastName'; break;
      case 'Email ID': fieldName = 'emailId'; break;
      case 'Mobile Number': fieldName = 'mobileNumber'; break;
      case 'Company Name': fieldName = 'companyName'; break;
      case 'Enter Address': fieldName = 'address'; break;
      default: fieldName = placeholder;
    }

    if (e.target.tagName === 'SELECT') {
      fieldName = e.target.name;
    }

    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const required = ['firstName', 'lastName', 'emailId', 'mobileNumber', 'companyName', 'country', 'state', 'address'];
    const allFilled = required.every(field => formData[field] && formData[field].trim() !== '');

    if (allFilled) {
      navigate('/one-way'); // ✅ Updated to redirect to OneWayForm
    } else {
      alert('Please fill all the required details.');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-[60%_40%]">
      {/* Left Image Section */}
      <div className="bg-amber-700">
        <img
          src="/src/images/add5ce280c52659353300a1f07d05e4e79e2fbff.png"
          alt="Main Example"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="bg-white relative flex flex-col items-center px-12 pt-8 pb-20 overflow-y-auto">
        {/* Welcome Header */}
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

        {/* Registration Form */}
        <div className="w-full">
          <div className="flex flex-col gap-4 w-full">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Email ID & Mobile Number */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.emailId}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>

            {/* Company Name */}
            <div className="w-full">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            {/* Country & State */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <select
                name="country"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                value={formData.country}
                onChange={handleSelectChange}
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
              </select>
              <select
                name="state"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                value={formData.state}
                onChange={handleSelectChange}
              >
                <option value="">Select State</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Gujarat">Gujarat</option>
              </select>
            </div>

            {/* Address */}
            <div className="w-full">
              <textarea
                placeholder="Enter Address"
                rows="3"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-200 transition duration-300 mt-6"
          >
            Continue
          </button>
        </div>

        {/* Decorative Image */}
        <img
          src="/src/assets/images/0f1163addb43adf2881e4d9228b07d4caa1db610.png"
          alt="Bottom Right"
          className="absolute bottom-0 right-0 w-66 h-66 object-cover -mb-12 opacity-50"
        />
      </div>
    </div>
  );
}