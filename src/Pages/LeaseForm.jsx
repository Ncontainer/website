import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leaseImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.webp';
import axios from 'axios';

const LeaseForm = () => {
  const [containers, setContainers] = useState([{
    quantity: '',
    containerType: '',
    condition: '',
    leasingPeriod: '',
    perDiem: '',
     expectedPrice: '',         
  containerAge: '', 
  }]);
  const [showModal, setShowModal] = useState(false);
  const [onHireLocation, setOnHireLocation] = useState('');
  const [offHireLocation, setOffHireLocation] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [ports, setPorts] = useState([]);
  const [portsLoading, setPortsLoading] = useState(false);
  const [portsSearch, setPortsSearch] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // New state for success popup
  const navigate = useNavigate();

  const [activeField, setActiveField] = useState(''); // 'onHire' or 'offHire'

  // Define the base URL as a constant for easy modification
  const BASE_BACKEND_URL = 'https://cktgf93ztd.us-east-1.awsapprunner.com/';

  const [popup, setPopup] = useState({ visible: false, message: '', success: true });
  const [errorMessage, setErrorMessage] = useState(""); // Add this below showSuccessPopup

  const toggleModal = () => setShowModal(!showModal);

  const openLocationModal = (field) => {
  setActiveField(field);
  setShowModal(true);
   };

   const handleLocationSelect = (id) => {
  if (activeField === 'onHire') setOnHireLocation(id);
  if (activeField === 'offHire') setOffHireLocation(id);
  setShowModal(false);
};
  const addContainer = () => setContainers([...containers, {
    quantity: '',
    containerType: '',
    condition: '',
    leasingPeriod: '',
    perDiem: ''
  }]);
  const removeContainer = (index) => {
    const updated = [...containers];
    updated.splice(index, 1);
    setContainers(updated);
  };

  const handleContainerChange = (index, field, value) => {
    const updated = containers.map((c, i) =>
      i === index ? { ...c, [field]: value } : c
    );
    setContainers(updated);
  };
const getLocationObj = (locationId) => {
  const location = ports.find(p => p._id === locationId);
  return location
    ? {
        portName: location.portName || "Unknown",
        portCode: location.portCode || "UNK",
        country: location.countryName || "Unknown",
        region: location.region || "Unknown",
      }
    : {
        portName: "Unknown",
        portCode: "UNK",
        country: "Unknown",
        region: "Unknown",
      };
};


  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    for (const c of containers) {
      await axios.post(`${BASE_BACKEND_URL}api/lead-request`, {
  requestType: "buy",
  tradeType: "lease",
  tradeAction: "buy_containers",
  containerType: c.containerType,
  purposeOfContainer: "export",
  condition: c.condition,
  leasingPeriod: c.leasingPeriod,
  perDiem: c.perDiem,
  withCSCRevalidation: false,
  expectedPrice: c.expectedPrice, // ✅ Add this line
  containerAgeing: c.containerAge, // ✅ Add this line
  locations: [
    getLocationObj(onHireLocation),
    getLocationObj(offHireLocation)
  ],
  email: email,
  mobile: mobile,
  quantity: Number(c.quantity),
  urgency: "high",
  notes: `Lease request for ${c.quantity} ${c.containerType} containers. On-hire: ${onHireLocation}, Off-hire: ${offHireLocation}. Additional notes: ${c.notes || ''}`
});
    }

    setPopup({ visible: true, message: "Form submitted successfully.", success: true });
    setTimeout(() => setPopup({ visible: false, message: '', success: true }), 2500);

    setContainers([{
      quantity: '',
      containerType: '',
      condition: '',
      leasingPeriod: '',
      perDiem: ''
    }]);
    setOnHireLocation('');
    setOffHireLocation('');
    setEmail('');
    setMobile('');
  }  catch (error) {
  if (error.response) {
    console.error("API Error Response:", error.response.data);
    const message = error.response.data?.message || "Failed to submit lease request.";
    setErrorMessage(message);
  } else {
    console.error("Error:", error.message);
    setErrorMessage("Failed to submit lease request. Please try again.");
  }
}
  setLoading(false);
};

  useEffect(() => {
    const fetchPorts = async () => {
      setPortsLoading(true);
      try {
        const res = await axios.get(
          `${BASE_BACKEND_URL}api/ports?page=1&limit=50&search=${portsSearch}`
        );
        setPorts(res.data?.data || []);
      } catch (err) {
        setPorts([]);
        console.error('Failed to fetch ports:', err);
      }
      setPortsLoading(false);
    };
    fetchPorts();
  }, [portsSearch]);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
          {/* Left Image Section */}
         <div className="bg-amber-700 relative order-1 h-64 md:h-auto">
                 <img
                   src={leaseImage}
                   alt="Main Example"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute top-5 left-5 text-left px-4 z-10">
                   <p
                     className="tracking-wider text-sm"
                     style={{
                       fontFamily: 'Saira, sans-serif',
                       fontWeight: '500',
                       color: 'white',
                       textShadow:
                         '-1px -1px 0 #FF8901, 1px -1px 0 #FF8901, -1px 1px 0 #FF8901, 1px 1px 0 #FF8901',
                     }}
                   >
                     Welcome to
                   </p>
                   <h1
                     className="text-xl md:text-3xl leading-snug font-saira"
                     style={{
                       fontFamily: 'Saira, sans-serif',
                       color: '#ffffff',
                       textShadow:
                         '-1px -1px 0 #FF8901, 1px -1px 0 #FF8901, -1px 1px 0 #FF8901, 1px 1px 0 #FF8901',
                     }}
                   >
                     NCON Containers
                   </h1>
                 </div>
               </div>


      {/* Bottom (on mobile) / Right Section (on desktop) */}
      <div className="bg-white p-6 md:p-8 overflow-y-auto md:order-2 order-1">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-b-4 border-orange-400 pb-2 mb-6">
          Requirements Form
        </h2>

        {/* Dropdown Tabs */}
        <div className="grid grid-cols-[65%_35%] gap-2 mb-6">
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value="Lease"
            onChange={(e) => {
              const selected = e.target.value;
              if (selected === 'One-Way') navigate('/one-way');
              if (selected === 'Trade') navigate('/trade');
            }}
          >
            <option value="One-Way">Transportation</option>
            <option value="Trade">Buy & Sell</option>
            <option value="Lease">Lease</option>
          </select>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Use Containers
          </button>
        </div>
  Our leasing solutions are flexible—from one day to long-term, with no fixed duration. We also offer one-way leasing across PAN India. Lease costs are based on the number of containers and distance, ensuring transparent and fair pricing.
