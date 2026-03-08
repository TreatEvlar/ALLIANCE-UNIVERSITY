import { PiBinoculars } from "react-icons/pi";
import { FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0A192F] flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            VISION <span className="text-orange-800 whitespace-nowrap">& MISSION</span>
          </h2>
          <hr className="flex-1 max-w-15 sm:max-w-25 md:max-w-40 border-t-2 border-gray-300 hidden sm:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

          <div className="relative mt-12 sm:mt-14 md:mt-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-11 md:-top-12 z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300 hover:shadow-xl transition-shadow duration-300">
                <PiBinoculars className="text-red-800 text-3xl sm:text-4xl md:text-5xl" />
              </div>
            </div>

            <div className="bg-blue-950 rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 pt-12 sm:pt-14 md:pt-16 text-white text-center h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Vision
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed grow">
                Alliance Online's vision is to be a world-class University that nurtures talent and
                catalytically transforms the lives of millions through excellence in teaching, research,
                service and community development. To uphold a commitment to shaping lives through
                scholarly teaching and learning, and that which contributes to an equitable and holistic
                transformation of society at large.
              </p>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-14 md:mt-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-11 md:-top-12 z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300 hover:shadow-xl transition-shadow duration-300">
                <FaBullseye className="text-blue-950 text-3xl sm:text-4xl md:text-5xl" />
              </div>
            </div>

            <div className="bg-red-800 rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 pt-12 sm:pt-14 md:pt-16 text-white text-center h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Mission
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed grow">
                The mission of the University is to create and sustain a community of lifelong learners
                in an environment that emphasizes literacy, critical thinking, and humanistic and scientific
                inquiry. The University provides a dynamic, challenging and ethical environment for pursuing
                high quality teaching, research, learning and service across all areas of University, where
                students, faculty and other key constituents can interact, collaborate and partner with the
                global community for creation and dissemination of knowledge and transform lives of people
                through innovation and excellence in higher education.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}