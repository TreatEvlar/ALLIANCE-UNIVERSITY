import HeroIMG from "../assets/hero-img.png";
import CAMPUS from "../assets/campus.png";

export default function Hero() {
    return (
        <section className="relative pt-24 sm:pt-32 md:pt-42 pb-12 sm:pb-16 md:pb-20 overflow-hidden">

            {/* Decorative red div with campus image behind it */}
            <div className="absolute left-1/3 md:left-120 top-0 w-[200%] sm:w-[150%] md:w-[85%] h-40 sm:h-60 md:h-100 bg-red-800 rounded-r-full rotate-150 opacity-50 md:opacity-100 overflow-hidden">
                <img
                    src={CAMPUS}
                    alt="Campus Background"
                    className="w-full h-full object-cover opacity-30 scale-y-[-1]"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid md:grid-cols-2 items-center gap-8 md:gap-0">

                <div className="z-10 text-center md:text-left">
                    <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">
                        Level up your Career <br className="hidden sm:block" /> with
                    </p>

                    <div className="text-red-800 font-extrabold mt-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-none mb-0">ONLINE</h2>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">MBA</h1>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-700">
                        Admissions Open <br className="hidden sm:block" />
                        for Batch 2026
                    </p>

                    <div className="flex items-center justify-center md:justify-start mt-4 text-red-800 font-semibold group cursor-pointer">
                        Apply Now 
                        <span className="ml-2 group-hover:translate-x-2 transition-transform duration-200">→</span>
                    </div>
                </div>

                <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
                    
                    <img
                        src={HeroIMG}
                        alt="MBA Student"
                        className="hidden lg:block absolute right-120 top-20 w-full z-10 transform -scale-x-160 scale-160"
                    />

                    <div className="bg-white shadow-xl rounded-xl p-4 sm:p-5 md:p-6 w-full sm:w-80 md:w-90 z-20">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                            Request Information
                        </h3>

                        <form className="space-y-2 sm:space-y-3">
                            <input
                                type="text"
                                placeholder="Enter your name*"
                                className="w-full border rounded-md p-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                            />

                            <input
                                type="email"
                                placeholder="Enter your email*"
                                className="w-full border rounded-md p-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                            />

                            <input
                                type="tel"
                                placeholder="Enter your mobile number*"
                                className="w-full border rounded-md p-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                            />

                            <select className="w-full border rounded-md p-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent">
                                <option>Select Program*</option>
                                <option>MBA - Marketing</option>
                                <option>MBA - Finance</option>
                                <option>MBA - HR</option>
                                <option>MBA - Operations</option>
                                <option>MBA - Business Analytics</option>
                            </select>

                            <select className="w-full border rounded-md p-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent">
                                <option>Select State*</option>
                                <option>Karnataka</option>
                                <option>Maharashtra</option>
                                <option>Delhi</option>
                                <option>Tamil Nadu</option>
                                <option>Telangana</option>
                            </select>

                            <select className="w-full border rounded-md p-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent">
                                <option>Select City*</option>
                                <option>Bangalore</option>
                                <option>Mumbai</option>
                                <option>Delhi</option>
                                <option>Chennai</option>
                                <option>Hyderabad</option>
                            </select>

                            <button className="w-full bg-gray-800 text-white py-2 sm:py-2.5 rounded-md font-medium text-sm sm:text-base hover:bg-gray-900 transition-colors duration-200">
                                Apply Now
                            </button>
                        </form>

                        <p className="text-xs text-gray-500 mt-3 text-center">
                            *Required fields
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}