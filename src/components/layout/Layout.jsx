import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

// Page wrapper component for consistent page transitions and styling
const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export { PageWrapper };

export default Layout; 