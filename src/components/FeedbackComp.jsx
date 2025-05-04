import { useState } from "react";
import { Send, Phone, MapPin, MessageSquare } from "lucide-react";
import img from "../images/feedbackimg1.png";
import img2 from "../images/feedbackimg2.png";
import { Link } from "react-router-dom"; // Import Link

export default function FeedbackComp() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    bookingNumber: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <div className="w-full h-72 md:h-[450px] overflow-hidden">
        <img
          src={img}
          alt="Container Ship"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center mb-6 md:mb-8 pt-4 md:pt-8 px-4 md:px-0">
        <p className="text-orange-500 font-medium text-sm md:text-base">
          FEEDBACK
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mt-1 md:mt-2">
          Need Help?
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2 max-w-sm md:max-w-none mx-auto">
          Need Support? We're here to help you every step of the way.
        </p>
      </div>

      <div className="w-full my-8 bg-gray-50">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Section - Form with extra padding */}
          <div className="w-full lg:w-3/5 p-6 lg:pl-16 lg:pr-12">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-800 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="border rounded p-2 text-gray-700"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="companyName"
                    className="text-sm font-medium text-gray-800 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Company Name"
                    className="border rounded p-2 text-gray-700"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-800 mb-1"
                  >
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email ID"
                    className="border rounded p-2 text-gray-700"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="mobile"
                    className="text-sm font-medium text-gray-800 mb-1"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile No."
                    className="border rounded p-2 text-gray-700"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="bookingNumber"
                    className="text-sm font-medium text-gray-800 mb-1"
                  >
                    Booking or Enquiry Number
                  </label>
                  <input
                    type="text"
                    id="bookingNumber"
                    name="bookingNumber"
                    placeholder="Booking/Enquiry No."
                    className="border rounded p-2 text-gray-700"
                    value={formData.bookingNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-800 mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="border rounded p-2 text-gray-700"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="support">Support</option>
                    <option value="billing">Billing</option>
                    <option value="technical">Technical</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-800 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter message"
                  className="w-full border rounded p-2 text-gray-700"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex items-center mb-4">
                <div className="border p-2 flex items-center w-fit">
                  <input type="checkbox" id="recaptcha" className="mr-2" />
                  <label htmlFor="recaptcha" className="text-sm">
                    I'm not a Robot
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full w-full md:w-auto md:min-w-36 text-center"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Right Section - Contact Info with Background Image */}
          <div className="w-full lg:w-2/5 relative overflow-hidden">
            {/* Background container ship image with overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-gray-900 opacity-80 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-white p-8 h-full flex flex-col justify-center">
              <div className="mb-12">
                <h2 className="text-orange-500 font-medium text-xl mb-1">
                  Message us
                </h2>
                <p className="text-gray-300 mb-4">
                  Directly speak to our friendly Team
                </p>
                <div className="flex items-center mb-2">
                  <Send size={18} className="mr-2 text-white" />
                  <Link to="#" className="text-white hover:underline">
                    Shoot us an Email
                  </Link>
                </div>
                <div className="flex items-center">
                  <MessageSquare size={18} className="mr-2 text-white" />
                  <Link to="#" className="text-white hover:underline">
                    Message us on X
                  </Link>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-orange-500 font-medium text-xl mb-1">
                  Call us
                </h2>
                <p className="text-gray-300 mb-2">
                  Call our team Mon-Fri from 10 AM to 6 PM
                </p>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 text-white" />
                  <Link
                    to="tel:+919876543210"
                    className="text-white hover:underline"
                  >
                    +91 9876543210
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-orange-500 font-medium text-xl mb-1">
                  Visit us
                </h2>
                <p className="text-gray-300 mb-2">
                  Chat to us in-person at our Head Office
                </p>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-white" />
                  <Link to="#" className="text-white hover:underline">
                    100 Smith Street, Wellington - 78965, New Zealand
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}