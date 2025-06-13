// src/components/TradeForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TradeForm = () => {
  const [locations, setLocations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%]">
      {/* Left Side - Background Image and Welcome Text */}
      <div className="bg-amber-700 relative h-96 md:h-auto">
        <img
          src="/src/images/add5ce280c52659353300a1f07d05e4e79e2fbff.png"
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

          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">
            Buy Containers
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Sell Containers
          </button>
        </div>

        {/* Container Specifications */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">Container Specifications</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Container Quantity: *</label>
              <input type="number" placeholder="Enter Quantity" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Container Type: *</label>
              <select className="w-full border border-gray-300 p-2 rounded-md">
                <option>Select type</option>
                <option>20 HC RF</option>
                <option>40 HC RF</option>
                <option>40 PW</option>
                <option>20 PW</option>
                <option>20 GP</option>
                <option>40 GP</option>
                <option>20 HC</option>
                <option>40 HC</option>
                <option>20 OT</option>
                <option>40 OT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Container Condition: *</label>
              <select className="w-full border border-gray-300 p-2 rounded-md">
                <option>Select Condition</option>
                <option>WWT</option>
                <option>Brand New (Direct Factory Trip/One Trip)</option>
                <option>As is</option>
                <option>Scrap</option>
                <option>Cargo Worthy</option>
                <option>IIICL</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">With CSC Revalidation:</label>
              <div className="flex gap-2 mt-1">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Yes</button>
                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">No</button>
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
                <input type="text" placeholder="Location" className="flex-grow border border-gray-300 p-2 rounded-md" />
                <button
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
              <input type="email" placeholder="Select Email ID" className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No.: *</label>
              <input type="text" placeholder="Enter Mobile No." className="w-full border border-gray-300 p-2 rounded-md" />
            </div>
          </div>
        </div>

        <button className="bg-orange-500 text-white text-center w-48 py-3 rounded-full font-semibold hover:bg-orange-600 mx-auto block">
          Proceed
        </button>

        {/* Bottom-right image on large screens */}
        <img
          src="/src/assets/images/small-corner-img.png"
          alt="Decorative"
          className="hidden md:block absolute bottom-4 right-4 w-24 h-24 object-contain"
        />

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