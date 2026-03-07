export default function AboutMBA() {
  return (
    <section className="py-16 px-10 bg-white">
      <div className="flex items-center max-w-6xl mx-auto">
        
        <div className="shrink-0 z-10">
          <div className="bg-gray-800 text-white rounded-full w-80 h-80 flex flex-col justify-center p-8 pl-15">
            <h2 className="text-3xl font-light text-left">ABOUT</h2>
            <h2 className="text-4xl font-bold text-left">ONLINE</h2>
            <h2 className="text-7xl font-bold text-left">MBA</h2>
            <h2 className="text-3xl font-bold text-left">PROGRAM</h2>
          </div>
        </div>

        
        <div className="bg-red-800 text-white p-18 rounded-l-full flex-1 -ml-20 z-100">
          <p className="text-lg leading-relaxed">
            The MBA program at Alliance Online is a comprehensive two-year
            postgraduate course designed to cultivate leadership, strategic
            thinking, and analytical skills. It offers electives in areas such
            as Marketing, Finance, Human Resource Management, Operations and
            Business Analytics.
          </p>

          <p className="mt-6">
            <span className="font-bold">Duration:</span> 2 Years
          </p>

          <p className="mt-2">
            <span className="font-bold">Eligibility:</span> Bachelor's degree
            with minimum 50% marks (45% for SC/ST candidates)
          </p>
        </div>
      </div>
    </section>
  );
}