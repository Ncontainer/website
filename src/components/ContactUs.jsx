import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import bg from "../images/contactusbg.png"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Topic 1',
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

  const handleTopicSelect = (topic) => {
    setFormData(prev => ({
      ...prev,
      topic
    }));
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

  const handleSubmit = () => {
    if (validateForm()) {
      // Here you would typically send the data to your server
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'Topic 1',
        message: ''
      });
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm sm:text-base">Our Phone</p>
                  <p className="font-medium  text-[0.8rem] sm:text-base">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm sm:text-base">Our Email</p>
                  <p className="font-medium text-[0.8rem] sm:text-base  ">containers@shippingcompany.com</p>
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
                
                <div className="mb-6">
                  <label className="text-white/80 block mb-2">Topic*</label>
                  <div className="flex flex-wrap gap-2">
                    {['Topic 1', 'Topic 2', 'Topic 3'].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => handleTopicSelect(topic)}
                        className={`py-2 px-4 rounded-full transition-all ${
                          formData.topic === topic 
                            ? 'bg-gray-100/20 text-white' 
                            : 'bg-gray-100/10 text-white/70 hover:bg-gray-100/15'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
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