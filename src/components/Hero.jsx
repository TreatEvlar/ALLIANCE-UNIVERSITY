import HeroIMG from "../assets/hero-img.png";

export default function Hero() {
    return (
        <section className="relative pt-42 pb-20 overflow-hidden">

            
            <div className="absolute left-120 top-0 w-[85%] h-100 bg-red-800 rounded-r-full rotate-150"></div>

            <div className="relative max-w-7xl mx-auto px-10 grid md:grid-cols-2 items-center">

                
                <div className="z-10">

                    <p className="text-gray-600 text-2xl">
                        Level up your Career <br /> with
                    </p>

                    <div className="text-red-800 font-extrabold mt-2">
                        <h2 className="text-4xl leading-none mb-0">ONLINE</h2>
                        <h1 className="text-9xl leading-none">MBA</h1>
                    </div>

                    <p className="text-xl mt-4 text-gray-700">
                        Admissions Open <br />
                        for Batch 2026
                    </p>

                    <div className="flex items-center mt-4 text-red-800 font-semibold">
                        Apply Now →
                    </div>

                </div>

                
                <div className="relative flex justify-end">

                    
                    <img
                        src={HeroIMG}
                        alt="MBA Student"
                        className="absolute right-120 top-20 w-full z-10 transform -scale-x-160 scale-160"
                    />

                    
                    <div className="bg-white shadow-xl rounded-xl p-6 w-90 z-20">

                        <h3 className="text-lg font-semibold mb-4">
                            Request Information
                        </h3>

                        <form className="space-y-3">

                            <input
                                type="text"
                                placeholder="Enter your name*"
                                className="w-full border rounded-md p-2 text-sm"
                            />

                            <input
                                type="email"
                                placeholder="Enter your email*"
                                className="w-full border rounded-md p-2 text-sm"
                            />

                            <input
                                type="tel"
                                placeholder="Enter your mobile number*"
                                className="w-full border rounded-md p-2 text-sm"
                            />

                            <select className="w-full border rounded-md p-2 text-sm">
                                <option>Select Program*</option>
                            </select>

                            <select className="w-full border rounded-md p-2 text-sm">
                                <option>Select State*</option>
                            </select>

                            <select className="w-full border rounded-md p-2 text-sm">
                                <option>Select City*</option>
                            </select>

                            <button className="w-full bg-gray-800 text-white py-2 rounded-md font-medium">
                                Apply Now
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}