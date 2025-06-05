import { Eye, Rocket } from "lucide-react";
import hero3 from "../images/hero3.png"

const LogisticsOverview = () => {
  return (
    <section className="w-full mt-12 bg-white">
      <div className="container w-[90%] mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left side - Image (hidden on mobile until after text) */}
          <div className="w-full md:w-2/4 order-2 md:order-1">
            <img 
              src={hero3}
              alt="Container ship with colorful shipping containers" 
              className="w-full h-[90%] object-cover rounded-lg"
            />
          </div>
          
          {/* Right side - Text content (shows first on mobile) */}
          <div className="w-fully md:w-1/2 flex flex-col justify-center space-y-6  order-1 md:order-2">
            <div >
              <h3 className="text-secondary uppercase mb-2 text-xl md:text-2xl">OVERVIEW</h3>
              <h2 className="text-4xl md:text-6xl mb-4">Logistics Beyond Expectation</h2>
              <p className="text-gray-600 text-base md:text-lg " style={{ fontFamily: 'Roboto'  }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
              {/* Vision and Mission - displayed in a row on both mobile and desktop */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6">
              {/* Vision Section */}
              <div className="space-y-2 md:space-y-3 border-r border-gray-300 pr-2 md:pr-4">
                <div className="flex items-center gap-1 md:gap-2">
                  <Eye className="text-secondary" size={20} />
                 
                </div>
                 <h3 className="text-xl md:text-3xl ">Our Vision</h3>
                <p className="text-gray-600 text-sm md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
              
              {/* Mission Section */}
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-1 md:gap-2">
                  <Rocket className="text-secondary" size={20} />
                  
                </div>
                <h3 className="text-xl md:text-3xl ">Our Mission</h3>
                <p className="text-gray-600 text-sm md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            
            <div>
              <button className="px-6 py-2 mt-2 sm:mt-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsOverview;