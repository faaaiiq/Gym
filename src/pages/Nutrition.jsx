import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaApple, FaUtensils, FaChartPie, FaCalculator, FaClock, FaUser } from 'react-icons/fa';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';
import UserMenu from '../components/UserMenu';

// Lazy load components with preload
const NutritionTips = lazy(() => import('../components/NutritionTips'));
const MacroCalculator = lazy(() => import('../components/MacroCalculator'));

// Preload components
const preloadComponents = () => {
  const promises = [
    import('../components/NutritionTips'),
    import('../components/MacroCalculator')
  ];
  Promise.all(promises);
};

const Nutrition = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activePlan, setActivePlan] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Preload components
    preloadComponents();
    
    // Reduce initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Memoize meal plans data to prevent unnecessary re-renders
  const mealPlans = useMemo(() => [
    {
      id: 1,
      name: 'Weight Loss Plan',
      description: 'Balanced meals designed to help you lose weight while maintaining energy levels.',
      duration: '4 weeks',
      calories: '1500-1800',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      meals: [
        {
          name: 'Breakfast',
          items: [
            { name: 'Oatmeal with Berries', calories: 300, protein: 8, carbs: 45, fat: 5 },
            { name: 'Greek Yogurt', calories: 120, protein: 12, carbs: 8, fat: 2 },
          ],
        },
        {
          name: 'Lunch',
          items: [
            { name: 'Grilled Chicken Salad', calories: 450, protein: 35, carbs: 15, fat: 12 },
            { name: 'Quinoa', calories: 220, protein: 8, carbs: 39, fat: 4 },
          ],
        },
        {
          name: 'Dinner',
          items: [
            { name: 'Salmon with Vegetables', calories: 400, protein: 30, carbs: 20, fat: 15 },
            { name: 'Brown Rice', calories: 200, protein: 5, carbs: 45, fat: 2 },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Muscle Gain Plan',
      description: 'High-protein meals to support muscle growth and recovery.',
      duration: '8 weeks',
      calories: '2500-3000',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      meals: [
        {
          name: 'Breakfast',
          items: [
            { name: 'Protein Pancakes', calories: 500, protein: 30, carbs: 60, fat: 12 },
            { name: 'Egg Whites', calories: 100, protein: 20, carbs: 0, fat: 0 },
          ],
        },
        {
          name: 'Lunch',
          items: [
            { name: 'Beef and Rice Bowl', calories: 600, protein: 45, carbs: 70, fat: 15 },
            { name: 'Mixed Vegetables', calories: 100, protein: 3, carbs: 20, fat: 0 },
          ],
        },
        {
          name: 'Dinner',
          items: [
            { name: 'Grilled Steak', calories: 500, protein: 50, carbs: 0, fat: 25 },
            { name: 'Sweet Potatoes', calories: 200, protein: 4, carbs: 45, fat: 0 },
          ],
        },
      ],
    },
  ], []);

  // Memoize the meal plan component to prevent unnecessary re-renders
  const MealPlanCard = useMemo(() => ({ plan }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-[20px] overflow-hidden cursor-pointer group"
      onClick={() => setActivePlan(plan.id === activePlan ? null : plan.id)}
    >
      <div className="h-[280px] relative overflow-hidden">
        <img
          src={plan.image}
          alt={plan.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent"></div>
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[26px] font-primary font-semibold text-white">{plan.name}</h3>
          <span className="px-4 py-2 text-sm rounded-full bg-gradient text-white font-medium">
            {plan.calories} kcal/day
          </span>
        </div>
        <p className="text-[15px] text-body-sm mb-6">{plan.description}</p>
        <div className="flex items-center text-body-sm mb-6">
          <FaClock className="mr-2 text-accent" />
          <span>{plan.duration}</span>
        </div>
        <AnimatePresence mode="wait">
          {activePlan === plan.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {plan.meals.map((meal, index) => (
                <div key={index} className="bg-[rgba(255,255,255,0.05)] rounded-[15px] p-6">
                  <h4 className="text-[20px] font-primary font-semibold text-white mb-4">{meal.name}</h4>
                  <div className="space-y-3">
                    {meal.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between">
                        <div>
                          <p className="text-[16px] font-medium text-white">{item.name}</p>
                          <p className="text-[14px] text-body-sm">
                            {item.calories} kcal | P: {item.protein}g | C: {item.carbs}g | F: {item.fat}g
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  ), [activePlan]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  return (
    <PageWrapper>
      {/* Header with User Menu */}
      <div className="fixed top-0 right-0 z-50 p-4">
        <UserMenu />
      </div>

      {/* Hero Section */}
      <Section
        dark
        gradient
        pattern
        className="relative min-h-[30vh] flex items-center justify-center text-center pb-8"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          >
            Nutrition & Diet Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Fuel your fitness journey with proper nutrition and expert guidance
          </motion.p>
        </div>
      </Section>

      {/* Meal Plans Section */}
      <Section className="pt-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-gray-800 rounded-xl p-8 mb-12"
          >
            <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400">
              Featured Meal Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {mealPlans.map((plan) => (
                <MealPlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Nutrition Tips Section */}
      <Section
        dark
        pattern
      >
        <Suspense 
          fallback={
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
              className="animate-pulse h-48 bg-gray-800 rounded-xl mb-12"
            />
          }
        >
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="max-w-7xl mx-auto"
          >
            <NutritionTips />
          </motion.div>
        </Suspense>
      </Section>

      {/* Macro Calculator Section */}
      <Section>
        <Suspense 
          fallback={
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="animate-pulse h-48 bg-gray-800 rounded-xl"
            />
          }
        >
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="max-w-7xl mx-auto"
          >
            <MacroCalculator />
          </motion.div>
        </Suspense>
      </Section>
    </PageWrapper>
  );
};

export default Nutrition; 