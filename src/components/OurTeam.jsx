import { useState, useEffect, useRef } from 'react';
import tm01 from "../images/TM01.png";
import tm02 from "../images/TM02.png";
import tm03 from "../images/TM03.png";
import tm04 from "../images/TM04.png";
import tm05 from "../images/TM05.png";

const OurTeam = () => {
  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Chief Operating Officer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
      image: tm01
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Chief Marketing Officer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
      image: tm02
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'Chief Technology Officer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
      image: tm03
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'Chief Financial Officer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
      image: tm04
    },
    {
      id: 5,
      name: 'David Brown',
      position: 'Chief Product Officer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor',
      image: tm05
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState('active');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Function to cycle through team members automatically
  useEffect(() => {
    const timer = setInterval(() => {
      changeTeamMember('next');
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, teamMembers.length]);

  // Function to handle slide animation and member change
  const changeTeamMember = (direction) => {
    setAnimationState('exit');
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      } else if (direction === 'prev') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
      } else if (typeof direction === 'number') {
        setCurrentIndex(direction);
      }
      
      setAnimationState('enter');
      
      setTimeout(() => {
        setAnimationState('active');
      }, 500);
    }, 500);
  };

  // Manually select a specific team member
  const selectTeamMember = (index) => {
    if (index === currentIndex) return;
    changeTeamMember(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      changeTeamMember('next');
    } else if (touchStart - touchEnd < -100) {
      // Swipe right
      changeTeamMember('prev');
    }
  };

  // Animation classes based on state
  const getAnimationClass = () => {
    switch (animationState) {
      case 'enter':
        return 'translate-x-0 opacity-0';
      case 'active':
        return 'translate-x-0 opacity-100';
      case 'exit':
        return 'translate-x-full opacity-0';
      default:
        return 'translate-x-0 opacity-100';
    }
  };

  // Visible members for carousel
  const getVisibleMembers = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      // Mobile: show only current member
      return [teamMembers[currentIndex]];
    } else if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Small tablet: show 2 members
      return [
        teamMembers[currentIndex],
        teamMembers[(currentIndex + 1) % teamMembers.length]
      ];
    } else if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      // Tablet: show 3 members
      return [
        teamMembers[currentIndex],
        teamMembers[(currentIndex + 1) % teamMembers.length],
        teamMembers[(currentIndex + 2) % teamMembers.length]
      ];
    } else {
      // Desktop: show all members
      return teamMembers;
    }
  };

  return (
    <div className="w-[85%] mx-auto px-4 py-4 md:py-8">
      <div className="text-center mb-8 md:mb-12">
        <p className="text-orange-500 font-medium mb-2">TEAM</p>
        <h2 className="text-3xl md:text-5xl font-bold">Meet Our Team</h2>
      </div>

      {/* Featured team member - Improved mobile layout with full image */}
      <div className="relative mb-8 md:mb-10 overflow-hidden">
        <div 
          className={`bg-gray-200 rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${getAnimationClass()}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile layout (stack) */}
          <div className="block md:hidden">
            {/* Full image container - no height restriction */}
            <div className="w-full">
              <img 
                src={teamMembers[currentIndex].image} 
                alt={teamMembers[currentIndex].name}
                className="w-full object-contain" 
              />
            </div>
            
            {/* Bio section */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{teamMembers[currentIndex].name}</h3>
              <p className="text-gray-600 mb-4">{teamMembers[currentIndex].position}</p>
              <div className="space-y-3 max-h-48 overflow-auto">
                <p>{teamMembers[currentIndex].bio}</p>
                <p>{teamMembers[currentIndex].bio}</p>
              </div>
            </div>
          </div>
          
          {/* Desktop layout (side by side) */}
          <div className="hidden md:flex md:flex-row">
            {/* Bio section */}
            <div className="md:w-2/3 p-10">
              <h3 className="text-3xl font-bold mb-1">{teamMembers[currentIndex].name}</h3>
              <p className="text-xl text-gray-600 mb-20">{teamMembers[currentIndex].position}</p>
              <div className="space-y-4">
                <p className='text-xl text-justify'>{teamMembers[currentIndex].bio}</p>
                <p className='text-xl text-justify'>{teamMembers[currentIndex].bio}</p>
              </div>
            </div>
            
            {/* Image section */}
            <div className="md:w-1/3">
              <img 
                src={teamMembers[currentIndex].image} 
                alt={teamMembers[currentIndex].name}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        {/* Mobile navigation arrows */}
        <button 
          className="absolute top-1/3 left-2 bg-white/70 p-2 rounded-full shadow md:hidden z-10"
          onClick={() => changeTeamMember('prev')}
          aria-label="Previous team member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute top-1/3 right-2 bg-white/70 p-2 rounded-full shadow md:hidden z-10"
          onClick={() => changeTeamMember('next')}
          aria-label="Next team member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Team member carousel - Desktop view */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={` cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 rounded-lg ring-orange-500 scale-105' : 'hover:scale-105'
              }`}
              onClick={() => selectTeamMember(index)}
            >
              <div className="bg-gray-200 rounded-t-lg overflow-hidden h-[450px]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-gray-100 rounded-b-lg">
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-gray-600 text-base">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile navigation dots only */}
      <div className="md:hidden flex justify-center mt-6 pb-8">
        {teamMembers.map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`h-3 w-3 mx-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-orange-500 scale-110' : 'bg-gray-300'
            }`}
            onClick={() => selectTeamMember(index)}
            aria-label={`View ${teamMembers[index].name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;