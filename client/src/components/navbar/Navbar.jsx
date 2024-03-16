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
    switch (location.pathname) {
      case "/":
        return lobby;
      case "/rooms":
        return lobby1;
      case "/contact":
        return lobby2;
      default:
        return lobby3; 
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
          <NavLink exact to="/" className="text-white hover:text-d">
            HOME
          </NavLink>

          <NavLink
            to="/rooms"
            activeClassName="text-gray-300"
            className="text-white hover:text-d"
          >
            ROOMS
          </NavLink>

          <NavLink
            to="/services"
            activeClassName="text-gray-300"
            className="text-white hover:text-d"
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/contact"
            activeClassName="text-gray-300"
            className="text-white hover:text-d"
          >
            RESTAURANT
          </NavLink>

          <NavLink
            to="/offers"
            activeClassName="text-gray-300"
            className="text-white hover:text-d"
          >
            SPECIAL OFFERS
          </NavLink>

          <div className="relative inline-block" onMouseLeave={closeMenu}>
            <NavLink
              onMouseEnter={openMenu}
              className="text-white bg-transparent focus:outline-none hover:text-d"
            >
              SEE MORE
            </NavLink>
            {isOpen && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-48 rounded-lg ">
                {" "}
                <div className="py-1">
                  <NavLink
                    to="/option1"
                    activeClassName="text-gray-800 bg-gray-200"
                    className="block px-4 py-2 text-b hover:text-d "
                  >
                    GALLERY
                  </NavLink>
                  <NavLink
                    to="/option2"
                    activeClassName="text-gray-800 bg-gray-200"
                    className="block px-4 py-2 text-b hover:text-d"
                  >
                    CONTACT
                  </NavLink>
                  <NavLink
                    to="/option3"
                    activeClassName="text-gray-800 bg-gray-200"
                    className="block px-4 py-2 text-b hover:text-d"
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
              activeClassName="text-gray-300"
              className="text-white border-2 border-d -900 px-4 py-3 rounded-lg tracking-wider btn"
              style={{ width: "160px" }}
            >
              REGISTER
            </NavLink>
            <NavLink
              to="/login"
              activeClassName="text-accent-700"
              className="text-white bg-d -300 border-2 border-d -900 px-4 py-3 rounded-lg tracking-wider btn"
              style={{ width: "160px" }}
            >
              LOGIN
            </NavLink>
          </div>
        </div>
      </nav>
      <header className="flex justify-center items-center">
        <img src={getLobbyImage()}alt="lobby" className="w-full m-0" />
      </header>
    </div>
  );
}

export default Navbar;
