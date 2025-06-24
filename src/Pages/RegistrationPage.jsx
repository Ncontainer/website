import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bannerImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';

export default function RegistrationPage() {
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNumber: '',
    companyName: '',
    country: '',
    state: '',
    city: '',
    address: '',
  });

  // Fetch countries on component load
  useEffect(() => {
    axios.get('https://backend-production-d773.up.railway.app/api/locations/countries')
      .then(res => setCountries(res.data))
      .catch(err => console.error(err));
  }, []);

  // Fetch states on country change
  useEffect(() => {
    if (formData.country) {
      axios.get(`https://backend-production-d773.up.railway.app/api/locations/states?countryId=${formData.country}`)
        .then(res => setStates(res.data))
        .catch(err => console.error(err));
    }
  }, [formData.country]);

  // Fetch cities on state change
  useEffect(() => {
    if (formData.state) {
      axios.get(`https://backend-production-d773.up.railway.app/api/locations/cities?stateId=${formData.state}`)
        .then(res => setCities(res.data))
        .catch(err => console.error(err));
    }
  }, [formData.state]);

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

  const handleContinue = async (e) => {
    e.preventDefault();
    const required = ['firstName', 'lastName', 'emailId', 'mobileNumber', 'companyName', 'country', 'state', 'city', 'address'];
    const allFilled = required.every(field => formData[field] && formData[field].trim() !== '');

    if (!allFilled) {
      alert('Please fill all the required details.');
      return;
    }

    try {
      const res = await axios.post('https://backend-production-d773.up.railway.app/api/auth/register', formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      <div className="bg-amber-700 h-64 md:h-auto">
        <img src={bannerImage} alt="Main Example" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white relative flex flex-col items-center px-6 py-10 md:px-12 overflow-y-auto">
        <div className="w-full mb-8">
          <p className="text-center tracking-wider text-sm md:text-base text-[#FF8901] font-medium">
            Welcome to
          </p>
          <div className="w-full border-b-4 border-orange-400 pb-2 mt-1">
            <h1 className="text-center text-xl md:text-2xl leading-normal font-saira font-normal mx-auto">
              NCON Containers
            </h1>
          </div>
        </div>

        <form className="w-full max-w-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" value={formData.firstName} onChange={handleChange} />
            <input type="text" placeholder="Last Name" className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email ID" className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" value={formData.emailId} onChange={handleChange} />
            <input type="text" placeholder="Mobile Number" className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" value={formData.mobileNumber} onChange={handleChange} />
          </div>
          <input type="text" placeholder="Company Name" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" value={formData.companyName} onChange={handleChange} />

          {/* Country, State, City Selects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="country" className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))}
            </select>

            <select name="state" className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white" value={formData.state} onChange={handleChange} disabled={!formData.country}>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>

          <select name="city" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white" value={formData.city} onChange={handleChange} disabled={!formData.state}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select>

          <textarea placeholder="Enter Address" rows="3" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" value={formData.address} onChange={handleChange}></textarea>
          <button onClick={handleContinue} className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-400 transition duration-300">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}