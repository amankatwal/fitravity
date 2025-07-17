import React from "react";
import logo from "../../public/logo.png"
import { Link, Outlet } from "react-router-dom";
import { Outdent } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 divide-none border-lime-500">
      <div className="mx-0-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex text-5xl font-bold hover:scale-110 transition duration-300">
          <img src={logo} width={55} />
          <span>
          <span className="text-lime-400">FIT</span>
          <span className="text-white">RAVITY</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm tracking-wide">
          <a href="#" className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs ">HOME</a>
          <a href="#" className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs">ABOUT US</a>
          <a href="/plans" className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs">PLANS & PRICING</a>
          <a href="#" className="text-lime-400 font-medium px-2 py-2 hover:bg-lime-400 hover:text-black transition duration-300 hover:scale-110 rounded-xs">TEACH WITH US</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="cursor-pointer rounded-xs text-xl border border-lime-400 text-lime-400 px-4 py-1 font-semibold hover:text-black-400 hover:bg-lime-500 hover:text-black transition duration-300 hover:scale-110">
           <Link to="/login"> LOG-IN</Link>
          </button>
          <button className="cursor-pointer text-xl bg-lime-400 text-black px-4 py-1 font-semibold hover:bg-lime-600 transition duration-300 hover:scale-110 rounded-xs">
            <Link to="/signup?"> SIGN-UP</Link>
          </button>
        </div>
      </div>
         </nav>
  );
};

export default Navbar;