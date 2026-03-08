export default function AboutMBA() {
  return (
    <section className="py-12 px-4 md:py-16 md:px-10 bg-white">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        
        <div className="shrink-0 z-10 w-full md:w-auto flex justify-center">
          <div className="bg-gray-800 text-white rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex flex-col justify-center p-6 sm:p-8 md:pl-15">
            <h2 className="text-2xl sm:text-3xl font-light text-center md:text-left">ABOUT</h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">ONLINE</h2>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center md:text-left">MBA</h2>
            <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">PROGRAM</h2>
          </div>
        </div>

        <div className="bg-red-800 text-white p-8 sm:p-12 md:p-18 rounded-3xl md:rounded-l-full flex-1 md:-ml-20 mt-6 md:mt-0 w-full">
          <p className="text-base sm:text-lg leading-relaxed">
            The MBA program at Alliance Online is a comprehensive two-year
            postgraduate course designed to cultivate leadership, strategic
            thinking, and analytical skills. It offers electives in areas such
            as Marketing, Finance, Human Resource Management, Operations and
            Business Analytics.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-base sm:text-lg">
              <span className="font-bold">Duration:</span> 2 Years
            </p>

            <p className="text-base sm:text-lg">
              <span className="font-bold">Eligibility:</span> Bachelor's degree
              with minimum 50% marks (45% for SC/ST candidates)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}