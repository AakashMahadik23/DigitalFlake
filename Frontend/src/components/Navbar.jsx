// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import whiteuser from "../assets/whiteuser.jpg";

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4">
      <ul className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <p className="text-white text-3xl font-bold mr-2">D</p>
          <div className="w-20 h-20 border-2 border-white mr-4"></div>
        </div>

        {/* Brand Name and Link (moved to the left) */}
        <div className="flex items-center text-3xl">
          <Link to="/" className="text-white no-underline">
            digitalflake
          </Link>
        </div>

        {/* User Icon */}
        <div className="flex items-center">
          <div>
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={whiteuser}
              alt="User"
            />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
