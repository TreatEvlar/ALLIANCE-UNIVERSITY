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
    <section className="relative pb-0 overflow-visible">
      
      <div className="relative z-20 mt-0 md:-mt-24 lg:-mt-32 xl:-mt-40">
        <div className="max-w-6xl mx-auto bg-red-800 text-white sm:rounded-3xl px-4 sm:px-6 md:px-10 pt-12 sm:pt-14 md:pt-16 shadow-2xl relative z-30">
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-16">
            <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-white/30 hidden xs:block" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
              TRANSFORMING ONLINE EDUCATION<br className="hidden sm:block" />
              <span className="text-orange-200 text-sm sm:text-base md:text-lg"> - THE ALLIANCE WAY</span>
            </h2>
            <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-white/30 hidden xs:block" />
          </div>

          <div className="block md:hidden">
            <div className="flex justify-center mb-8">
              <div className="w-40 sm:w-48">
                <img 
                  src={centerImage} 
                  alt="Alliance" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="space-y-4 pb-6">
              {features.map((f, i) => (
                <div key={i} className="text-center bg-white/10 rounded-lg p-3">
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    <span className="font-bold text-white block sm:inline mb-1 sm:mb-0">{f.title}</span>{' '}
                    <span className="text-xs sm:text-sm">{f.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6 items-start">
              
              <div className="space-y-4">
                {leftFeatures.map((f, i) => (
                  <div key={i} className="text-right bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-gray-200 leading-relaxed">
                      <span className="font-bold text-white block mb-1">{f.title}</span>
                      <span className="text-xs">{f.desc}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <div className="w-32">
                  <img 
                    src={centerImage} 
                    alt="Alliance" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="col-span-2 mt-4 grid grid-cols-2 gap-4">
                {rightFeatures.map((f, i) => (
                  <div key={i} className="text-left bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-gray-200 leading-relaxed">
                      <span className="font-bold text-white block mb-1">{f.title}</span>
                      <span className="text-xs">{f.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 items-start">
            
            <div className="space-y-6">
              {leftFeatures.map((f, i) => (
                <div key={i} className="text-right">
                  <p className="text-sm xl:text-base text-gray-200 leading-relaxed">
                    <span className="font-bold text-white">{f.title}</span>{' '}
                    <span className="text-xs xl:text-sm">{f.desc}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center">
              <img 
                src={centerImage} 
                alt="Alliance" 
                className="w-48 xl:w-56 h-auto object-contain"
              />
            </div>

            <div className="space-y-6">
              {rightFeatures.map((f, i) => (
                <div key={i} className="text-left">
                  <p className="text-sm xl:text-base text-gray-200 leading-relaxed">
                    <span className="font-bold text-white">{f.title}</span>{' '}
                    <span className="text-xs xl:text-sm">{f.desc}</span>
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