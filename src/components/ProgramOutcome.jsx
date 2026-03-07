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
    <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      
      
      <div className="flex items-center justify-center gap-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 flex items-center justify-center gap-4">
          <hr className="w-40 border-t-2 border-gray-300" />
          PROGRAM <span className="text-red-700">OUTCOME</span>
          <hr className="w-40 border-t-2 border-gray-300" />
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-center">
        
        
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
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
          
          
          <div className="col-span-2 mt-4 flex justify-start absolute top-200">
            <div className="w-300 h-10 bg-gray-700 rounded-l-4xl"></div>
          </div>
        </div>

        
        <div className="relative flex justify-center items-center h-full min-h-100">
          <img src={BOY} alt="" className='w-100'/>
        </div>

      </div>
    </section>
  );
}