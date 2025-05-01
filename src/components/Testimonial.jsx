import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import img1 from "../images/06.png"
import user from "../images/defaultUser.png"

const Testimonial = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "John Doe",
      company: "Company name",
      avatar: user
    },
    {
      id: 2,
      text: "The logistics solutions provided exceeded our expectations. Their attention to detail and efficient handling of our cargo made a significant difference in our operations.",
      name: "Sarah Johnson",
      company: "Global Retail Inc.",
      avatar: user
    },
    {
      id: 3,
      text: "We have been working with this company for over 5 years now. Their consistency and reliability have made them our go-to logistics partner for all international shipments.",
      name: "Michael Chen",
      company: "Tech Innovations Ltd.",
      avatar: user
    },
    {
      id: 4,
      text: "Their custom logistics solutions helped us reduce delivery times by 40%. An outstanding partner that understands the unique needs of our business.",
      name: "Elena Rodriguez",
      company: "Fashion Forward Co.",
      avatar: user
    },
    {
      id: 5,
      text: "The team's expertise in handling complex supply chain challenges has been invaluable. They provide not just services but strategic logistics solutions.",
      name: "Robert Williams",
      company: "Industrial Systems Group",
      avatar: user
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500); // Half a second for transition
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className='w-full h-[800px] bg-gray-50 py-16'>

    
    <div className="h-40 py-12 px-4 md:px-8 lg:px-16 w-[95%] mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden">
            <img 
              src={img1} 
              alt="Shipping containers" 
              className="rounded-lg ml-36 w-[60%] object-cover object-center bg-slate-800"
            />
        </div>    
            
            {/* Testimonial Card */}
            <div className="absolute bottom-0 right-0 translate-y-1/3 lg:translate-y-1/4 translate-x-0 lg:-translate-x-16 z-10">
              <div 
                className={`bg-[#ff8901] p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md transform transition-opacity duration-500 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <p className="text-white text-sm md:text-base mb-6">
                  {testimonials[currentIndex].text}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonials[currentIndex].name}</p>
                      <p className="text-white/80 text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                  
                  <Quote className="text-white/80" size={36} />
                </div>
              </div>
            </div>
          </div>
        
        
        {/* Content Section */}
        <div className="w-full lg:w-1/2 pt-16 lg:pt-0">
          <p className="text-lg font-medium text-[#ff8901] mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Positive Reviews<br />from Our Customers
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>
          <button className="border border-gray-400 rounded-full px-8 py-3 text-gray-700 font-medium hover:bg-gray-100 transition">
            Read More
          </button>
        </div>
      </div>
      
      {/* Indicator Dots */}
      <div className="flex justify-center mt-8 lg:mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#ff8901] w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      </div>
  </section>
  );
};

export default Testimonial;