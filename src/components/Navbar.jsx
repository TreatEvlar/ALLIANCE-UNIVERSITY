import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-20 px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img 
          src={logo} 
          alt="Alliance University" 
          className="h-16 sm:h-20 md:h-24 lg:h-30 w-auto" 
        />
      </div>

      {/* Contact Button - Responsive */}
      <div className="bg-white shadow-md rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium whitespace-nowrap">
        <span className="text-base sm:text-lg">📞</span>
        <span className="hidden xs:inline">+91 00000 00000</span>
        <span className="xs:hidden">Call</span>
      </div>

    </nav>
  );
}