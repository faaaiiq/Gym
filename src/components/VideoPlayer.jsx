import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

const VideoPlayer = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative px-8 py-4 rounded-lg font-semibold overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 group-hover:bg-gradient-to-l animate-pulse"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 opacity-75 group-hover:bg-gradient-to-l" style={{ animationDelay: '150ms' }}></span>
        <span className="relative flex items-center text-white">
          Watch Video
          <FaPlay className="ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                <button
                  onClick={handleClose}
                  className="absolute top-16 right-4 z-50 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-600 rounded-full p-2 transition-all duration-300 shadow-lg"
                >
                  <FaTimes className="w-5 h-5 text-white" />
                </button>
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="Gym Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoPlayer; 