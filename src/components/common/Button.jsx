import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  icon,
  animate = true 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25",
    secondary: "bg-transparent hover:bg-white/5 text-white border border-gray-700",
    outline: "bg-transparent text-white hover:bg-white/5"
  };

  const content = (
    <span className="flex items-center space-x-2">
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </span>
  );

  const buttonProps = {
    className: `${baseStyles} ${variants[variant]} ${className}`,
    onClick,
  };

  if (animate) {
    buttonProps.whileHover = { scale: 1.05 };
    buttonProps.whileTap = { scale: 0.95 };
  }

  if (to) {
    return (
      <motion.div {...buttonProps}>
        <Link to={to}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...buttonProps}>
      {content}
    </motion.button>
  );
};

export default Button; 