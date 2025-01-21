import React from 'react';
import './ani.css';
import ball from '../assets/1.jpeg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${ball})` }} // Using the imported image
    >
      {/* Overlay to dim the background image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content on top of the image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to
        </h1>
        <div className="flex items-center justify-center">
          <p className="text text-2xl sm:text-3xl md:text-5xl font-bold text-orange-600">
            Star Electrical
          </p>
        </div>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl">
          Delivering quality products and services that adhere to national and
          international standards with a commitment to safety and customer satisfaction.
        </p>
        <Link to="/contact-us">
          <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
