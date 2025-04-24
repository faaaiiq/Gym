import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const MacroCalculator = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    activityLevel: 'Sedentary'
  });

  const [macros, setMacros] = useState(null);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const calculateMacros = useCallback(() => {
    const { weight, height, age, activityLevel } = formData;
    
    // Basic BMR calculation using Mifflin-St Jeor Equation
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    
    // Activity multiplier
    const activityMultipliers = {
      Sedentary: 1.2,
      'Lightly Active': 1.375,
      'Moderately Active': 1.55,
      'Very Active': 1.725,
      'Extremely Active': 1.9
    };
    
    const tdee = bmr * activityMultipliers[activityLevel];
    
    setMacros({
      calories: Math.round(tdee),
      protein: Math.round((tdee * 0.3) / 4), // 30% protein
      carbs: Math.round((tdee * 0.4) / 4),   // 40% carbs
      fat: Math.round((tdee * 0.3) / 9)      // 30% fat
    });
  }, [formData]);

  return (
    <motion.div
      variants={fadeIn('up', 0.6)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.7 }}
      className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Macro Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-cyan-400 focus:ring-cyan-400"
              placeholder="Enter your weight"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-cyan-400 focus:ring-cyan-400"
              placeholder="Enter your height"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-cyan-400 focus:ring-cyan-400"
              placeholder="Enter your age"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Activity Level
            </label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleInputChange}
              className="w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-cyan-400 focus:ring-cyan-400"
            >
              <option>Sedentary</option>
              <option>Lightly Active</option>
              <option>Moderately Active</option>
              <option>Very Active</option>
              <option>Extremely Active</option>
            </select>
          </div>
          <button
            onClick={calculateMacros}
            className="w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            Calculate Macros
          </button>
        </div>
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Your Daily Macros</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Calories</span>
              <span className="text-white font-medium">{macros ? `${macros.calories} kcal` : '-'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Protein</span>
              <span className="text-white font-medium">{macros ? `${macros.protein}g` : '-'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Carbs</span>
              <span className="text-white font-medium">{macros ? `${macros.carbs}g` : '-'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Fat</span>
              <span className="text-white font-medium">{macros ? `${macros.fat}g` : '-'}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MacroCalculator; 