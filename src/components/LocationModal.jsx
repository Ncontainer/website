// components/LocationModal.jsx
import React from 'react';


const LocationModal = ({ visible, onClose, onSelect, ports, selectedId, search, setSearch }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Select by Port, Country or Region Name"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="max-h-[350px] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-3">Choose Locations</h3>
          {ports.map((port) => (
            <div
              key={port._id}
              className={`flex items-start gap-3 border-b py-3 cursor-pointer ${selectedId === port._id ? 'bg-orange-50' : ''}`}
              onClick={() => onSelect(port._id)}
            >
              <div className="text-orange-500 mt-1">
                {port.type === 'port' ? '⚓' : '🏢'}
              </div>
              <div className="flex-grow">
                <p className="font-semibold">{port.name}</p>
                <p className="text-sm text-gray-500">Address: Lorem ipsum dolor sit amet...</p>
              </div>
              <input
                type="checkbox"
                checked={selectedId === port._id}
                onChange={() => onSelect(port._id)}
                className="mt-2"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;