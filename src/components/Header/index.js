import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setNavbar(!navbar);
  const handleClose = () => setNavbar(!navbar);

  return (
    <div className="w-screen h-[80px] z-10 bg-transparent fixed drop-shadow-lg">
      <div className="px-2 flex justify-around items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl font-montserrat">
            Landify
          </h1>
          <ul className="hidden md:flex text-xl font-montserrat">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Product
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                Solutions
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Resources
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="bg-purple-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Subscribe
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!navbar ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!navbar ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
