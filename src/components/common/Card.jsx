import { motion } from 'framer-motion';

const Card = ({ 
  icon, 
  title, 
  description, 
  className = "", 
  onClick,
  animate = true,
  delay = 0 
}) => {
  const content = (
    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 ${className}`}>
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-gray-400">{description}</p>
      )}
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="h-full"
    >
      {content}
    </motion.div>
  );
};

export default Card; 