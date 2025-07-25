import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import heroImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.webp';
import axios from 'axios';
import LocationModal from '../components/LocationModal';

const OneWayForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedFromQuery = params.get('selected');

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    
    quantity: '',
    containerType: '',
    condition: '',
    pickUpLocation: '',
    dropOffLocation: '',
    email: '',
    mobile: '',
    notes: '',
    expectedPrice: '',   // <-- Add this
    containerAgeing: ''
  });
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedFromQuery || "use");
  const [ports, setPorts] = useState([]);
  const [portsLoading, setPortsLoading] = useState(false);
  
  const [popup, setPopup] = useState({ visible: false, message: '', success: true });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

const [showPickupModal, setShowPickupModal] = useState(false);
const [showDropoffModal, setShowDropoffModal] = useState(false);
const [portsSearch, setPortsSearch] = useState("");

  // Define the base URL as a constant for easy modification
  const BASE_BACKEND_URL = 'https://cktgf93ztd.us-east-1.awsapprunner.com/';

  const [tradeAction, setTradeAction] = useState("buy_containers");
  // New state for requestType
  const [requestType, setRequestType] = useState("buy");

  useEffect(() => {
    if (selectedFromQuery) setSelectedOption(selectedFromQuery);
  }, [selectedFromQuery]);

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
        console.error('Failed to fetch ports:', err); // Replaced alert
      }
      setPortsLoading(false);
    };
    fetchPorts();
  }, [portsSearch]);

  const toggleModal = () => setShowModal(!showModal);

  const handleFormTypeChange = (e) => {
    const selected = e.target.value;
    if (selected === 'Lease') {
      navigate('/lease');
    } else if (selected === 'Trade') {
      navigate('/trade');
    } else if (selected === 'One-Way') {
      navigate('/one-way');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Example static location data for demonstration
 const getLocationObj = (locationId) => {
  const port = ports.find(p => p._id === locationId);
  return port ? {
  name: port.name,
  code: port.code || "UNK",
  country: port.countryName || "Unknown",
  region: port.region || "Unknown"
} : {
  name: "Unknown",
  code: "UNK",
  country: "Unknown",
  region: "Unknown"
};
};

const handleSubmit = async (e) => {

  e.preventDefault();
  setLoading(true);

  if (!form.pickUpLocation || !form.dropOffLocation) {
  setPopup({
    visible: true,
    message: "Please select both Pick-up and Drop-off locations.",
    success: false
  });
  setLoading(false);
  return;
}
  try {
   const onHirePort = ports.find(p => p._id === form.pickUpLocation);
const offHirePort = ports.find(p => p._id === form.dropOffLocation);

const onHireLocation = {
  portId: onHirePort?._id,
  portName: onHirePort?.name,
  locationType: "on_hire"
};

const offHireLocation = {
  portId: offHirePort?._id,
  portName: offHirePort?.name,
  locationType: "off_hire"
};

const response = await axios.post(`${BASE_BACKEND_URL}api/lead-request`, {
  requestType: requestType,
  tradeType: "one_way",
  tradeAction: tradeAction,
  containerType: form.containerType,
  purposeOfContainer: "export",
  condition: form.condition,
  expectedPrice: form.expectedPrice,
  containerAgeing: form.containerAgeing,
  withCSCRevalidation: true,
  locations: [onHireLocation, offHireLocation], // ✅ Now valid
  email: form.email,
  mobile: form.mobile,
  quantity: Number(form.quantity),
  urgency: "high",
  notes: form.notes
});
    setPopup({ visible: true, message: "Request submitted successfully!", success: true });
    setTimeout(() => setPopup({ visible: false, message: '', success: true }), 2500);
    setForm({
      quantity: '',
      containerType: '',
      condition: '',
      pickUpLocation: '',
      dropOffLocation: '',
      email: '',
      mobile: '',
      notes: '',
      expectedPrice: '',
      containerAgeing: ''
    });
  } catch (error) {
    if (error.response) {
      setPopup({ visible: true, message: error.response.data?.message || "Failed to submit request.", success: false });
    } else {
      setPopup({ visible: true, message: "Failed to submit request. Please try again.", success: false });
    }
  }
  setLoading(false);
};

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      {/* Left Image Section */}
      <div className="bg-amber-700 relative order-1 h-64 md:h-auto">
        <img
          src={heroImage}
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

      {/* Right Form Section */}
      <div className="bg-white relative p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-100 order-2">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-orange-400 pb-2 border-w-fit">
            Requirements Form
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-5">
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={handleFormTypeChange}
            defaultValue="One-Way"
          >
            <option value="One-Way">One-Way</option>
            <option value="Lease">Lease</option>
            <option value="Trade">Trade</option>
            
          </select>

          <button
            type="button"
            className={selectedOption === "use"
              ? "bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              : "border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50"}
            onClick={() => {
              setSelectedOption("use");
              setTradeAction("buy_containers");
              setRequestType("buy");
            }}
          >
            Use Containers
          </button>
          <button
            type="button"
            className={selectedOption === "supply"
              ? "bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              : "border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50"}
            onClick={() => {
              setSelectedOption("supply");
              setTradeAction("sell_containers");
              setRequestType("sell");
            }}
          >
            Supply Containers
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset className="rounded-md p-4 mb-6 border border-gray-400">
            <legend className="font-semibold text-lg  text-gray-700">Container Specifications</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Container Quantity: *</label>
                <input
                  type="number"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="Enter Quantity"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Container Type: *</label>
                <select
                  name="containerType"
                  value={form.containerType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                >
                  <option value="">Select type</option>
                  <option value="20ft Standard">20ft Standard</option>
                  <option value="20 HC RF">20 HC RF</option>
                  <option value="40 HC RF">40 HC RF</option>
                  <option value="40 PW">40 PW</option>
                  <option value="20 PW">20 PW</option>
                  <option value="20 GP">20 GP</option>
                  <option value="40 GP">40 GP</option>
                  <option value="20 HC">20 HC</option>
                  <option value="40 HC">40 HC</option>
                  <option value="20 OT">20 OT</option>
                  <option value="40 OT">40 OT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Container Condition: *</label>
                <select
                  name="condition"
                  value={form.condition}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="WWT">WWT</option>
                  <option value="brand_new_one_trip_factory">Brand New/One Trip/Factory</option>
                  <option value="as_is">As is</option>
                  <option value="scrap">Scrap</option>
                  <option value="cargo_worthy">Cargo Worthy</option>
                  <option value="IICL">IICL</option>
                </select>
              </div>
            <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Expected Price: <span className="text-red-500">*</span>
  </label>
  <select
    name="expectedPrice"
    value={form.expectedPrice}
    onChange={handleChange}
    className="w-full border border-gray-300 p-2 rounded-md"
    required
  >
    <option value="" disabled hidden>Select price</option>
    <option value="$4000">$4000</option>
    <option value="$6000">$6000</option>
    <option value="$8000">$8000</option>
  </select>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Container's Age: <span className="text-red-500">*</span>
  </label>
  <select
    name="containerAgeing"
    value={form.containerAgeing}
    onChange={handleChange}
    className="w-full border border-gray-300 p-2 rounded-md"
    required
  >
    <option value="" disabled hidden>select Age</option>
    <option value="Less than 5 years">Less than 5 years</option>
<option value="Less than 3 years">Less than 3 years</option>
<option value="Less than 2 years">Less than 2 years</option>
  </select>
</div>
            </div>
          </fieldset>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Drop-off and Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
                
                 {/* Pick-up Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location: *</label>
                <div
                  className="w-full border border-gray-300 p-2 rounded-md cursor-pointer bg-white"
                  onClick={() => setShowPickupModal(true)}
                >
                  {form.pickUpLocation ? ports.find(p => p._id === form.pickUpLocation)?.name : "Select Pick-up Location"}
                </div>
              </div>

              {/* Drop-off Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location: *</label>
                <div
                  className="w-full border border-gray-300 p-2 rounded-md cursor-pointer bg-white"
                  onClick={() => setShowDropoffModal(true)}
                >
                  {form.dropOffLocation ? ports.find(p => p._id === form.dropOffLocation)?.name : "Select Drop-off Location"}
                </div>
              </div>
              
              
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Contact Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email ID: *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email ID"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No.: *</label>
                <input
                  type="text"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile No."
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes:</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any additional notes"
              className="w-full border border-gray-300 p-2 rounded-md"
              rows={3}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 text-white text-center w-48 py-3 rounded-full font-semibold hover:bg-orange-600 mx-auto block"
          >
            {loading ? "Submitting..." : "Proceed"}
          </button>
        </form>

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
      <LocationModal
  visible={showPickupModal}
  onClose={() => setShowPickupModal(false)}
  onSelect={(id) => {
    setForm(prev => ({ ...prev, pickUpLocation: id }));
    setShowPickupModal(false);
  }}
  ports={ports}
  selectedId={form.pickUpLocation}
  search={portsSearch}
  setSearch={setPortsSearch}
/>

<LocationModal
  visible={showDropoffModal}
  onClose={() => setShowDropoffModal(false)}
  onSelect={(id) => {
    setForm(prev => ({ ...prev, dropOffLocation: id }));
    setShowDropoffModal(false);
  }}
  ports={ports}
  selectedId={form.dropOffLocation}
  search={portsSearch}
  setSearch={setPortsSearch}
/>
    </div>
  );
};

export default OneWayForm;
