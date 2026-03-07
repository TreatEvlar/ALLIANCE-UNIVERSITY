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
      description: "Department of Scientific & Industrial Research. recognized for research excellence." 
    },
  ];

  return (
    <section className="py-16 px-10 text-center">
      <h2 className="text-2xl font-bold mb-10 flex items-center justify-center gap-4">
        <hr className="w-40 border"/>
        Rankings & <span className="text-orange-800">Recognitions</span>
        <hr className="w-40 border"/>
      </h2>

      <div className="grid md:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="border rounded-xl p-6 shadow-sm w-50 mb-2 flex flex-col items-center">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-16 h-16 mb-3 object-contain"
              />
              <h3 className="font-semibold text-center">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}