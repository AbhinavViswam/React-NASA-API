import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex bg-gray-800 text-white shadow-lg min-h-[8vh] relative lg:min-h-[15vh]">
      <h1 className="font-black text-6xl flex items-center justify-center w-full lg:w-full">Space Tour</h1>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center justify-center px-4">
        <button onClick={toggleMenu} className="text-6xl">
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`lg:flex flex-col lg:flex-row gap-8 text-4xl lg:text-2xl ${isMenuOpen ? 'flex' : 'hidden'} lg:block absolute lg:relative top-full lg:top-0 left-0 w-full bg-gray-800 py-10 lg:py-0`}
      >
        <div className="flex flex-col lg:flex-row items-center w-full gap-6 lg:gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500' : 'text-white'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apod"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500' : 'text-white'
              }
            >
              Astronomy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/planet-details"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500' : 'text-white'
              }
            >
              Planet Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/star-details"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500' : 'text-white'
              }
            >
              Star Details
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
