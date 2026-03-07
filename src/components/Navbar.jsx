import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-20 px-10 py-6 flex justify-between items-center">
      
      
      <div className="flex items-center gap-2">
        <img src={logo} alt="Alliance University" className="h-30" />
      </div>

      
      <div className="bg-white shadow-md rounded-full px-5 py-2 flex items-center gap-2 text-sm font-medium">
        📞 +91 0000000000
      </div>

    </nav>
  );
}