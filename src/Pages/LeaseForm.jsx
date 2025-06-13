import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeaseForm = () => {
  const [containers, setContainers] = useState([{}]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => setShowModal(!showModal);
  const addContainer = () => setContainers([...containers, {}]);
  const removeContainer = (index) => {
    const updated = [...containers];
    updated.splice(index, 1);
    setContainers(updated);
  };

  return (
    <div className="min-h-screen grid grid-cols-[60%_40%] relative">
      {/* Left Section */}
      <div className="bg-amber-700 relative">
        <img
          src="/src/images/add5ce280c52659353300a1f07d05e4e79e2fbff.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-10 left-9 text-left px-4 z-10">
          <p className="text-white text-sm font-medium" style={{ textShadow: "-1px -1px 0 #FF8901, 1px -1px 0 #FF8901, -1px 1px 0 #FF8901, 1px 1px 0 #FF8901" }}>
            Welcome to
          </p>
          <h1 className="text-[35px] font-bold text-white" style={{ textShadow: "-1px -1px 0 #FF8901, 1px -1px 0 #FF8901, -1px 1px 0 #FF8901, 1px 1px 0 #FF8901" }}>
            NCON Containers
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-orange-400 pb-2 mb-6">
          Requirements Form
        </h2>

        {/* Dropdown Tabs */}
        <div className="grid grid-cols-[70%_30%] gap-2 mb-6">
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value="Lease"
            onChange={(e) => {
              const selected = e.target.value;
              if (selected === "One-Way") navigate("/one-way");
              if (selected === "Trade") navigate("/trade");
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

        {/* Container Entries */}
        {containers.map((_, i) => (
          <fieldset key={i} className="rounded-md p-4 mb-6 relative">
            {i > 0 && (
              <button
                onClick={() => removeContainer(i)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
            )}
            <legend className="text-md font-semibold text-gray-700 mb-4">
              Container Specifications
            </legend>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Container Quantity: <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Enter Quantity" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm mb-1">Container Type: <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>Select Type</option>
                  <option>20 HC</option>
                  <option>40 HC</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-[30%_30%_40%] gap-4">
              <div>
                <label className="block text-sm mb-1">Container Condition: <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>Select Condition</option>
                  <option>WWT</option>
                  <option>Brand New</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Leasing period (in Days): <span className="text-red-500">*</span></label>
                <input type="number" placeholder="Days" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm mb-1">Per Diem Charge: <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input type="text" placeholder="Per Diem" className="w-full border border-gray-300 p-2 rounded-md pr-12" />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-500">| USD</span>
                </div>
              </div>
            </div>
          </fieldset>
        ))}

        <button onClick={addContainer} className="text-orange-600 font-medium text-sm mb-6">+ Add More</button>

        {/* Location Details */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Location Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">On-Hire Location: <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <input type="text" placeholder="Location" className="flex-grow border border-gray-300 p-2 rounded-md" />
                <button onClick={toggleModal} className="border border-orange-500 text-orange-500 px-2 rounded hover:bg-orange-50 text-sm">
                  + Add Location
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Off-Hire Location: <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <input type="text" placeholder="Location" className="flex-grow border border-gray-300 p-2 rounded-md" />
                <button onClick={toggleModal} className="border border-orange-500 text-orange-500 px-2 rounded hover:bg-orange-50 text-sm">
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
            <input type="email" placeholder="Email ID" className="w-full border border-gray-300 p-2 rounded-md" />
            <input type="text" placeholder="Mobile No." className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
        </div>

        {/* Submit */}
        <button className="bg-orange-500 text-white text-center w-48 py-3 rounded-full font-semibold hover:bg-orange-600 mx-auto block">
          Proceed
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-[500px] max-h-[80vh] p-6 overflow-y-auto border-4 border-blue-300">
              <h3 className="font-semibold text-gray-800 text-lg mb-4">Location Selector Popup Modal</h3>
              <input type="text" placeholder="Select by Port, Country or Region Name" className="w-full border border-gray-300 rounded-md p-2 mb-4" />
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
              <button onClick={toggleModal} className="bg-orange-500 text-white py-2 px-6 mt-4 rounded-md hover:bg-orange-600 float-right">
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