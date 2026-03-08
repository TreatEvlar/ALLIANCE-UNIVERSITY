import { 
  FaChartBar, 
  FaBullhorn, 
  FaDollarSign, 
  FaUsers, 
  FaCogs,
  FaBrain 
} from 'react-icons/fa';

export default function Specializations() {
  const specs = [
    { name: "Business Analytics", icon: <FaChartBar className="text-4xl sm:text-5xl" /> },
    { name: "Marketing", icon: <FaBullhorn className="text-4xl sm:text-5xl" /> },
    { name: "Finance", icon: <FaDollarSign className="text-4xl sm:text-5xl" /> },
    { name: "HRM", icon: <FaUsers className="text-4xl sm:text-5xl" /> },
    { name: "Operations", icon: <FaCogs className="text-4xl sm:text-5xl" /> },
    { name: "Business Analytics & AI", icon: <FaBrain className="text-4xl sm:text-5xl" /> },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-gray-50 overflow-hidden">
      
      {/* Header with responsive lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0A192F] flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            SPECIALIZATIONS <span className="text-orange-800 whitespace-nowrap">OFFERED</span>
          </h2>
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
        </div>

      {/* Responsive Grid Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Grid layout (2 columns) */}
        <div className="grid grid-cols-2 sm:hidden gap-3">
          {specs.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center p-4 gap-2 transition-all duration-300 cursor-pointer
                ${i === 1 ? 'bg-red-800 text-white rounded-lg shadow-lg' : 'bg-white hover:bg-gray-100 rounded-lg shadow-sm'}`}
            >
              <div className="text-3xl">
                {s.icon}
              </div>
              <span className="text-center text-sm font-medium">{s.name}</span>
            </div>
          ))}
        </div>

        {/* Tablet: Grid layout (3 columns) */}
        <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4">
          {specs.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center p-5 gap-3 transition-all duration-300 cursor-pointer
                ${i === 1 ? 'bg-red-800 text-white rounded-lg shadow-lg scale-105' : 'bg-white hover:bg-gray-100 rounded-lg shadow-sm hover:shadow-md'}`}
            >
              <div className="text-4xl">
                {s.icon}
              </div>
              <span className="text-center text-base font-medium">{s.name}</span>
            </div>
          ))}
        </div>

        {/* Desktop: Original flex layout with separators */}
        <div className="hidden lg:flex flex-wrap justify-center items-center">
          {specs.map((s, i) => (
            <div key={i} className="flex items-center">
              {/* Box */}
              <div
                className={`w-44 xl:w-48 px-3 xl:px-4 py-5 xl:py-6 flex flex-col items-center gap-2 xl:gap-3 transition-all duration-300 cursor-pointer
                  ${i === 1 ? 'bg-red-800 text-white rounded-lg shadow-lg scale-105' : 'hover:bg-gray-100 rounded-lg'}`}
              >
                <div className="text-4xl xl:text-5xl">
                  {s.icon}
                </div>
                <span className="text-center text-sm xl:text-base font-medium">{s.name}</span>
              </div>
              
              {/* Separator - hidden on mobile/tablet */}
              {i < specs.length - 1 && (
                <div className="w-px h-16 xl:h-20 bg-gray-300 mx-1 xl:mx-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Optional: View All button for mobile */}
      <div className="flex justify-center mt-8 sm:hidden">
        <button className="text-orange-800 font-semibold text-sm border-2 border-orange-800 px-6 py-2 rounded-full hover:bg-orange-800 hover:text-white transition-colors duration-200">
          View All Specializations
        </button>
      </div>
    </section>
  );
}