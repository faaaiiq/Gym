import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, children }) => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/header-pattern.svg')] opacity-5" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 