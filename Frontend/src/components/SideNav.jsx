// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="bg-gray-300 p-4 h-full w-64 flex flex-col">
      <div className="mb-4">
        <Link
          to="/home"
          className="block py-2 px-4 rounded transition duration-300 hover:bg-yellow-300"
        >
          Home
        </Link>
      </div>
      <div className="mb-4">
        <Link
          to="/categories"
          className="block py-2 px-4 rounded transition duration-300 hover:bg-yellow-300"
        >
          Category
        </Link>
      </div>
      <div>
        <Link
          to="/products"
          className="block py-2 px-4 rounded transition duration-300 hover:bg-yellow-300"
        >
          Products
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
