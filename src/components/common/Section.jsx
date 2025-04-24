import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = "", 
  title, 
  subtitle,
  gradient = false,
  pattern = false,
  dark = false,
  fullWidth = false
}) => {
  return (
    <section className={`w-full py-20 ${dark ? 'bg-gray-900' : 'bg-gray-800'} ${gradient ? 'bg-gradient-to-b from-gray-900 to-gray-800' : ''} ${className}`}>
      {pattern && (
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      )}
      
      <div className={`relative z-10 max-w-[1920px] mx-auto ${!fullWidth ? 'px-4 lg:px-8' : ''}`}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default Section; 