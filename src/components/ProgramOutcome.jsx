import React from 'react';
import { Settings, Users, Globe, Briefcase } from 'lucide-react';
import BOY from '../assets/boy.png'

export default function ProgramOutcome() {
  const outcomes = [
    {
      title: "Strategic Mastery:",
      desc: "Sharpen your analytical edge to solve complex business puzzles and drive growth.",
      icon: <Settings className="w-10 h-10 mb-4 text-red-900" />,
      active: false
    },
    {
      title: "Modern Leadership:",
      desc: "Level up your management style to lead diverse teams in a fast-paced economy.",
      icon: <Users className="w-10 h-10 mb-4 text-white" />,
      active: true 
    },
    {
      title: "Borderless Business:",
      desc: "Gain a 360-degree view of the global marketplace to compete on the world stage.",
      icon: <Globe className="w-10 h-10 mb-4 text-red-900" />,
      active: false
    },
    {
      title: "Future-Ready Career:",
      desc: "Prepare for a seamless transition into executive management or the world of entrepreneurship.",
      icon: <Briefcase className="w-10 h-10 mb-4 text-red-900" />,
      active: false
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header with responsive lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
        <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0A192F] flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          PROGRAM <span className="text-orange-800 whitespace-nowrap">OUTCOME</span>
        </h2>
        <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
      </div>

      {/* Desktop Layout - exactly as original (lg and above) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
        
        {/* Left side - Outcomes Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-6">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col items-center text-center shadow-sm
                ${o.active 
                  ? 'bg-red-900 text-white border-red-900' 
                  : 'bg-white text-gray-800 border-gray-200'}`}
            >
              {o.icon}
              <h3 className="font-bold text-xl mb-3">{o.title}</h3>
              <p className={o.active ? 'text-red-50/90' : 'text-gray-500'}>
                {o.desc}
              </p>
            </div>
          ))}
          
          {/* Decorative bar - exactly as original (only visible on desktop) */}
          <div className="col-span-2 mt-4 justify-start absolute top-197 lg:block hidden">
            <div className="w-300 h-10 bg-gray-700 rounded-l-full"></div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center items-center h-full min-h-100">
          <img src={BOY} alt="" className='w-100'/>
        </div>
      </div>

      {/* Mobile/Tablet Layout - below lg */}
      <div className="lg:hidden flex flex-col gap-8">
        
        {/* Image first on mobile/tablet */}
        <div className="relative flex justify-center items-center">
          <img 
            src={BOY} 
            alt="" 
            className="w-48 sm:w-56 md:w-64"
          />
        </div>

        {/* Outcomes Grid - responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className={`p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col items-center text-center shadow-sm
                ${o.active 
                  ? 'bg-red-900 text-white border-red-900 scale-[1.02] sm:scale-100' 
                  : 'bg-white text-gray-800 border-gray-200'}`}
            >
              <div className={`${o.active ? 'text-white' : 'text-red-900'}`}>
                {o.icon}
              </div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{o.title}</h3>
              <p className={`text-xs sm:text-sm md:text-base ${o.active ? 'text-red-50/90' : 'text-gray-500'}`}>
                {o.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative bar for mobile/tablet - REMOVED completely */}
      </div>
    </section>
  );
}