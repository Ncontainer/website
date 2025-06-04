
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowLeftRight, FileText } from 'lucide-react';

const LookingFor = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      title: "One Way Movement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttons: [
        { text: "Use", primary: false },
        { text: "Supply", primary: true }
      ]
    },
    {
      icon: <ArrowLeftRight color="#ff8901" size={24} />,
      title: "Click to Trade",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttons: [
        { text: "Buy", primary: false },
        { text: "Sell", primary: true }
      ]
    },
    {
      icon: <FileText color="#ff8901" size={24} />,
      title: "Lease with Ease",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttons: [
        { text: "Domestic", primary: false },
        { text: "EXIM", primary: true }
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-8 lg:px-16 w-[95%] mx-auto">
      <div className="text-center mb-10">
        <p className="text-lg font-medium text-secondary mb-2">LOOKING FOR</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Customized Logistics<br />Just for You
        </h2>
      </div>

      <div className={`grid grid-cols-1 ${isMobile ? "" : "md:grid-cols-3"} gap-8 w-full`}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col"
          >
            <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
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