import centerImage from '../assets/tuitor.png';

export default function TransformSection() {

  const features = [
    {
      title: "Campus Credibility:",
      desc: "Get the same degree, recognition, and value as an on-campus student.",
    },
    {
      title: "Immersive Content:",
      desc: "Learn through simulations, quizzes, and expert-led video modules.",
    },
    {
      title: "All-in-One Portal:",
      desc: "Manage classes, talk to faculty, and submit work easily.",
    },
    {
      title: "Industry Insider Access:",
      desc: "Join live interactive classes led by professors with real-world experience.",
    },
    {
      title: "Total Flexibility:",
      desc: "Study anytime, anywhere, on any device.",
    },
    {
      title: "360° Success Team:",
      desc: "Direct access to academic, career, and tech support.",
    },
  ];

  
  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3, 6);

  return (
    <section className="relative pb-0">
      
      <div className="relative z-20 -mt-40">
        <div className="max-w-6xl mx-auto bg-red-800 text-white rounded-3xl px-10 pt-16 shadow-2xl">
          <h2 className="text-center text-2xl font-bold mb-16 flex items-center justify-center gap-4">
            <hr className="w-40 border" />
            TRANSFORMING ONLINE EDUCATION - THE ALLIANCE WAY
            <hr className="w-40 border" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            <div className="space-y-6">
              {leftFeatures.map((f, i) => (
                <div key={i} className="text-right">
                  <p className="text-gray-200 text-md leading-relaxed">
                    <span className="font-bold text-white">{f.title}</span> {f.desc}
                  </p>
                </div>
              ))}
            </div>

            
            <div className="flex justify-center">
              <img 
                src={centerImage} 
                alt="Alliance" 
                className="w-full max-w-62.5 h-auto object-contain"
              />
            </div>

            
            <div className="space-y-6">
              {rightFeatures.map((f, i) => (
                <div key={i} className="text-left">
                  <p className="text-gray-200 text-md leading-relaxed">
                    <span className="font-bold text-white">{f.title}</span> {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}