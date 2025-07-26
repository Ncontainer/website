import { useState, useEffect } from "react";
import mapImage from "../images/map.svg";

const GlobalStatsCounter = () => {
  const [counts, setCounts] = useState([
    {
      value: 0,
      target: 1150,
      label: "Global Clients",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      value: 0,
      target: 1205,
      label: "Projects Completed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      value: 0,
      target: 1530,
      label: "Industry Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      value: 0,
      target: 1156,
      label: "Team Members",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  useEffect(() => {
    const startValue = 500;
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    setCounts((prevCounts) =>
      prevCounts.map((count) => ({
        ...count,
        value: startValue,
      }))
    );

    const timer = setInterval(() => {
      setCounts((prevCounts) => {
        const allReachedTarget = prevCounts.every(
          (count) => count.value >= count.target
        );

        if (allReachedTarget) {
          clearInterval(timer);
          return prevCounts.map((count) => ({
            ...count,
            value: count.target,
          }));
        }

        return prevCounts.map((count) => {
          const increment = (count.target - startValue) / steps;
          const newValue = Math.min(count.value + increment, count.target);
          return {
            ...count,
            value: newValue,
          };
        });
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-secondary text-white">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Powering innovation
          <br />
          across industries, globally
        </h1>
      </div>

      {/* Map section */}
      <div className="relative container mx-auto px-4 md:px-8 py-6">
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
  // Position markers as percentages of width/height
  const locations = [
    { top: "30%", left: "27%" }, // North America
    { top: "65%", left: "35%" }, // South America
    { top: "44%", left: "48%" }, // Africa
    { top: "37%", left: "65%" }, // Asia
    { top: "62%", left: "77%" }, // Australia
    { top: "26%", left: "49%" },
  ];

  return (
    <div className="relative w-full aspect-[2/0.9]">
      {/* World Map */}
      <img
        src={mapImage}
        alt="Hexagonal World Map"
        className="absolute inset-0 w-full h-full object-contain opacity-70"
      />

      {/* Location Markers */}
      {locations.map((loc, index) => (
        <div
          key={index}
          className="absolute w-3 h-3 bg-white rounded-full shadow-lg flex items-center justify-center"
          style={{
            top: loc.top,
            left: loc.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default GlobalStatsCounter;