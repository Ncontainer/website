import { Leaf, Shield, Building2, Network } from "lucide-react";
import img1 from "../images/ourserviceimg.webp";

const OurServices = () => {
  return (
    <section className="w-full  bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-secondary font-large uppercase mb-2 text-2xl">OUR SERVICES</h3>
            <h2 className="text-4xl md:text-5xl">We help Transport your Future</h2>
          </div>
          <div className="w-full md:w-1/2 mt-9">
            <p className="text-gray-600">
         NCON manages the full lifecycle of your container logistics — from sourcing, 
         leasing, and transporting to eventual storage and retrieval — all through one 
        dependable partner.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column Services */}
          <div className="flex flex-row md:flex-col gap-8 md:gap-16 items-start md:items-end">
            <div className="flex flex-col md:items-end md:text-right">
              <div className="flex md:justify-end mb-2">
                <Leaf className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl mb-2">Buy & Sell <br />
Containers</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Procure or trade verified shipping containers with full 
documentation and delivery.
              </p>
            </div>
            <div className="flex flex-col md:items-end md:text-right">
              <div className="flex md:justify-end mb-2">
                <Building2 className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl mb-2">Lease Containers <br />
(Pan India)</h3>
              <p className="text-gray-600 text-sm md:text-base">
                 
Flexible domestic and international leasing with 
end-of-term pickup.
              </p>
            </div>
          </div>

          {/* Center Image (no video button) */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-full md:max-w-[420px] mx-auto aspect-[3/2] md:aspect-[3/4] bg-blue-900 rounded-lg overflow-hidden">
              <img 
                src={img1} 
                alt="Container ship aerial view" 
                className="w-full h-full object-cover"
              />
              {/* Removed the button completely */}
            </div>
          </div>

          {/* Right Column Services */}
          <div className="flex flex-row md:flex-col gap-8 md:gap-16 items-start md:items-end">
            <div className="flex flex-col">
              <div className="flex mb-2">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl mb-2">Container 
Transport</h3>
              <p className="text-gray-600 text-sm md:text-base">
              Door-to-port, port-to-door, and intra-state transport— 
by road or sea.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex justify-start mb-2">
                <Network className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl mb-2">Future Yard & <br />
Freight Stations</h3>
              <p className="text-gray-600 text-base">
                Dedicated container storage facilities across India 
and Globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices; 