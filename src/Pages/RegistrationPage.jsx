import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bannerImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';

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
    password: '',
  });

  const [otpData, setOtpData] = useState({
    otp: '',
    isOtpSent: false,
    isOtpVerified: false,
    sessionToken: '',
    isLoading: false,
  });

  const [resendTimer, setResendTimer] = useState(0);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [countryMap, setCountryMap] = useState({}); // For mapping country name to id

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let page = 1;
        let allCountries = [];
        let map = {};
        let hasMore = true;
        while (hasMore) {
          const res = await axios.get(
            `https://backend-production-d773.up.railway.app/api/geo/country?page=${page}&page_size=50`
          );
          const data = res.data?.results || res.data?.data || [];
          data.forEach((c) => {
            map[c.name] = c.id; // <-- use _id, not id
          });
          allCountries = [...allCountries, ...data];
          hasMore = res.data?.next || (data.length === 50);
          page += 1;
        }
        setCountries(allCountries);
        setCountryMap(map);
      } catch (err) {
        setCountries([]);
        setCountryMap({});
        alert('Failed to fetch countries');
      }
    };
    fetchCountries();
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.country) {
        setStates([]);
        return;
      }
      try {
        let page = 1;
        let allStates = [];
        let hasMore = true;
        while (hasMore) {
          const res = await axios.get(
            `https://backend-production-d773.up.railway.app/api/geo/state?country_id=${formData.country}&page=${page}&page_size=50`
          );
          const data = res.data?.results || res.data?.data || [];
          allStates = [...allStates, ...data];
          hasMore = res.data?.next || (data.length === 50);
          page += 1;
        }
        setStates(allStates);
      } catch (err) {
        setStates([]);
        alert('Failed to fetch states');
      }
    };
    fetchStates();
  }, [formData.country]);

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
      case 'Password': fieldName = 'password'; break;
      default: fieldName = placeholder;
    }

    if (e.target.tagName === 'SELECT') {
      fieldName = e.target.name;
    }

    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'country' ? { state: '' } : {}) // Reset state if country changes
    }));
  };

  const handleOtpChange = (e) => {
    setOtpData(prev => ({ ...prev, otp: e.target.value }));
  };

  // --- Email OTP logic ---
  const sendOtp = async () => {
    if (!formData.emailId.trim()) {
      alert('Please enter email address first.');
      return;
    }

    setOtpData(prev => ({ ...prev, isLoading: true }));

    try {
      await axios.post('https://backend-production-d773.up.railway.app/api/auth/send-otp', {
        email: formData.emailId
      });

      setOtpData(prev => ({
        ...prev,
        isOtpSent: true,
        isLoading: false
      }));
      setResendTimer(12);
      alert('OTP sent successfully!');
    } catch (error) {
      console.error(error);
      setOtpData(prev => ({ ...prev, isLoading: false }));

      if (
        error.response &&
        error.response.data &&
        typeof error.response.data.message === 'string' &&
        error.response.data.message.toLowerCase().includes('already registered')
      ) {
        alert('This email is already registered.');
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    }
  };

  const verifyOtp = async () => {
    if (!otpData.otp.trim()) {
      alert('Please enter OTP.');
      return;
    }

    setOtpData(prev => ({ ...prev, isLoading: true }));

    try {
      const response = await axios.post('https://backend-production-d773.up.railway.app/api/auth/verify-otp', {
        email: formData.emailId,
        otp: otpData.otp
      });

      setOtpData(prev => ({
        ...prev,
        isOtpVerified: true,
        sessionToken: response.data.sessionToken || response.data.token || '',
        isLoading: false
      }));
      alert('OTP verified successfully!');
    } catch (error) {
      console.error('Error:', error.response || error);
      setOtpData(prev => ({ ...prev, isLoading: false }));
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleContinue = async (e) => {
    e.preventDefault();

    const required = ['firstName', 'lastName', 'emailId', 'mobileNumber', 'companyName', 'country', 'state', 'address', 'password'];
    const allFilled = required.every(field => formData[field] && formData[field].trim() !== '');

    if (!allFilled) {
      alert('Please fill all the required details.');
      return;
    }

    if (!otpData.isOtpVerified) {
      alert('Please verify your email address with OTP first.');
      return;
    }

    try {
      const registrationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.emailId,
        mobileNumber: formData.mobileNumber,
        companyName: formData.companyName,
        country: formData.country,
        state: formData.state,
        address: formData.address,
        password: formData.password,
        sessionToken: otpData.sessionToken
      };

      await axios.post('https://backend-production-d773.up.railway.app/api/auth/register', registrationData);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
     if (error.response) {
    console.error("API Error Response:", error.response.data);
    alert(
      'Registration failed: ' +
      (error.response.data?.message || JSON.stringify(error.response.data))
    );
  } else {
    console.error("Error:", error.message);
    alert('Registration failed! Please try again.');
  }
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

        {/* Email OTP Section */}
        {!otpData.isOtpVerified && (
          <form className="w-full max-w-xl space-y-4">
            <p className="text-left text-sm text-gray-700 font-medium">Verify your email address</p>
            <div className="flex gap-2 items-stretch">
              <input
                type="email"
                placeholder="Email ID"
                className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.emailId}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={sendOtp}
                disabled={otpData.isLoading || otpData.isOtpVerified || resendTimer > 0}
                className={`px-3 rounded-md font-semibold transition duration-300 ${
                  otpData.isOtpVerified
                    ? 'bg-green-500 text-white cursor-not-allowed'
                    : otpData.isLoading || resendTimer > 0
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-amber-500 text-white hover:bg-amber-400'
                }`}
              >
                {otpData.isLoading
                  ? 'Sending...'
                  : otpData.isOtpVerified
                  ? 'Verified'
                  : resendTimer > 0
                  ? `Wait (${resendTimer}s)`
                  : 'Send OTP'}
              </button>
            </div>

            {resendTimer > 0 && (
              <p className="text-sm text-gray-600 mt-1 ml-1">
                Resend OTP in {resendTimer} second{resendTimer !== 1 ? 's' : ''}
              </p>
            )}

            {otpData.isOtpSent && !otpData.isOtpVerified && (
              <div className="flex gap-2 items-stretch">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={otpData.otp}
                  onChange={handleOtpChange}
                  maxLength="6"
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  disabled={otpData.isLoading}
                  className={`px-3 rounded-md font-semibold text-sm whitespace-nowrap transition duration-300 ${
                    otpData.isLoading
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-400'
                  }`}
                >
                  {otpData.isLoading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </div>
            )}
          </form>
        )}

        {/* Registration Form */}
        {otpData.isOtpVerified && (
          <form className="w-full max-w-xl space-y-4 mt-6" onSubmit={handleContinue}>
            <div className="grid grid-cols-2 gap-4">
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
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email ID"
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.emailId}
                readOnly // Email is now verified and read-only
              />
              <input
                type="password"
                placeholder="Password"
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={formData.companyName}
              onChange={handleChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="country"
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                value={formData.country}
                onChange={e => setFormData(prev => ({ ...prev, country: e.target.value, state: '' }))}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>{country.name}</option>
                ))}
              </select>

              <select
                name="state"
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                value={formData.state}
                onChange={e => setFormData(prev => ({ ...prev, state: e.target.value }))}
                //disabled={!formData.country || !states.length}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>{state.name}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Enter Address"
              rows="3"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              value={formData.address}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-full font-semibold hover:bg-amber-400 transition duration-300"
            >
              Continue
            </button>
          </form>
        )}
      </div>
    </div>
  );
}