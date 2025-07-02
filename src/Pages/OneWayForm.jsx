import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import heroImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';
import axios from 'axios';

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
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedFromQuery || "use");
  const [ports, setPorts] = useState([]);
  const [portsLoading, setPortsLoading] = useState(false);
  const [portsSearch, setPortsSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedFromQuery) setSelectedOption(selectedFromQuery);
  }, [selectedFromQuery]);

  useEffect(() => {
    const fetchPorts = async () => {
      setPortsLoading(true);
      try {
        const res = await axios.get(
          `https://backend-production-d773.up.railway.app/api/ports?page=1&limit=50&search=${portsSearch}`
        );
        setPorts(res.data?.data || []);
      } catch (err) {
        setPorts([]);
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
  const getLocationObj = (locationStr) => ({
    portName: locationStr || "Unknown",
    portCode: "UNK",
    country: "Unknown",
    region: "Unknown"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://backend-production-d773.up.railway.app/api/lead-request', {
        requestType: "buy",
        tradeType: "trade",
        tradeAction: "buy_containers",
        containerType: form.containerType,
        purposeOfContainer: "export",
        condition: form.condition,
        withCSCRevalidation: true,
        locations: [
          getLocationObj(form.pickUpLocation)
        ],
        email: form.email,
        mobile: form.mobile,
        quantity: Number(form.quantity),
        urgency: "high",
        notes: form.notes
      });
      alert('Request submitted successfully!');
      setForm({
        quantity: '',
        containerType: '',
        condition: '',
        pickUpLocation: '',
        dropOffLocation: '',
        email: '',
        mobile: '',
        notes: ''
      });
    } catch (error) {
      if (error.response) {
        console.log("API Error Response:", error.response.data);
        alert(
          'Failed to submit request: ' +
          (error.response.data?.message || JSON.stringify(error.response.data))
        );
      } else {
        console.log("Error:", error.message);
        alert('Failed to submit request. Please try again.');
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
            <option value="Empty Repo">Empty Repo</option>
          </select>

          <button
            type="button"
            className={selectedOption === "use"
              ? "bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              : "border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50"}
            onClick={() => setSelectedOption("use")}
          >
            Use Containers
          </button>
          <button
            type="button"
            className={selectedOption === "supply"
              ? "bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              : "border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50"}
            onClick={() => setSelectedOption("supply")}
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
            </div>
          </fieldset>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Drop-off and Pick-Up</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location: *</label>
                <select
                  name="pickUpLocation"
                  value={form.pickUpLocation}
                  onChange={handleChange}
                  className="flex-grow border border-gray-300 p-2 rounded-md"
                  required
                >
                  <option value="">Select Pick-up Location</option>
                  {ports.map(port => (
                    <option key={port._id} value={port._id}>
                      {port.name} {port.code ? `(${port.code})` : ""} {port.countryName ? `- ${port.countryName}` : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location: *</label>
                <select
                  name="dropOffLocation"
                  value={form.dropOffLocation}
                  onChange={handleChange}
                  className="flex-grow border border-gray-300 p-2 rounded-md"
                  required
                >
                  <option value="">Select Drop-off Location</option>
                  {ports.map(port => (
                    <option key={port._id} value={port._id}>
                      {port.name} {port.code ? `(${port.code})` : ""} {port.countryName ? `- ${port.countryName}` : ""}
                    </option>
                  ))}
                </select>
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
      </div>
    </div>
  );
};

export default OneWayForm;
