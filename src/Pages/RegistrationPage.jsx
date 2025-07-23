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
    isLoading: false, // Only for Send OTP
  });
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false); // For Verify OTP button

  const [resendTimer, setResendTimer] = useState(0);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [countryMap, setCountryMap] = useState({}); // For mapping country name to id

  // Define the base URL as a constant for easy modification
  const BASE_BACKEND_URL = 'https://cktgf93ztd.us-east-1.awsapprunner.com/';

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popup, setPopup] = useState({ visible: false, message: '', success: true });

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
            `${BASE_BACKEND_URL}api/geo/country?page=${page}&page_size=50`
          );
          const data = res.data?.results || res.data?.data || [];
          data.forEach((c) => {
            map[c.name] = c.id;
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
        // Using a custom message box instead of alert()
        console.error('Failed to fetch countries:', err);
        // You might want to implement a custom modal or toast notification here
        // For demonstration, we'll log to console.
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
            `${BASE_BACKEND_URL}api/geo/state?country_id=${formData.country}&page=${page}&page_size=50`
          );
          const data = res.data?.results || res.data?.data || [];
          allStates = [...allStates, ...data];
          hasMore = res.data?.next || (data.length === 50);
          page += 1;
        }
        setStates(allStates);
      } catch (err) {
        setStates([]);
        // Using a custom message box instead of alert()
        console.error('Failed to fetch states:', err);
        // You might want to implement a custom modal or toast notification here
      }
    };
    fetchStates();
  }, [formData.country]);

const handleChange = (e) => {
  const { name, value, placeholder } = e.target;
  let fieldName = name;

  if (!fieldName) {
    switch (placeholder) {
      case 'First Name': fieldName = 'firstName'; break;
      case 'Last Name': fieldName = 'lastName'; break;
      case 'Email ID': fieldName = 'emailId'; break;
      case 'Email ID / Phone number': fieldName = 'emailId'; break;
      case 'Mobile Number': fieldName = 'mobileNumber'; break;
      case 'Company Name': fieldName = 'companyName'; break;
      case 'Enter Address': fieldName = 'address'; break;
      case 'Password': fieldName = 'password'; break;
      default: fieldName = ''; break;
    }
  }

  if (fieldName) {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  }
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
      setPopup({ visible: true, message: 'Please enter email address first.', success: false });
      return;
    }

    setOtpData(prev => ({ ...prev, isLoading: true }));

    try {
      await axios.post(`${BASE_BACKEND_URL}api/auth/send-otp`, {
        email: formData.emailId
      });

      setOtpData(prev => ({
        ...prev,
        isOtpSent: true,
        isLoading: false
      }));
      setResendTimer(12);
      setPopup({ visible: true, message: 'OTP sent successfully!', success: true });
    } catch (error) {
      setOtpData(prev => ({ ...prev, isLoading: false }));

    if (
  (error.response && error.response.status === 400 && error.request && typeof XMLHttpRequest !== 'undefined' && error.request instanceof XMLHttpRequest) ||
  (error.response && error.response.data && typeof error.response.data.message === 'string' &&
    (error.response.data.message.toLowerCase().includes('already registered') || error.response.data.message.toLowerCase().includes('already exists')))
) {
  setPopup({ visible: true, message: 'The user is already registered.', success: false });
} else {
  setPopup({ visible: true, message: 'Failed to send OTP. Please try again.', success: false });
}
    }
  };

  const verifyOtp = async () => {
    if (!otpData.otp.trim()) {
      setPopup({ visible: true, message: 'Please enter OTP.', success: false });
      return;
    }
    setIsVerifyingOtp(true);
    try {
      const response = await axios.post(`${BASE_BACKEND_URL}api/auth/verify-otp`, {
        email: formData.emailId,
        otp: otpData.otp
      });
      setOtpData(prev => ({
        ...prev,
        isOtpVerified: true,
        sessionToken: response.data.sessionToken || response.data.token || '',
      }));
      setPopup({ visible: true, message: 'OTP verified successfully!', success: true });
    } catch (error) {
      setPopup({ visible: true, message: 'Invalid OTP. Please try again.', success: false });
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleContinue = async (e) => {
    e.preventDefault();

    const required = ['firstName', 'lastName', 'emailId', 'mobileNumber', 'companyName', 'country', 'state', 'address', 'password'];
    const allFilled = required.every(field => formData[field] && formData[field].trim() !== '');

    if (!allFilled) {
      setPopup({ visible: true, message: 'Please fill all the required details.', success: false });
      return;
    }

    if (!otpData.isOtpVerified) {
      setPopup({ visible: true, message: 'Please verify your email address with OTP first.', success: false });
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

      await axios.post(`${BASE_BACKEND_URL}api/auth/register`, registrationData);
      setPopup({ visible: true, message: 'Registration successful! Redirecting to login...', success: true });
      setTimeout(() => {
        setPopup({ visible: false, message: '', success: true });
        navigate('/login');
      }, 2500);
    } catch (error) {
      if (error.response) {
        setPopup({ visible: true, message: 'Registration failed: ' + (error.response.data?.message || JSON.stringify(error.response.data)), success: false });
      } else {
        setPopup({ visible: true, message: 'Registration failed! Please try again.', success: false });
      }
    }
  };

  // Show popup for 2 seconds (2000ms) for both success and error
  useEffect(() => {
    if (popup.visible) {
      const timer = setTimeout(() => {
        setPopup(prev => ({ ...prev, visible: false }));
      }, popup.success ? 2000 : 6000); // 2s for success, 6s for error
      return () => clearTimeout(timer);
    }
  }, [popup.visible]);

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
            <p className="text-left text-sm text-gray-700 font-medium">Verify your email address/ phone number</p>
            <div className="flex gap-2 items-stretch">
              <input
                type="email"
                placeholder="Email ID / Phone number"
                name="emailId"
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
                {'Send OTP'}
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
                  disabled={isVerifyingOtp}
                  className={`px-3 rounded-md font-semibold text-sm whitespace-nowrap transition duration-300 ${
                    isVerifyingOtp
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-400'
                  }`}
                >
                  {isVerifyingOtp ? 'Verifying...' : 'Verify OTP'}
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