<br />
<br />
        <form onSubmit={handleSubmit}>
          {/* Container Entries */}
          {containers.map((c, i) => (
            <fieldset
              key={i}
              className="rounded-md p-4 mb-6 relative border border-gray-200"
            >
              {i > 0 && (
                <button
                  type="button"
                  onClick={() => removeContainer(i)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              )}
              <legend className="text-md font-semibold text-gray-700 mb-4">
                Container Specifications
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">
                    Container Quantity: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={c.quantity || ''}
                    onChange={e => handleContainerChange(i, 'quantity', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Container Type: <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={c.containerType || ''}
                    onChange={e => handleContainerChange(i, 'containerType', e.target.value)}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="20 HC">20 HC</option>
                    <option value="40 HC">40 HC</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Container Condition: <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={c.condition || ''}
                    onChange={e => handleContainerChange(i, 'condition', e.target.value)}
                    required
                  >
                    <option value="">Select Condition</option>
                    <option value="WWT">WWT</option>
                  </select>
                </div>
                 
                
                <div>
                  <label className="block text-sm mb-1">
                    Leasing period (in Days):{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Days"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={c.leasingPeriod || ''}
                    onChange={e => handleContainerChange(i, 'leasingPeriod', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Per Diem Charge: <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Per Diem"
                      className="w-full border border-gray-300 p-2 rounded-md pr-12"
                      value={c.perDiem || ''}
                      onChange={e => handleContainerChange(i, 'perDiem', e.target.value)}
                      required
                    />
                    <span className="absolute right-3 top-2.5 text-sm text-gray-500">
                      | USD
                    </span>
                    
                  </div>
                </div>
                <div>
  <label className="block text-sm mb-1">
    Expected Price: <span className="text-red-500">*</span>
  </label>
  <select
    className="w-full border border-gray-300 p-2 rounded-md"
    value={c.expectedPrice || ''}
    onChange={e => handleContainerChange(i, 'expectedPrice', e.target.value)}
    required
  >
    <option value="" disabled hidden>Select Price</option>
    <option value="$4000">$4000</option>
    <option value="$6000">$6000</option>
    <option value="$8000">$8000</option>
  </select>
</div>

<div>
  <label className="block text-sm mb-1">
    Container's Age: <span className="text-red-500">*</span>
  </label>
  <select
    className="w-full border border-gray-300 p-2 rounded-md"
    value={c.containerAge || ''}
    onChange={e => handleContainerChange(i, 'containerAge', e.target.value)}
    required
  >
    <option value="" disabled hidden>Select Age</option>
    <option value="Less than 5 years">Less than 5 years</option>
<option value="Less than 3 years">Less than 3 years</option>
<option value="Less than 2 years">Less than 2 years</option>
  </select>
</div>
                
              </div>
            </fieldset>
          ))}

          <button
            type="button"
            onClick={addContainer}
            className="text-orange-600 font-medium text-sm mb-6"
          >
            + Add More
          </button>

          {/* Location Details */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Location Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">
                  On-Hire Location: <span className="text-red-500">*</span>
                </label>
              {/* On-Hire */}

<button
  type="button"
  onClick={() => openLocationModal('onHire')}
  className="w-full border border-gray-300 p-2 rounded-md text-left"
>
  {onHireLocation
    ? ports.find(p => p._id === onHireLocation)?.portName || "Selected"
    : "Select On-Hire Location"}
</button>
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Off-Hire Location: <span className="text-red-500">*</span>
                </label>
      {/* Off-Hire */}
<button
  type="button"
  onClick={() => openLocationModal('offHire')}
  className="w-full border border-gray-300 p-2 rounded-md text-left"
>
  {offHireLocation
    ? ports.find(p => p._id === offHireLocation)?.portName || "Selected"
    : "Select Off-Hire Location"}
</button>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Contact Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email ID"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Mobile No."
                className="w-full border border-gray-300 p-2 rounded-md"
                value={mobile}
                onChange={e => setMobile(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 text-white text-center w-full sm:w-48 py-3 rounded-full font-semibold hover:bg-orange-600 mx-auto block"
          >
            {loading ? "Submitting..." : "Proceed"}
          </button>
        </form>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-[90%] sm:w-[500px] max-h-[80vh] p-6 overflow-y-auto border-4 border-blue-300">
              <h3 className="font-semibold text-gray-800 text-lg mb-4">
                Location Selector Popup Modal
              </h3>
              <input
                type="text"
                placeholder="Select by Port, Country or Region Name"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                value={portsSearch}
                onChange={e => setPortsSearch(e.target.value)}
              />
              <div className="space-y-4">
                {portsLoading ? (
  <div className="text-gray-500 text-sm">Loading ports...</div>
) : (
  ports.map((port, i) => (
    <button
      key={i}
      type="button"
      onClick={() => handleLocationSelect(port._id)}
      className={`w-full text-left p-4 border rounded-lg shadow-md hover:bg-orange-50 transition-all duration-200 ${
        (activeField === 'onHire' && onHireLocation === port._id) ||
        (activeField === 'offHire' && offHireLocation === port._id)
          ? 'border-orange-500 bg-orange-100'
          : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="text-orange-500 text-xl mt-1">⚓</div>
        <div className="flex-grow">
          <p className="font-semibold text-gray-800">{port.portName}</p>
          <p className="text-sm text-gray-500">Region: {port.region || "N/A"}</p>
          <p className="text-sm text-gray-500">Country: {port.countryName || "Unknown"}</p>
          <p className="text-sm text-gray-400">Code: {port.portCode || "N/A"}</p>
        </div>
      </div>
    </button>
  ))
)}
              </div>
              <button
                onClick={toggleModal}
                className="bg-orange-500 text-white py-2 px-6 mt-4 rounded-md hover:bg-orange-600 float-right"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

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
          <h2 className={`text-2xl font-bold ${popup.success ? 'text-orange-600' : 'text-red-600'}`}>
            {popup.success ? "Success!" : "Error!"}
          </h2>
          <p className="text-gray-600 leading-relaxed">{popup.message}</p>
        </div>
      </div>
    </div>
  </div>
)}
{errorMessage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white border-t-4 border-red-500 text-red-600 p-6 rounded-2xl shadow-2xl w-[90%] max-w-sm text-center animate-fade-in">
      <div className="text-4xl mb-2">⚠️</div>
      <h3 className="text-xl font-bold mb-2">Submission Failed</h3>
      <p className="text-sm text-gray-700">{errorMessage}</p>
      <button
        onClick={() => setErrorMessage("")}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Close
      </button>
    </div>
  </div>
)}
  
    </div>
  );
};

export default LeaseForm;