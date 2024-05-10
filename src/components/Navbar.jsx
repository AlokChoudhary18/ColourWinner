import { Outlet ,Link } from "react-router-dom"
import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-white text-lg font-bold uppercase font-['Gilroy'] ">
          Colour Winner
        </h2>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link className="text-white hover:text-gray-300" to="/" >Home</Link>
          <Link className="text-white hover:text-gray-300" to="/games" >Games</Link>
          <Link className="text-white hover:text-gray-300" to="/winners" >Winners</Link>
          <Link className="text-white hover:text-gray-300" to="/Contact" >Contact</Link>
          <Link className="text-white hover:text-gray-300" to="/About" >About</Link>
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <Link to="/login" >Login</Link>
          </button>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden transition-all  ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="text-white block hover:bg-gray-700 py-2 px-3 rounded-md text-base font-medium" to="/" >Home</Link>
            <Link className="text-white block hover:bg-gray-700 py-2 px-3 rounded-md text-base font-medium" to="/games" >Games</Link>
            <Link className="text-white block hover:bg-gray-700 py-2 px-3 rounded-md text-base font-medium" to="/winners" >Winners</Link>
            <Link className="text-white block hover:bg-gray-700 py-2 px-3 rounded-md text-base font-medium" to="/Contact" >Contact</Link>
            <Link className="text-white block hover:bg-gray-700 py-2 px-3 rounded-md text-base font-medium" to="/About" >About</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
