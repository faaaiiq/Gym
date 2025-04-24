import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                className="relative w-10 h-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaDumbbell className="w-6 h-6 text-cyan-400" />
                </div>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                FITNESS FREAK
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your body, transform your life. Join us on your fitness journey today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick('/')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/classes')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Classes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/trainers')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Trainers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-semibold text-white">Address:</span> 123 Fitness Street, Gym City
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Phone:</span> +1 234 567 890
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Email:</span> info@fitnessfreak.com
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">Hours:</span> Mon-Sun: 6:00 AM - 10:00 PM
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fitness Freak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 