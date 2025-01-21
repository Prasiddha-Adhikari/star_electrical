import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          <Link to="/">Star Electrical</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-gray-600 hover:text-orange-500'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-gray-600 hover:text-orange-500'
              }`
            }
          >
            Why Choose Us
          </NavLink>
          <NavLink
            to="/manufacturing"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-gray-600 hover:text-orange-500'
              }`
            }
          >
            Manufacturing
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-gray-600 hover:text-orange-500'
              }`
            }
          >
            About Us
          </NavLink>
          <Link
            to="/contact-us"
            className="border text-orange-600 border-orange-600 px-4 py-2 rounded hover:bg-orange-600 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-orange-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Show only when hamburger is open */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } sm:hidden absolute top-full left-0 w-full bg-white shadow-md`}
      >
        <div className="flex flex-col items-center gap-6 p-6 sm:p-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-gray-600 hover:text-orange-500'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-gray-600 hover:text-orange-500'
              }`
            }
          >
            Why Choose Us
          </NavLink>
          <NavLink
            to="/manufacturing"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-gray-600 hover:text-orange-500'
              }`
            }
          >
            Manufacturing
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-gray-600 hover:text-orange-500'
              }`
            }
          >
            About Us
          </NavLink>
          <Link
            to="/contact-us"
            className="border text-orange-600 border-orange-600 px-4 py-2 rounded hover:bg-orange-600 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
