import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";
import lobby from "../../assets/lobby.svg";
import lobby1 from "../../assets/rooms.svg";
import { SignOutButton, UserButton, useClerk } from "@clerk/clerk-react";

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
    } else {
      return lobby1;
    }
 }

 const { user } = useClerk();
 console.log(user);

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
          <NavLink exact to="/" className="text-white hover:text-d transition-colors">
            HOME
          </NavLink>

          <NavLink
            to="/rooms"
            activeClassName="text-gray-300"
            className="text-white hover:text-d transition-colors"
          >
            ROOMS
          </NavLink>

          <NavLink
            to="/services"
            activeClassName="text-gray-300"
            className="text-white hover:text-d transition-colors"
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/restaurant"
            activeClassName="text-gray-300"
            className="text-white hover:text-d transition-colors"
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
              className="text-white bg-transparent focus:outline-none hover:text-d transition-colors"
            >
              SEE MORE
            </NavLink>
            {isOpen && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-48 rounded-lg ">
                <div className="py-1">
                 <NavLink
                    to="/gallery"
                    activeClassName="text-gray-800 bg-gray-200"
                    className="block px-4 py-2 text-b hover:text-d transition-colors"
                 >
                    GALLERY
                 </NavLink>
                 <NavLink
                    to="/option2"
                    activeClassName="text-gray-800 bg-gray-200"
                    className="block px-4 py-2 text-b hover:text-d transition-colors"
                 >
                    CONTACT
                 </NavLink>
                 <NavLink
                    to="/option3"
                    activeClassName="text-gray-800 bg-gray-200"
                    className="block px-4 py-2 text-b hover:text-d transition-colors"
                 >
                    FAQs
                 </NavLink>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-16 ">
            <NavLink
              to="/register"
              activeClassName="text-gray-300"
              className=" text-white border-2 border-d -900 px-4 py-3 rounded-lg tracking-wider btn hover:bg-slate-900 transition-colors"
              style={{ width: "160px" }}
            >
              <div className="ml-5">

              REGISTER
              </div>
            </NavLink>
            <NavLink
              to="/login"
              activeClassName="text-accent-700"
              className="text-white bg-d -300 border-2 border-d -900 px-4 py-3 rounded-lg tracking-wider btn hover:bg-amber-400 transition-colors"
              style={{ width: "160px" }}
            >
              <div className=" ml-10 ">

              LOGIN
              </div>
            </NavLink>
            {user && (
              <NavLink>
                <div className="font-bold text-white flex items-center justify-center">
                 <UserButton/>
                 <h1 className="ml-2">Hi, {user.firstName}</h1>
                </div>
                
                <SignOutButton>
                  <button className="text-white ">
                  Sign out</button>
                </SignOutButton>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <header className="flex justify-center items-center">
        <img src={getLobbyImage()} alt="Lobby" className="w-full" />
      </header>
    </div>
 );
}

export default Navbar;
