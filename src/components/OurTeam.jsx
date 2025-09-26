import { useState, useEffect, useRef } from 'react';
import tm01 from "../images/navin sir - NCON.jpg";
import tm02 from "../images/Vishal sir - NCON.jpg";
import tm03 from "../images/Shruti Parab... - NCON.jpg";
import tm04 from "../images/Summet Sir - NCON.jpg";
import tm05 from "../images/Shruti Parab... - NCON.jpg";
import tm07 from "../images/Dhruv.jpg";

import tm06 from "../images/TM03.webp";




const OurTeam = () => {
  //Sample team data
  const teamMembers = [
    {
      id: 1,
      name: 'Navin Agarwal',
      position: 'CEO',
      bio: ' With a clear vision and passion for innovation, Navin Agarwal has been the driving force behind NCON’s growth and success. As CEO, he leads with a focus on building sustainable solutions in the container industry, ensuring excellence in both service and customer satisfaction. ',
      bio2:'  Under his leadership, NCON has expanded its reach, diversified its services, and  strengthened relationships with global partners. His commitment to quality and integrity continues to shape the company’s journey towards becoming a trusted name in the industry.',
      image: tm01
    },
    {
      id: 2,
      name: 'Vishal Kalyadapu',
      position: 'Business Developer Manager',
      bio: 'Vishal Kalyadapu plays a key role in driving NCON’s business growth by identifying new opportunities, building client relationships, and expanding the company’s market presence. With a strategic mindset and strong industry knowledge, he ensures that NCON continues to deliver value-driven solutions tailored to customer needs.',
      bio2:' His expertise in forging partnerships and developing long-term strategies has contributed significantly to the company’s expansion and reputation in the container industry. Vishal’s dedication to innovation and excellence makes him a vital part of NCON’s leadership team.',
      image: tm02
    },
    {
      id: 3,
      name: 'Shruti Parab',
      position: 'Business Developer Manager (West Zone)',
      bio: 'Shruti Parab is a dynamic Business Development Manager at NCON, specializing in the West Zone. With a keen understanding of market trends and customer needs, she excels in creating tailored solutions that drive business growth and enhance client satisfaction.',
      image: tm03
    },
    {
      id: 4,
      name: 'Suumeet Singhania',
      position: 'Strategic Advisor ',
      bio: 'A seasoned professional with extensive experience in the container and logistics industry, Suumeet Singhania brings invaluable insights and strategic guidance to NCON. His expertise in market analysis, operational efficiency, and business development helps shape the company’s long-term vision and growth strategies.',
      image: tm04
    },
    {
      id: 5,
      name: 'Shruti Parab',
      position: 'Business Developer Manger',
      bio: 'Shruti Parab is a dynamic Business Development Manager at NCON, specializing in the West Zone. With a keen understanding of market trends and customer needs, she excels in creating tailored solutions that drive business growth and enhance client satisfaction.',
      image: tm05
    },
    {
      id: 6,
      name :'Kishore Gopal Naidu',
      position : 'Business Development Manager ',
      bio : 'Expert whose innovative ideas and opinions,backed by expertise, influence other in fields by providing unique insight and shaping future direction ',
      image : 'https://www.llt.at/wp-content/uploads/2021/11/blank-profile-picture-g77b5d6651-1280-705x705.png',
    },
 
    {
      id: 7,
      name :'Dhruv',
      position : 'Business Development Manager ',
      bio : 'Good leadership is about building a culture of trust, leading by Influence, and treating people well along the way.',
      image : tm07,
    },
    ]

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

  return  (
    <div className="w-[85%] mx-auto px-4 py-4 md:py-8">
      <div className="text-center mb-8 md:mb-12">
        <p className="text-orange-500 font-medium mb-2">TEAM</p>
                  <h2 className="text-4xl sm:text-3xl md:text-6xl mb-4 sm:mb-6 w-full  ">Meet Our Team</h2>

      </div>

      {/* Featured team member - Improved mobile layout with full image */}
      <div className="relative mb-8 md:mb-10 overflow-hidden">
        <div 
         className={`bg-black/20 rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${getAnimationClass()}`}
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
                <p style={{fontFamily : "Roboto"}}>{teamMembers[currentIndex].bio}</p>
                {/* <p>{teamMembers[currentIndex].bio}</p> */}
                <br />
                <p  style={{fontFamily : "Roboto"}}>{teamMembers[currentIndex].bio2}</p>
              </div>
            </div>
          </div>
          
          {/* Desktop layout (side by side) */}
          <div className="hidden md:flex md:flex-row">
            {/* Bio section */}
            <div className="md:w-2/3 p-16">
              <h3 className="text-3xl font-semibold mb-1">{teamMembers[currentIndex].name}</h3>
              <p className="text-xl text-gray-600 mb-20">{teamMembers[currentIndex].position}</p>
              <div className="space-y-4">
                <p className='text-xl text-justify'>{teamMembers[currentIndex].bio}</p>
                {/* <p className='text-xl text-justify'>{teamMembers[currentIndex].bio}</p> */}
                <br />
                 <p className='text-xl text-justify'>{teamMembers[currentIndex].bio2}</p>
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
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={` cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 rounded-lg ring-orange-500 scale-105' : 'hover:scale-105'
              }`}
              onClick={() => selectTeamMember(index)}
            >
              <div className="bg-gray-200 rounded-t-lg overflow-hidden h-[280px]">
                <img 
                  src={member.image || 'https://via.placeholder.com/150'}
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-gray-100 rounded-b-lg">
                <h4 className=" text-base">{member.name}</h4>
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