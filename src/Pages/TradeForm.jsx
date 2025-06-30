// src/components/TradeForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import mainImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';

const TradeForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedFromQuery = params.get('selected');

  const [form, setForm] = useState({
    quantity: '',
    containerType: '',
    condition: '',
    pickUpLocation: '',
    email: '',
    mobile: '',
    notes: '',
    withCSCRevalidation: false,
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedFromQuery || "sell");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedFromQuery) setSelectedOption(selectedFromQuery);
  }, [selectedFromQuery]);

  const toggleModal = () => setShowModal(!showModal);

  const handleFormChange = (e) => {
    const selected = e.target.value;
    switch (selected) {
      case 'One-Way':
        navigate('/one-way');
        break;
      case 'Lease':
        navigate('/lease');
        break;
      case 'Trade':
        navigate('/trade');
        break;
      case 'Empty Repo':
        navigate('/empty-repo');
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
        withCSCRevalidation: form.withCSCRevalidation,
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
        email: '',
        mobile: '',
        notes: '',
        withCSCRevalidation: false,
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
      {/* Left Side - Background Image and Welcome Text */}
      <div className="bg-amber-700 relative h-96 md:h-auto">
        <img
          src={mainImage}
          alt="Main Example"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-10 left-6 text-left px-4 z-10">
          <div className="w-full mb-8">
            <p
              className="tracking-wider"
              style={{
                fontFamily: 'Saira, sans-serif',
                fontWeight: '500',
                fontSize: '15.3621px',
                lineHeight: '109%',
                color: 'white',
                textShadow: `
                  -1px -1px 0 #FF8901,
                  1px -1px 0 #FF8901,
                  -1px 1px 0 #FF8901,
                  1px 1px 0 #FF8901
                `,
              }}
            >
              Welcome to
            </p>
            <div className="w-full pb-2 mt-1">
              <h1
                className="text-2xl leading-normal font-saira font-normal"
                style={{
                  fontFamily: 'Saira, sans-serif',
                  fontSize: '35.3621px',
                  color: '#ffffff',
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
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white relative p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-100">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-orange-400 pb-2 border-w-fit">
            Requirements Form
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-2 mb-5">
            <select
              className="col-span-1 w-full border border-gray-300 rounded-md p-2"
              defaultValue="Trade"
              onChange={handleFormChange}
            >
              <option>One-Way</option>
              <option>Lease</option>
              <option>Trade</option>
              <option>Empty Repo</option>
            </select>

            <button
              type="button"
              className={
                selectedOption === "buy"
                  ? "bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                  : "border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50"
              }
              onClick={() => setSelectedOption("buy")}
            >
              Buy Containers
            </button>
            <button
              type="button"
              className={
                selectedOption === "sell"
                  ? "bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                  : "border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50"
              }
              onClick={() => setSelectedOption("sell")}
            >
              Sell Containers
            </button>
          </div>

          {/* Container Specifications */}
          <div className="rounded-md p-4 mb-6 border border-black-400">
            <h3 className="font-semibold text-lg text-gray-700 mb-4">Container Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
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
                <label className="block text-sm font-medium text-gray-700 mb-1">With CSC Revalidation:</label>
                <div className="flex gap-2 mt-1">
                  <label>
                    <input
                      type="checkbox"
                      name="withCSCRevalidation"
                      checked={form.withCSCRevalidation}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Drop-off and Pick-Up */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Drop-off and Pick-Up</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location: *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="pickUpLocation"
                    value={form.pickUpLocation}
                    onChange={handleChange}
                    placeholder="Location"
                    className="flex-grow border border-gray-300 p-2 rounded-md"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="border border-orange-500 text-orange-500 px-2 rounded hover:bg-orange-50 text-sm"
                  >
                    + Add Location
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Contact Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email ID: *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Select Email ID"
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

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-[500px] max-h-[80vh] p-6 overflow-y-auto border-4 border-blue-300">
              <h3 className="font-semibold text-gray-800 text-lg mb-4">Location Selector Popup Modal</h3>
              <input
                type="text"
                placeholder="Select by Port, Country or Region Name"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
              />
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-start gap-4 p-2 border rounded-md shadow-sm">
                    <div className="text-orange-500 text-xl">⚓</div>
                    <div className="flex-grow">
                      <p className="font-semibold">Port Name</p>
                      <p className="text-sm text-gray-500">
                        Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <input type="checkbox" className="mt-2" />
                  </div>
                ))}
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
    </div>
  );
};

export default TradeForm;