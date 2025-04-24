import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/images/logo.png"
              alt="Fitness Freak Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400">
              Fitness Freak
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/trainers"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Trainers
            </Link>
            <Link
              to="/classes"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Classes
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 