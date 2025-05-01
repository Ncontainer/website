import { Eye, Rocket } from "lucide-react";
import hero3 from "../images/hero3.png"

const LogisticsOverview = () => {
  return (
    <section className="w-full mt-24 bg-white">
      <div className="container w-[90%] mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left side - Image (exactly like reference) */}
          <div className="w-full md:w-2/4">
            <img 
              src={hero3}
              alt="Container ship with colorful shipping containers" 
              className="w-full h-[90%] object-cover rounded-lg"
            />
          </div>
          
          {/* Right side - Text content */}
          <div className="w-fully md:w-1/2 flex flex-col justify-center space-y-24">
            <div>
              <h3 className="text-[#ff8901] font-medium uppercase mb-2 text-2xl">OVERVIEW</h3>
              <h2 className="text-7xl font-semibold mb-4">Logistics Beyond Expectation</h2>
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 ">
              {/* Vision Section */}
              <div className="space-y-3 border-r border-gray-300">
                <div className="flex items-center gap-2">
                  <Eye className="text-[#ff8901]" size={25} />
                  <h3 className="text-3xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
              
              {/* Mission Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Rocket className="text-[#ff8901]" size={25} />
                  <h3 className="text-3xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            
            <div>
              <button className="px-6 py-2 mt-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
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