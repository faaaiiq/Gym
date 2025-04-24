import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaApple, FaUtensils, FaChartPie } from 'react-icons/fa';

const nutritionTips = [
  {
    id: 1,
    title: 'Stay Hydrated',
    description: 'Drink at least 8 glasses of water daily to maintain optimal performance.',
    icon: <FaApple className="text-pink-500" />,
  },
  {
    id: 2,
    title: 'Balanced Macros',
    description: 'Aim for 40% carbs, 30% protein, and 30% fat in your daily diet.',
    icon: <FaChartPie className="text-purple-400" />,
  },
  {
    id: 3,
    title: 'Meal Timing',
    description: 'Eat every 3-4 hours to maintain energy levels and metabolism.',
    icon: <FaUtensils className="text-pink-500" />,
  },
];

const NutritionTips = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.7 }}
      className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text mb-8">
        Essential Nutrition Tips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {nutritionTips.map((tip) => (
          <motion.div
            key={tip.id}
            whileHover={{ scale: 1.05 }}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
              {tip.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{tip.title}</h3>
            <p className="text-gray-400">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NutritionTips; 