import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SignOutButton, UserButton, useClerk } from "@clerk/clerk-react";
import LogoImage from "../../assets/logo.svg";
import lobby from "../../assets/lobby.svg";
import lobby1 from "../../assets/rooms.svg";
import Cookies from "js-cookie";
import "./Navbar.scss";

function Navbar() {
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
  const [isOpenSeeMoreMenu, setIsOpenSeeMoreMenu] = useState(false);
  const location = useLocation();
  const { signOut, user } = useClerk();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCustomAuthenticated, setIsCustomAuthenticated] = useState(false);
  const [showGalleryDescription, setShowGalleryDescription] = useState(false);

  useEffect(() => {
    // Verifica la presencia del token personalizado en las cookies
    const token = Cookies.get("token");
    setIsCustomAuthenticated(!!token);
  }, []);

  useEffect(() => {
    setShowGalleryDescription(location.pathname === "/gallery");
  }, [location.pathname]);

  useEffect(() => {
    const handleTokenChange = () => {
      const token = Cookies.get("token");
      setIsLoggedIn(!!token);
    };
    window.addEventListener("storage", handleTokenChange);
    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  const toggleProfileMenu = () => {
    setIsOpenProfileMenu(!isOpenProfileMenu);
    setIsOpenSeeMoreMenu(false);
  };

  const toggleSeeMoreMenu = () => {
    setIsOpenSeeMoreMenu(!isOpenSeeMoreMenu);
    setIsOpenProfileMenu(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getLobbyImage = () => {
    if (location.pathname === "/") {
      return lobby;
    } else if (location.pathname === "/rooms") {
      return lobby1;
    } else if (location.pathname === "/gallery") {
      return 'https://lanzarote-resorts.com/images/hotel_rubicon_palace.jpg';
    } else {
      return null;
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut(); // Cierra la sesión con Clerk
      Cookies.remove("token"); // Elimina el token personalizado
      setIsCustomAuthenticated(false); // Actualiza el estado de autenticación personalizada
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setIsLoading(false);
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
            exact
            to="/"
            className={`text-white hover:text-d  transition-colors${
              location.pathname === "/" ? "active text-d" : ""
            }`}
          >
            HOME
          </NavLink>
          {showGalleryDescription && (
  <div className="header-description absolute left-20 text-white text-left z-10" style={{ top: "calc(10% + 100px)" }}>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Gallery</h1>
    <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-normal md:leading-relaxed lg:leading-normal xl:leading-relaxed">
      See the image gallery of the Hotel <br/> Esmeralda Resort & Spa and <br/> discover why we are 
      one of the <br/> best hotels in Buenos Aires for <br/> business and leisure stays
    </p>
  </div>
)}

          <NavLink
            to="/rooms"
            className={`text-white hover:text-d ${
              location.pathname === "/rooms"
                ? "active text-d color transition-colors"
                : ""
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
            className={`text-white hover:text-d transition-colors${
              location.pathname === "/offers" ? "active text-d" : ""
            }`}
          >
            SPECIAL OFFERS
          </NavLink>

          <div className="relative inline-block" onMouseLeave={closeMenu}>
            <button
              onMouseEnter={toggleSeeMoreMenu}
              className={`block px-4 py-2 text-b hover:text-d`}
              style={{ fontSize: "1.25rem" }}
            >
              SEE MORE
            </button>
            {isOpenSeeMoreMenu && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-48 rounded-lg shadow-lg bg-v borde">
                <div className="py-1">
                  <NavLink
                    to="/gallery"
                    className={`block px-4 py-2 text-b hover:text-d`}
                  >
                    GALLERY
                  </NavLink>
                  <NavLink
                    to="/option2"
                    className={`block px-4 py-2 text-b hover:text-d`}
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

          <div className="flex space-x-16 ">
            {isLoading ? (
              <div className="custom-loader"></div>
            ) : (
              <>
                {user || isCustomAuthenticated ? (
                  <div className="font-bold text-white flex items-center justify-center">
                    <button
                      className="flex items-center space-x-2"
                      onClick={toggleProfileMenu}
                    >
                      <img
                        alt="Profile"
                        className="h-8 w-8 rounded-full"
                        src="https://www.gravatar.com/avatar/"
                      />
                      <h1 className="ml-2 text-lg">Hi</h1>
                    </button>
                    {isOpenProfileMenu && (
                      <div className="absolute top-28 right-3 bg-white border border-gray-300 rounded shadow-md">
                        <ul className="py-2">
                          <li>
                            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                              Manage Account
                            </button>
                          </li>
                          <li>
                            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                              Saved
                            </button>
                          </li>
                          <li>
                            <button
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                              onClick={handleSignOut}
                            >
                              Sign Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <NavLink
                      to="/register"
                      className={`text-white w-full sm:w-40 border-2 border-yellow-500 -900 px-4 py-3 rounded-lg tracking-wider btn ${
                        location.pathname === "/register" ? "active" : ""
                      }`}
                    >
                      <div className="ml-5">REGISTER</div>
                    </NavLink>
                    <NavLink
                      to="/login"
                      className={`text-white w-full sm:w-40 bg-yellow-500 -300 border-2 border-yellow-500  hover:bg-yellow-600 hover:border-yellow-600  -900 px-4 py-3 rounded-lg tracking-wider btn ${
                        location.pathname === "/login" ? "active" : ""
                      }`}
                    >
                      <div className=" ml-10 ">LOGIN</div>
                    </NavLink>
                  </>
                )}
              </>
            )}
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
