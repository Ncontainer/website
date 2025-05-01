import img from '../images/04.png'

const GetStarted = () => {
    return (
      <section className="w-full relative overflow-hidden">
        {/* Orange background */}
        <div className="absolute inset-0 bg-[#ff8901] z-0">
          {/* Diagonal lines for background texture */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="absolute h-full w-1 bg-white" 
                style={{ left: `${i * 5}%`, transform: 'rotate(15deg) scale(2)' }}
              ></div>
            ))}
          </div>
        </div>
  
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-8xl relative z-10">
          <div className="flex flex-col md:flex-row items-center py-16">
            {/* Left text content */}
            <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
              <h3 className="uppercase text-sm md:text-base font-medium tracking-wider mb-4">GET STARTED</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Space, Your Way, Always
              </h2>
              <p className="mb-8 max-w-lg opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-2 bg-white text-[#ff8901] font-medium rounded-full hover:bg-orange-50 transition-colors">
                  CTA BTN
                </button>
                <button className="px-8 py-2 bg-transparent text-white font-medium rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors">
                  CTA BTN
                </button>
              </div>
            </div>
            
            {/* Right container image */}
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Container image */}
                <img 
                  src={img} 
                  alt="Stacked orange shipping containers with Hauler branding" 
                  className="ove w-full h-auto scale-[2.2]"
                />
                
                {/* Hauler logo/text overlays */}
                
                <div className="absolute bottom-1/4 right-8 text-white text-5xl font-bold transform -rotate-12">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default GetStarted;