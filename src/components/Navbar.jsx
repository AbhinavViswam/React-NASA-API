import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-500">Space Tour</h1>

          {/* Hamburger Button: Visible on mobile and tablet screens */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 focus:outline-none hover:text-cyan-400 transition duration-200 w-8 h-8"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full"
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
                className="w-full h-full"
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

        {/* Links */}
        <ul
          className={`lg:flex lg:flex-row lg:space-x-10 lg:py-0 lg:space-y-0 flex-col items-center justify-center space-y-6 py-8 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl sm:text-2xl font-semibold hover:text-cyan-400 transition duration-200 ${
                  isActive ? "text-cyan-500" : "text-gray-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apod"
              className={({ isActive }) =>
                `text-xl sm:text-2xl font-semibold hover:text-cyan-400 transition duration-200 ${
                  isActive ? "text-cyan-500" : "text-gray-300"
                }`
              }
            >
              Astronomy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/planet-details"
              className={({ isActive }) =>
                `text-xl sm:text-2xl font-semibold hover:text-cyan-400 transition duration-200 ${
                  isActive ? "text-cyan-500" : "text-gray-300"
                }`
              }
            >
              Planet Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/star-details"
              className={({ isActive }) =>
                `text-xl sm:text-2xl font-semibold hover:text-cyan-400 transition duration-200 ${
                  isActive ? "text-cyan-500" : "text-gray-300"
                }`
              }
            >
              Star Details
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
