import { useState, useEffect } from 'react';

const GlobalStatsCounter = () => {
  const [counts, setCounts] = useState([
    { value: 0, target: 1150, label: "Global Clients", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { value: 0, target: 1205, label: "Projects Completed", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { value: 0, target: 1530, label: "Industry Solutions", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { value: 0, target: 1156, label: "Team Members", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]);

  // Animation for counting up
  useEffect(() => {
    const startValue = 500; // Starting value for animation (50% of target)
    const duration = 2000; // Animation duration in milliseconds
    const interval = 20; // Update interval in milliseconds
    const steps = duration / interval;
    
    // Set initial values
    setCounts(prevCounts => 
      prevCounts.map(count => ({
        ...count,
        value: startValue
      }))
    );
    
    const timer = setInterval(() => {
      setCounts(prevCounts => {
        const allReachedTarget = prevCounts.every(count => count.value >= count.target);
        
        if (allReachedTarget) {
          clearInterval(timer);
          return prevCounts.map(count => ({
            ...count,
            value: count.target
          }));
        }
        
        return prevCounts.map(count => {
          const increment = (count.target - startValue) / steps;
          const newValue = Math.min(count.value + increment, count.target);
          return {
            ...count,
            value: newValue
          };
        });
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#ff8901] text-white">
      {/* Header section */}
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Powering innovation<br />
          across industries, globally
        </h1>
      </div>
      
      {/* Map section */}
      <div className="relative container mx-auto px-4 md:px-8 py-6">
        {/* Hexagonal world map */}
        <div className="w-full relative">
          <HexagonalWorldMap />
        </div>
      </div>
      
      {/* Stats section */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {counts.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {Math.round(item.value)}+
              </div>
              <div className="h-px w-24 bg-white mb-2"></div>
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Hexagonal World Map Component
const HexagonalWorldMap = () => {
  // Location markers
  const locations = [
    { top: "35%", left: "20%" },   // North America
    { top: "75%", left: "25%" },   // South America
    { top: "45%", left: "48%" },   // Europe/Africa
    { top: "35%", left: "65%" },   // Asia
    { top: "75%", left: "80%" }    // Australia
  ];
  
  return (
    <div className="relative w-full  aspect-[2/.3]">
      {/* Hexagonal pattern for world map */}
      <div className="absolute inset-0 opacity-70">
        <svg viewBox="0 0 1000 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="hexPattern" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
              <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </pattern>
          </defs>
          
          {/* World Map Shape - Simplified approximation */}
          <path 
            d="M100,200 Q150,150 200,150 Q250,100 300,100 Q400,80 500,100 Q600,120 700,150 
               Q750,150 800,180 Q900,200 950,250 Q900,300 850,320 Q800,330 700,330 
               Q650,350 600,350 Q550,380 500,380 Q450,400 400,380 Q350,370 300,350 
               Q250,340 200,320 Q150,300 100,250 Q80,225 100,200"
            fill="url(#hexPattern)" 
            stroke="rgba(255,255,255,0.5)" 
            strokeWidth="1"
          />
        </svg>
      </div>
      
      {/* Location markers */}
      {locations.map((loc, index) => (
        <div 
          key={index}
          className="absolute w-3 h-3 bg-white rounded-full shadow-lg flex items-center justify-center"
          style={{ top: loc.top, left: loc.left }}
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default GlobalStatsCounter;