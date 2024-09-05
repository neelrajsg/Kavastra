import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4 px-4 sm:px-10 z-50 min-h-[70px]">
      <div className="relative flex items-center justify-between">
        <a href="javascript:void(0)">
          <img src="../k.svg" alt="logo" className="w-36 bg-transparent" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 ml-10 mt-2">
          <a
            href="#home"
            className="hover:text-blue-600 text-blue-600 font-semibold transition-all"
          >
            Home
          </a>
          <a
            href="#about-section"
            className="hover:text-blue-600 font-semibold transition-all"
          >
            About
          </a>
          <a
            href="#features"
            className="hover:text-blue-600 font-semibold transition-all"
          >
            Features
          </a>
          <a
            href="#wholesalers"
            className="hover:text-blue-600 font-semibold transition-all"
          >
            Wholesalers
          </a>
          <a
            href="#retailers"
            className="hover:text-blue-600 font-semibold transition-all"
          >
            Retailers
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Enquire Button */}
        <div className="ml-auto hidden lg:block">
          <button className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
            Enquire
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 py-4">
            <ul className="flex flex-col space-y-4 px-6">
              <li>
                <a href="#home" className="block text-blue-600 font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-section"
                  className="block text-black font-semibold"
                >
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="block text-black font-semibold">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#wholesalers"
                  className="block text-black font-semibold"
                >
                  Wholesalers
                </a>
              </li>
              <li>
                <a href="#retailers" className="block text-black font-semibold">
                  Retailers
                </a>
              </li>
            </ul>

            <div className="px-6 mt-4">
              <button className=" px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
                Enquire
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
