import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bannerImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';

export default function RegistrationPage() {
  const navigate = useNavigate();

  const countryOptions = [
  "India", "USA", "Canada", "Australia", "Germany", "France", "Brazil", "UK", "Japan", "China",
  "Russia", "Italy", "Spain", "Mexico", "South Africa", "Argentina", "Netherlands", "Turkey", "Indonesia", "Egypt",
  "Sweden", "Norway", "Switzerland", "Belgium", "Denmark", "Finland", "New Zealand", "Poland", "Thailand", "Malaysia",
  "Vietnam", "Philippines", "Colombia", "Chile", "Peru", "Greece", "Portugal", "Ireland", "Czech Republic", "Ukraine",
  "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Afghanistan", "Iraq", "Iran", "UAE", "Saudi Arabia", "Qatar",
  "Oman", "Kuwait", "Israel", "Singapore", "South Korea", "North Korea", "Morocco", "Nigeria", "Kenya", "Ethiopia",
  "Sudan", "Algeria", "Tunisia", "Venezuela", "Cuba", "Panama", "Uruguay", "Paraguay", "Bolivia", "Iceland",
  "Luxembourg", "Lithuania", "Latvia", "Estonia", "Slovakia", "Slovenia", "Croatia", "Serbia", "Romania", "Hungary",
  "Bulgaria", "Georgia", "Armenia", "Azerbaijan", "Jordan", "Lebanon", "Yemen", "Syria", "Myanmar", "Cambodia",
  "Laos", "Mongolia", "Kazakhstan", "Uzbekistan", "Tajikistan", "Turkmenistan", "Bhutan", "Maldives", "Zambia", "Zimbabwe"
];


const stateOptions = {
  India: ["Maharashtra", "Uttar Pradesh", "West Bengal"],
  USA: ["California", "New York", "Texas"],
  Canada: ["Ontario", "Quebec", "British Columbia"],
  Australia: ["New South Wales", "Victoria", "Queensland"],
  Germany: ["Bavaria", "North Rhine-Westphalia", "Berlin"],
  France: ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Minas Gerais"],
  UK: ["England", "Scotland", "Wales"],
  Japan: ["Tokyo", "Osaka", "Kyoto"],
  China: ["Shanghai", "Beijing", "Guangdong"],
  Russia: ["Moscow Oblast", "Saint Petersburg", "Sverdlovsk Oblast"],
  Italy: ["Lombardy", "Lazio", "Campania"],
  Spain: ["Madrid", "Catalonia", "Andalusia"],
  Mexico: ["Mexico City", "Jalisco", "Nuevo León"],
  Argentina: ["Buenos Aires", "Cordoba", "Santa Fe"],
  Netherlands: ["North Holland", "South Holland", "Utrecht"],
  Turkey: ["Istanbul", "Ankara", "Izmir"],
  Indonesia: ["Jakarta", "West Java", "East Java"],
  Egypt: ["Cairo", "Giza", "Alexandria"],
  Sweden: ["Stockholm", "Gothenburg", "Malmö"],
  Norway: ["Oslo", "Bergen", "Trondheim"],
  Switzerland: ["Zurich", "Geneva", "Bern"],
  Belgium: ["Brussels", "Antwerp", "Ghent"],
  Denmark: ["Copenhagen", "Aarhus", "Odense"],
  Finland: ["Helsinki", "Tampere", "Turku"],
  Poland: ["Warsaw", "Krakow", "Wroclaw"],
  Thailand: ["Bangkok", "Chiang Mai", "Phuket"],
  Malaysia: ["Kuala Lumpur", "Selangor", "Johor"],
  Vietnam: ["Ho Chi Minh City", "Hanoi", "Da Nang"],
  Philippines: ["Manila", "Cebu", "Davao"],
  Colombia: ["Bogotá", "Medellín", "Cali"],
  Chile: ["Santiago", "Valparaíso", "Concepción"],
  Peru: ["Lima", "Cusco", "Arequipa"],
  Greece: ["Athens", "Thessaloniki", "Crete"],
  Portugal: ["Lisbon", "Porto", "Faro"],
  Ireland: ["Dublin", "Cork", "Galway"],
  Ukraine: ["Kyiv", "Kharkiv", "Odesa"],
  Pakistan: ["Karachi", "Lahore", "Islamabad"],
  Bangladesh: ["Dhaka", "Chittagong", "Khulna"],
  Nepal: ["Kathmandu", "Pokhara", "Lalitpur"],
  Afghanistan: ["Kabul", "Kandahar", "Herat"],
  Iraq: ["Baghdad", "Basra", "Mosul"],
  Iran: ["Tehran", "Mashhad", "Isfahan"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah"],
  Qatar: ["Doha", "Al Rayyan", "Umm Salal Municipality"],
  Oman: ["Muscat", "Salalah", "Sohar"],
  Kuwait: ["Kuwait City", "Hawalli", "Farwaniya"],
  Israel: ["Jerusalem", "Tel Aviv", "Haifa"],
  Singapore: ["Central Region", "North-East Region", "West Region"],
  Morocco: ["Casablanca", "Rabat", "Marrakech"],
  Nigeria: ["Lagos", "Abuja", "Kano"],
  Kenya: ["Nairobi", "Mombasa", "Kisumu"],
  Ethiopia: ["Addis Ababa", "Dire Dawa", "Mekelle"],
  Sudan: ["Khartoum", "Omdurman", "Port Sudan"],
  Algeria: ["Algiers", "Oran", "Constantine"],
  Tunisia: ["Tunis", "Sfax", "Sousse"],
  Venezuela: ["Caracas", "Maracaibo", "Valencia"],
  Cuba: ["Havana", "Santiago de Cuba", "Camagüey"],
  Panama: ["Panama City", "Colón", "David"],
  Uruguay: ["Montevideo", "Salto", "Paysandú"],
  Paraguay: ["Asunción", "Ciudad del Este", "Encarnación"],
  Bolivia: ["La Paz", "Santa Cruz de la Sierra", "Cochabamba"],
  Iceland: ["Reykjavik", "Kopavogur", "Hafnarfjordur"],
  Luxembourg: ["Luxembourg City", "Esch-sur-Alzette", "Differdange"],
  Lithuania: ["Vilnius", "Kaunas", "Klaipėda"],
  Latvia: ["Riga", "Daugavpils", "Liepāja"],
  Estonia: ["Tallinn", "Tartu", "Narva"],
  Slovakia: ["Bratislava", "Košice", "Prešov"],
  Slovenia: ["Ljubljana", "Maribor", "Celje"],
  Croatia: ["Zagreb", "Split", "Rijeka"],
  Serbia: ["Belgrade", "Novi Sad", "Niš"],
  Romania: ["Bucharest", "Cluj-Napoca", "Timișoara"],
  Hungary: ["Budapest", "Debrecen", "Szeged"],
  Bulgaria: ["Sofia", "Plovdiv", "Varna"],
  Georgia: ["Tbilisi", "Batumi", "Kutaisi"],
  Armenia: ["Yerevan", "Gyumri", "Vanadzor"],
  Azerbaijan: ["Baku", "Ganja", "Sumqayit"],
  Jordan: ["Amman", "Zarqa", "Irbid"],
  Lebanon: ["Beirut", "Tripoli", "Sidon"],
  Yemen: ["Sana'a", "Aden", "Ta'izz"],
  Syria: ["Damascus", "Aleppo", "Homs"],
  Myanmar: ["Yangon", "Mandalay", "Naypyidaw"],
  Cambodia: ["Phnom Penh", "Siem Reap", "Battambang"],
  Laos: ["Vientiane", "Luang Prabang", "Savannakhet"],
  Mongolia: ["Ulaanbaatar", "Erdenet", "Darkhan"],
  Kazakhstan: ["Astana", "Almaty", "Shymkent"],
  Uzbekistan: ["Tashkent", "Samarkand", "Bukhara"],
  Tajikistan: ["Dushanbe", "Khujand", "Kulob"],
  Turkmenistan: ["Ashgabat", "Turkmenabat", "Dashoguz"],
  Bhutan: ["Thimphu", "Phuntsholing", "Punakha"],
  Maldives: ["Malé", "Addu City", "Fuvahmulah"],
  Zambia: ["Lusaka", "Ndola", "Kitwe"],
  Zimbabwe: ["Harare", "Bulawayo", "Chitungwiza"]
};


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

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOtpChange = (e) => {
    setOtpData(prev => ({ ...prev, otp: e.target.value }));
  };

  const sendOtp = async () => {
    if (!formData.mobileNumber.trim()) {
      alert('Please enter mobile number first.');
      return;
    }

    setOtpData(prev => ({ ...prev, isLoading: true }));

    try {
      await axios.post('https://backend-production-d773.up.railway.app/api/auth/send-otp', {
        mobileNumber: formData.mobileNumber
      });

      setOtpData(prev => ({
        ...prev,
        isOtpSent: true,
        isLoading: false
      }));
      setResendTimer(12); // Updated from 6 to 12
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
    alert('This number is already registered.');
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
        mobileNumber: formData.mobileNumber,
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
      alert('Please verify your mobile number with OTP first.');
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

        {!otpData.isOtpVerified && (
          <form className="w-full max-w-xl space-y-4">
            <p className="text-left text-sm text-gray-700 font-medium">Verify your mobile number</p>
            <div className="flex gap-2 items-stretch">
              <input
                type="text"
                placeholder="Mobile Number"
                className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={sendOtp}
                disabled={otpData.isLoading || otpData.isOtpVerified || resendTimer > 0}
                className={`px-4 rounded-md font-semibold transition duration-300 ${
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
                onChange={handleChange}
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
    onChange={handleSelectChange}
  >
    <option value="">Select Country</option>
    {countryOptions.map((country) => (
      <option key={country} value={country}>{country}</option>
    ))}
  </select>

  <select
    name="state"
    className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
    value={formData.state}
    onChange={handleSelectChange}
    disabled={!formData.country || !stateOptions[formData.country]}
  >
    <option value="">Select State</option>
    {(stateOptions[formData.country] || []).map((state) => (
      <option key={state} value={state}>{state}</option>
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