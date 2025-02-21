// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import Login from "../pages/Login"; // Import the LoginForm component

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true); // Open the login modal
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false); // Close the login modal
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-extrabold text-green-700 hover:text-green-900 transition-all duration-300"
            >
              Shambalink
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 font-semibold hover:text-green-600 transition-all duration-300 transform hover:scale-110 hover:translate-x-2 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-semibold hover:text-green-600 transition-all duration-300 transform hover:scale-110 hover:translate-x-2 hover:underline"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 font-semibold hover:text-green-600 transition-all duration-300 transform hover:scale-110 hover:translate-x-2 hover:underline"
            >
              Services
            </Link>
            <button
              onClick={scrollToContact}
              className="text-gray-700 font-semibold hover:text-green-600 transition-all duration-300 transform hover:scale-110 hover:translate-x-2 hover:underline"
            >
              Contact
            </button>
            <button
              onClick={openLoginModal} // Open the login modal on click
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-green-600 focus:outline-none transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2">
              <Link
                href="/"
                className="block text-gray-700 font-semibold hover:text-green-600 px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:translate-x-2 hover:underline"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 font-semibold hover:text-green-600 px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:translate-x-2 hover:underline"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-gray-700 font-semibold hover:text-green-600 px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:translate-x-2 hover:underline"
              >
                Services
              </Link>
              <button
                onClick={scrollToContact}
                className="block text-gray-700 font-semibold hover:text-green-600 px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:translate-x-2 hover:underline"
              >
                Contact
              </button>
              <button
                onClick={openLoginModal} // Open the login modal on click
                className="block bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full text-center hover:shadow-xl transition-all duration-300"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <Modal isVisible={isLoginModalOpen} onClose={closeLoginModal}>
        <Login /> {/* Render the LoginForm inside the modal */}
      </Modal>
    </nav>
  );
};

export default Navbar;
