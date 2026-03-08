import campus from '../assets/campus.png';

export default function AboutUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-10 text-center overflow-hidden">

      {/* Header with responsive lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0A192F] flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            ABOUT <span className="text-orange-800 whitespace-nowrap">US</span>
          </h2>
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
        </div>

      {/* Description with responsive text */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12">
          At Alliance Online, we are redefining the future of higher education
          by bringing the vision of Alliance University into the digital realm—
          accessible, flexible, and deeply impactful. Rooted in a commitment to
          academic excellence and innovation, Alliance Online bridges the gap
          between tradition and technology, offering learners a transformative
          educational experience from anywhere in the world.
        </p>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12">
          We believe that research-driven learning is the cornerstone of true education.
          Our online programs are designed to integrate cutting-edge research with
          practical learning, empowering students to tackle real-world challenges
          on local, national, and global scales.
        </p>
      </div>

      {/* Image with overlay effect and caption */}
      <div className="mt-8 sm:mt-10 md:mt-12 w-full relative group">
        <img
          src={campus}
          alt="Alliance University Campus"
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
      </div>

    </section>
  );
}