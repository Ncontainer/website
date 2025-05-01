import { Leaf, Shield, Building2, Network } from "lucide-react";
import img from "../images/hero3.png"

const OurServices = () => {
  return (
    <section className="w-full mt-24 bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-orange-500 font-medium uppercase mb-2">OUR SERVICES</h3>
            <h2 className="text-4xl md:text-5xl font-bold">We help Transport your Future</h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor
            </p>
          </div>
        </div>
        
        {/* Central Video/Image with Services Around It */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column Services */}
          <div className="flex flex-col gap-16">
            <div className="flex flex-col items-end text-right">
              <div className="flex justify-end mb-2">
                <Leaf className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Pioneering a Sustainable Future</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className="flex flex-col items-end text-right">
              <div className="flex justify-end mb-2">
                <Building2 className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Enriching Workspace</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          
          {/* Center Video/Image */}
          <div className="relative w-full aspect-[3/4] bg-blue-900 rounded-lg overflow-hidden">
            <img 
              src={img} 
              alt="Container ship aerial view" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <button className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-orange-500 border-b-8 border-b-transparent ml-1"></div>
              </button> */}
            </div>
          </div>
          
          {/* Right Column Services */}
          <div className="flex flex-col gap-16">
            <div className="flex flex-col items-start">
              <div className="flex justify-start mb-2">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Operational Efficiency</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex justify-start mb-2">
                <Network className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Phygital Edge</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;