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
      navigate('/one-way');
    } else {
      alert('Please fill all the required details.');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      
      {/* Image Section */}
      <div className="bg-amber-700 h-64 md:h-auto">
        <img
          src="/src/images/add5ce280c52659353300a1f07d05e4e79e2fbff.png"
          alt="Main Example"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="bg-white relative flex flex-col items-center px-6 py-10 md:px-12 overflow-y-auto">
        
        {/* Header */}
        <div className="w-full mb-8">
          <p
            className="text-center tracking-wider text-sm md:text-base"
            style={{
              fontFamily: 'Saira, sans-serif',
              fontWeight: '500',
              color: '#FF8901',
            }}
          >
            Welcome to
          </p>
          <div className="w-full border-b-4 border-orange-400 pb-2 mt-1">
            <h1
              className="text-center text-xl md:text-2xl leading-normal font-saira font-normal mx-auto"
              style={{ fontFamily: 'Saira, sans-serif' }}
            >
              NCON Containers
            </h1>
          </div>
        </div>

        {/* Form */}
        <form className="w-full max-w-xl space-y-4">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Email and Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email ID"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.emailId}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          {/* Company Name */}
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={formData.companyName}
            onChange={handleChange}
          />

          {/* Country and State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="country"
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
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
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
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
          <textarea
            placeholder="Enter Address"
            rows="3"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            value={formData.address}
            onChange={handleChange}
          ></textarea>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-400 transition duration-300"
          >
            Continue
          </button>
        </form>

        {/* Decorative Image */}
        
      </div>
    </div>
  );
}