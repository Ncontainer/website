import { useNavigate } from "react-router-dom";
import img from '../images/04.png';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/our-products");
  };

  return (
    <section className="w-full pt-6 sm:pt-0 sm:h-[42rem] h-auto relative overflow-visible">
      {/* Orange background */}
      <div className="absolute inset-0 bg-secondary z-0">
        {/* Diagonal lines for texture */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-1 bg-white"
              style={{
                left: `${i * 5}%`,
                transform: 'rotate(15deg) scale(2)',
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left text content */}
          <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 pr-0 md:pr-6 z-10">
            <h3 className="uppercase text-sm md:text-base font-medium tracking-wider mb-2 md:mb-4">
              GET STARTED
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
              Our Space, Your Way, Always
            </h2>
            <p className="mb-6 md:mb-8 max-w-lg opacity-90 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button
                onClick={handleCTAClick}
                className="px-6 sm:px-8 py-2 bg-white text-secondary font-medium text-sm sm:text-base rounded-full hover:bg-orange-50 transition-colors"
              >
                Explore Our Products
              </button>
            </div>
          </div>

          {/* Right container image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-20 mt-[-2rem] mb-[-2rem]">
            <div className="relative w-full md:w-auto">
              <div className="transform scale-[1.6] md:scale-[1.7] lg:scale-[1.8] translate-y-0 md:translate-x-8 lg:translate-x-12">
                <img
                  src={img}
                  alt="Stacked orange shipping containers with Hauler branding"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;