"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-green-600 transition-all transform hover:scale-110"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-green-600 transition-all transform hover:scale-110"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-green-600 transition-all transform hover:scale-110"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-green-600 transition-all transform hover:scale-110"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;