import React from 'react';

const OurOptions = () => {
  const orangeColor = '#ff8901';

  return (
    <div className=" py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8" style={{ width: '85%', margin: '0 auto' }}>
        <h2 className="text-4xl  text-gray-900 text-center mb-8">
          Our Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Option 1: One Way Movement */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: 'rgba(255, 137, 1, 0.1)' /* Light orange */, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke={orangeColor}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3-3m0 6l-3-3m7 11a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl  text-gray-800 mb-2">
              One Way Movement
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-2">
              <button
                className="bg-transparent hover:bg-orange-500 text-orange-500  hover:text-white py-2 px-10 border border-orange-500 hover:border-transparent rounded-3xl"
                style={{ color: orangeColor, borderColor: orangeColor, '--tw-bg-opacity': 0.1 }} // Inline styles for orange
              >
                Use
              </button>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white  py-2 px-8 rounded-3xl"
                style={{ backgroundColor: orangeColor }} // Inline style for orange
              >
                Supply
              </button>
            </div>
          </div>

          {/* Option 2: Click to Trade */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
             <div className="w-12 h-12 rounded-full" style={{ backgroundColor: 'rgba(255, 137, 1, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke={orangeColor}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl  text-gray-800 mb-2">
              Click to Trade
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-2">
              <button
                className="bg-transparent hover:bg-orange-500 text-orange-500  hover:text-white py-2 px-11 border border-orange-500 hover:border-transparent rounded-3xl"
                 style={{ color: orangeColor, borderColor: orangeColor, '--tw-bg-opacity': 0.1 }} // Inline styles for orange
              >
                Buy
              </button>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white  py-2 px-11 rounded-3xl"
                style={{ backgroundColor: orangeColor }} // Inline style for orange
              >
                Sell
              </button>
            </div>
          </div>

          {/* Option 3: Lease with Ease */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: 'rgba(255, 137, 1, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke={orangeColor}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2-2H9m2-2h2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl  text-gray-800 mb-2">
              Lease with Ease
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-2">
              <button
                className="bg-transparent hover:bg-orange-500 text-orange-500  hover:text-white py-2 px-6 border border-orange-500 hover:border-transparent rounded-3xl"
                style={{ color: orangeColor, borderColor: orangeColor, '--tw-bg-opacity': 0.1 }} // Inline styles for orange
              >
                Domestic
              </button>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white  py-2 px-10 rounded-3xl"
                style={{ backgroundColor: orangeColor }} // Inline style for orange
              >
                EXIM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOptions;
