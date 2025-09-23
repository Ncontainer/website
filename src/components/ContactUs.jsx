import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import bg from "../images/contactusbg.webp"
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await axios.post('https://cktgf93ztd.us-east-1.awsapprunner.com/api/contact', {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        });
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } catch (error) {
        alert('Failed to submit form. Please try again.');
      }
    }
  };

  return (
    <div className="w-[95%] m-auto sm:my-8 bg-white">
      <div className="w-[100%] mx-auto lg:mt-12 flex flex-col lg:flex-row">
        {/* Left Side - Contact Information */}
        <div className="w-full mt-4 lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md">
            <p className="text-secondary font-medium text-lg mb-4">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl  mb-6">
              Get in Touch<br />with Us
            </h2>
            <p className="text-gray-600 mb-10">
              Have a query about container leasing, transport, or trade? Our team is 
ready to support your business logistics needs with precision and 
professionalism. Reach out anytime, and we’ll get back to you 
promptly.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm sm:text-base">Our Phone</p>
                  <p className="font-medium  text-[0.8rem] sm:text-base">+91 98204 20924</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm sm:text-base">Our Email</p>
                  <p className="font-medium text-[0.8rem] sm:text-base  ">sales@nconcontainer.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 relative">
          <div className="h-full">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={bg}
                alt="Shipping vessel" 
                className="w-full h-full object-cover object-center rounded-md brightness-50"
              />
            </div>
            
            {/* Form */}
            <div className="relative z-10 p-6 md:p-10 h-full">
              <div className="h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-white/80 focus:border-white focus:outline-none ${errors.name ? 'border-red-400' : ''}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-white/80 focus:border-white focus:outline-none ${errors.email ? 'border-red-400' : ''}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-white/80 focus:border-white focus:outline-none ${errors.phone ? 'border-red-400' : ''}`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message*"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-white/80 focus:border-white focus:outline-none resize-none ${errors.message ? 'border-red-400' : ''}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full sm:max-w-full max-w-[300px] mx-auto bg-white text-black py-1 m:py-4 rounded-full font-medium hover:bg-white/90 transition-colors border-2 border-secondary"
                >
                  <span className="text-secondary font-semibold text-lg">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;