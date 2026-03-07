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
    { name: "Business  Analytics", icon: <FaChartBar className="text-5xl" /> },
    { name: "Marketing", icon: <FaBullhorn className="text-5xl" /> },
    { name: "Finance", icon: <FaDollarSign className="text-5xl" /> },
    { name: "HRM", icon: <FaUsers className="text-5xl" /> },
    { name: "Operations", icon: <FaCogs className="text-5xl" /> },
    { name: "Business Analytics & AI", icon: <FaBrain className="text-5xl" /> },
  ];

  return (
    <section className="py-16 px-10 bg-gray-50">
      <h2 className="text-center text-2xl font-bold mb-10 flex items-center justify-center gap-4">
        <hr className="w-40 border"/>
        SPECIALIZATIONS <span className="text-orange-800">OFFERED</span>
        <hr className="w-40 border"/>
      </h2>

      <div className="flex flex-wrap justify-center items-center">
        {specs.map((s, i) => (
          <div key={i} className="flex items-center">
            {/* Box */}
            <div
              className={`w-48 px-4 py-6 flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer
                ${i === 1 ? 'bg-red-800 text-white rounded-lg' : 'hover:bg-gray-100 rounded-lg'}`}
            >
              <div className="text-4xl">
                {s.icon}
              </div>
              <span className="text-center text-xl font-medium">{s.name}</span>
            </div>
            
            
            {i < specs.length - 1 && (
              <div className="w-px h-35 bg-gray-300 mx-2"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}