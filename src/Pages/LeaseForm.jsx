import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leaseImage from '../images/add5ce280c52659353300a1f07d05e4e79e2fbff.png';
import axios from 'axios'; // <-- Add axios import

const LeaseForm = () => {
  const [containers, setContainers] = useState([{
    quantity: '',
    containerType: '',
    condition: '',
    leasingPeriod: '',
    perDiem: ''
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
  const navigate = useNavigate();

  const toggleModal = () => setShowModal(!showModal);
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
      // Send one API call per container entry
      for (const c of containers) {
        await axios.post('https://backend-production-d773.up.railway.app/api/lead-request', {
          requestType: "buy", // <-- FIXED: must be "buy" or "sell"
          tradeType: "trade", // <-- FIXED: match your other forms
          tradeAction: "buy_containers", // <-- FIXED: must be "buy_containers" or "sell_containers"
          containerType: c.containerType,
          purposeOfContainer: "export",
          condition: c.condition,
          leasingPeriod: c.leasingPeriod,
          perDiem: c.perDiem,
          withCSCRevalidation: false,
          locations: [
            getLocationObj(onHireLocation)
          ],
          email: email,
          mobile: mobile,
          quantity: Number(c.quantity),
          urgency: "high",
          notes: `Off-hire location: ${offHireLocation}`
        });
      }
      alert('Lease request(s) submitted successfully!');
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
    } catch (error) {
      if (error.response) {
        console.log("API Error Response:", error.response.data);
        alert(
          'Failed to submit lease request: ' +
          (error.response.data?.message || JSON.stringify(error.response.data))
        );
      } else {
        console.log("Error:", error.message);
        alert('Failed to submit lease request. Please try again.');
      }
    }
    setLoading(false);
  };

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
            <option value="One-Way">One-Way</option>
            <option value="Trade">Trade</option>
            <option value="Lease">Lease</option>
          </select>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Use Containers
          </button>
        </div>

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
                <select
                  className="flex-grow border border-gray-300 p-2 rounded-md"
                  value={onHireLocation}
                  onChange={e => setOnHireLocation(e.target.value)}
                  required
                >
                  <option value="">Select On-Hire Location</option>
                  {ports.map(port => (
                    <option key={port._id} value={port._id}>
                      {port.name} {port.code ? `(${port.code})` : ""} {port.countryName ? `- ${port.countryName}` : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Off-Hire Location: <span className="text-red-500">*</span>
                </label>
                <select
                  className="flex-grow border border-gray-300 p-2 rounded-md"
                  value={offHireLocation}
                  onChange={e => setOffHireLocation(e.target.value)}
                  required
                >
                  <option value="">Select Off-Hire Location</option>
                  {ports.map(port => (
                    <option key={port._id} value={port._id}>
                      {port.name} {port.code ? `(${port.code})` : ""} {port.countryName ? `- ${port.countryName}` : ""}
                    </option>
                  ))}
                </select>
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
                  <div>Loading ports...</div>
                ) : (
                  ports.map((port, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-2 border rounded-md shadow-sm"
                    >
                      <div className="text-orange-500 text-xl">⚓</div>
                      <div className="flex-grow">
                        <p className="font-semibold">{port.portName}</p>
                        <p className="text-sm text-gray-500">
                          Address: {port.address || "N/A"}
                        </p>
                      </div>
                      <input type="checkbox" className="mt-2" />
                    </div>
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
    </div>
  );
};

export default LeaseForm;