import React from 'react';

function Header() {
  return (
    <header>
      <div className="bg-white border-b border-gray-200 py-2 text-left">
        <div className="container mx-auto px-4">
          <span className="text-sm text-black-600 mr-4">Email: example@example.com</span>
          <span className="text-sm text-black-600">Contact: +1 123 456 7890</span>
        </div>
      </div>
      <div className="bg-white py-4 border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
        <img src='' alt="Logo" className="h-8 w-auto mr-4" />
          <div className="flex items-center">
            <nav>
              <ul className="flex items-center space-x-6 text-xl font-semibold ">
                <li>
                <a href="/" className="text-black-600 hover:text-orange-400 hover:underline">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-black-600 hover:text-orange-400 hover:underline">About Us</a>
                </li>
                <li>
                  <a href="/products" className="text-black-600 hover:text-orange-400 hover:underline">Product</a>
                </li>
                <li>
                  <a href="/resources" className="text-black-600 hover:text-orange-400 hover:underline">Resources</a>
                </li>
                <li>
                  <a href="/contactUs" className="text-black-600 hover:text-orange-400 hover:underline">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="text-black-600 hover:text-orange-400 hover:underline">Feedback</a>
                </li>
              </ul>
            </nav>
          </div>
          <button className="bg-orange-400 text-white font-bold py-1.5 px-5 rounded-xl">Brochure</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
