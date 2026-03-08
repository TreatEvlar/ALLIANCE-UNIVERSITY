export default function Rankings() {
  const items = [
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3c4SpG8rLmFc5YpQDXcIM2HcBE8IWOKIxhQ&s", 
      title: "NIRF Ranking", 
      description: "Recognized in national institutional ranking framework for academic excellence." 
    },
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlla7Hiamqclr7KBR2aAQ59K2azBf6YeGVQg&s", 
      title: "NAAC A+ Grade", 
      description: "Accredited with A+ grade by National Assessment and Accreditation Council." 
    },
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RQ-Dmt6BRuD8aOmIauEfdjftq0_aXqORwQ&s", 
      title: "World University Rankings", 
      description: "Featured in international university rankings for global academic recognition." 
    },
    { 
      image: "https://images.shiksha.com/mediadata/images/articles/1626070892phpEuluag.jpeg", 
      title: "UGC Entitled", 
      description: "University Grants Commission entitled institution ensuring quality standards." 
    },
    { 
      image: "https://kgr.ac.in/wp-content/uploads/2022/11/DSIR-SIRO-Recognized.jpg", 
      title: "DSIR Recognition", 
      description: "Department of Scientific & Industrial Research recognized for research excellence." 
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 text-center bg-white">
      
      {/* Header with responsive lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0A192F] flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            RANKINGS & <span className="text-orange-800 whitespace-nowrap">RECOGNITIONS</span>
          </h2>
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
        </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center group">
            
            {/* Card with hover effect */}
            <div className="border rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-xs sm:max-w-full mb-2 sm:mb-3 flex flex-col items-center">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 object-contain"
                loading="lazy"
              />
              <h3 className="font-semibold text-center text-sm sm:text-base">{item.title}</h3>
            </div>
            
            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 text-center px-2 max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Optional: Add View More button for mobile */}
      <div className="mt-8 sm:hidden">
        <button className="text-orange-800 font-semibold text-sm border border-orange-800 px-6 py-2 rounded-full hover:bg-orange-800 hover:text-white transition-colors duration-200">
          View All Recognitions
        </button>
      </div>
    </section>
  );
}