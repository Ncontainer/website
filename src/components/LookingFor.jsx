import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeftRight, FileText } from 'lucide-react';

const LookingFor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const features = [
    {
      icon: <ArrowRight color="#ff8901" size={24} />,
      title: "Transportation",
      description: "Efficient repositioning of containers from origin to destination — no returns, no hassle.",
      buttons: [
        { text: "Use", primary: false, route: "/one-way", option: "use" },
        // { text: "Supply", primary: true, route: "/one-way", option: "supply" }
      ]
    },
    {
      icon: <ArrowLeftRight color="#ff8901" size={24} />,
      title: "Buy & Sell Containers",
      description: " Trade containers with ease — verified listings, competitive pricing, and transparent processes.",
      buttons: [
        { text: "Buy", primary: false, route: "/trade", option: "buy" },
        { text: "Sell", primary: true, route: "/trade", option: "sell" }
      ]
    },
    {
      icon: <FileText color="#ff8901" size={24} />,
      title: "Flexible Leasing Options",
      description: "Lease containers for domestic or international needs with reliable pickup and return logistics.",
      buttons: [
        { text: "Use", primary: false, route: "/lease", option: "domestic" },
        // { text: "EXIM", primary: true, route: "/lease", option: "exim" }
      ]
    }
  ];

  // Handler to navigate with selected option as query param
  const handleButtonClick = (route, option) => {
    navigate(`${route}?selected=${option}`);
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-8 lg:px-16 w-[95%] mx-auto">
      <div className="text-center mb-10">
        <p className="text-lg font-medium text-secondary mb-2">LOOKING FOR</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl  text-black">
          Customized Logistics<br />Just for You
        </h2>
      </div>

      <div className={`grid grid-cols-1 ${isMobile ? "" : "md:grid-cols-3"} gap-8 w-full`}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-[#FAFAFA] p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col"
          >
            <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl  mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{feature.description}</p>
            <div className="flex mt-auto space-x-4">
              {feature.buttons.map((button, btnIndex) => (
                <button
                  key={btnIndex}
                  className={`px-6 py-2 rounded-full ${
                    button.primary
                      ? "bg-secondary text-white"
                      : "border border-secondary text-secondary"
                  } text-sm font-medium`}
                  onClick={() => handleButtonClick(button.route, button.option)}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookingFor;