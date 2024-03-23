import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";
import lobby from "../../assets/lobby.svg";
import lobby1 from "../../assets/rooms.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const reloadPage = () => {
    window.location.reload();
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getLobbyImage = () => {
    if (location.pathname === "/") {
      return lobby;
    } else if (location.pathname === "/rooms") {
      return lobby1;
    } else {
      return null;
    }
  };

  return (
    <div className="nav-container">
      <nav className="bg-v p-2">
        <div className="max-w-full px-6 mx-auto flex flex-wrap justify-around items-center lg:max-w-8xl">
          <img
            src={LogoImage}
            alt="Logo"
            className="h-40 cursor-pointer"
            onClick={reloadPage}
          />
          <NavLink
            to="/"
            className={`text-white hover:text-d ${
              location.pathname === "/" ? "active text-d" : ""
            }`}
          >
            HOME
          </NavLink>

          <NavLink
            to="/rooms"
            className={`text-white hover:text-d ${
              location.pathname === "/rooms" ? "active text-d" : ""
            }`}
          >
            ROOMS
          </NavLink>

          <NavLink
            to="/services"
            className={`text-white hover:text-d ${
              location.pathname === "/services" ? "active text-d" : ""
            }`}
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/restaurant"
            className={`text-white hover:text-d ${
              location.pathname === "/restaurant" ? "active text-d" : ""
            }`}
          >
            RESTAURANT
          </NavLink>

          <NavLink
            to="/offers"
            className={`text-white hover:text-d ${
              location.pathname === "/offers" ? "active text-d" : ""
            }`}
          >
            SPECIAL OFFERS
          </NavLink>

          <div className="relative inline-block" onMouseLeave={closeMenu}>
            <NavLink
              onMouseEnter={openMenu}
              className="text-white bg-transparent  hover:text-d"
            >
              SEE MORE
            </NavLink>
            {isOpen && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-48 rounded-lg ">
                <div className="py-1">
                  <NavLink
                    to="/gallery"
                    className={`block px-4 py-2 text-b hover:text-d ${
                      location.pathname === "/gallery" ? "active" : ""
                    }`}
                  >
                    GALLERY
                  </NavLink>
                  <NavLink
                    to="/option2"
                    className={`block px-4 py-2 text-b hover:text-d ${
                      location.pathname === "/option2" ? "active" : ""
                    }`}
                  >
                    CONTACT
                  </NavLink>
                  <NavLink
                    to="/option3"
                    className={`block px-4 py-2 text-b hover:text-d ${
                      location.pathname === "/option3" ? "active" : ""
                    }`}
                  >
                    FAQs
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-16">
            <NavLink
              to="/register"
              className={`text-white w-full sm:w-40 border-2 border-d -900 px-4 py-3 rounded-lg tracking-wider btn ${
                location.pathname === "/register" ? "active" : ""
              }`}
            >
              REGISTER
            </NavLink>
            <NavLink
              to="/login"
              className={`text-white w-full sm:w-40 bg-d -300 border-2 border-d -900 px-4 py-3 rounded-lg tracking-wider btn ${
                location.pathname === "/login" ? "active" : ""
              }`}
            >
              LOGIN
            </NavLink>
          </div>
        </div>
      </nav>
      <header className="flex justify-center items-center">
        <img src={getLobbyImage()} className="w-full" />
      </header>
    </div>
  );
}

export default Navbar;
