"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="text-xl md:text-2xl font-bold text-gray-700">Dell Laptops</div>
          <div className="md:hidden">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-base font-medium">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a></li>
            <li><a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-20">
            <ul className="flex flex-col items-center space-y-4 py-4 text-base font-medium">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>Features</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-16 bg-gradient-to-r from-blue-100 to-blue-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4 leading-snug">
            Unleash Your Productivity with Dell
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Discover the power and performance of Dell laptops, designed to elevate your productivity and keep you ahead.
          </p>
          <a href="#buy" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-md transition">
            Buy Now
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image.png"
            alt="Dell Laptop"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

{/* Features Section */}
<section id="features" className="py-16 px-6 md:px-12 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Dell?</h2>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Unmatched Performance</h3>
        <p className="text-gray-600">Powered by the latest processors, Dell laptops handle all your tasks with ease and speed.</p>
      </div>
      <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Elegant Design</h3>
        <p className="text-gray-600">Sleek and modern design that not only looks good but is built to last.</p>
      </div>
      <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">24/7 Support</h3>
        <p className="text-gray-600">Our dedicated support team is here to help you anytime, anywhere.</p>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section id="buy" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Own a Dell Laptop?</h2>
        <p className="text-lg text-gray-700 mb-6">Experience the best in performance, design, and support. Order your Dell laptop today.</p>
        <a href="#buy" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium shadow-md transition">
          Buy Dell Laptop
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500 text-sm border-t border-gray-200">
        &copy; 2024 Dell Laptops. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
