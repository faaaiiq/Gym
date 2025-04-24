import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <button
                onClick={() => handleLinkClick('/')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('/about')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                About Us
              </button>
              <button
                onClick={() => handleLinkClick('/membership')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Membership
              </button>
              <button
                onClick={() => handleLinkClick('/classes')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Classes
              </button>
              <button
                onClick={() => handleLinkClick('/trainers')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Trainers
              </button>
              <button
                onClick={() => handleLinkClick('/store')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Store
              </button>
              <button
                onClick={() => handleLinkClick('/nutrition')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Nutrition
              </button>
              <button
                onClick={() => handleLinkClick('/contact')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <div className="flex space-x-4">
                <button
                  onClick={() => handleLinkClick('/login')}
                  className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300"
                >
                  Login
                </button>
                <button
                  onClick={() => handleLinkClick('/register')}
                  className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300"
                >
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-900 z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <FaDumbbell className="w-6 h-6 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  FITNESS FREAK
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleLinkClick('/')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('/about')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                About Us
              </button>
              <button
                onClick={() => handleLinkClick('/membership')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Membership
              </button>
              <button
                onClick={() => handleLinkClick('/classes')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Classes
              </button>
              <button
                onClick={() => handleLinkClick('/trainers')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Trainers
              </button>
              <button
                onClick={() => handleLinkClick('/store')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Store
              </button>
              <button
                onClick={() => handleLinkClick('/nutrition')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Nutrition
              </button>
              <button
                onClick={() => handleLinkClick('/contact')}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Contact
              </button>
              {isAuthenticated ? (
                <UserMenu className="mt-4" />
              ) : (
                <>
                  <button
                    onClick={() => handleLinkClick('/login')}
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleLinkClick('/register')}
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 