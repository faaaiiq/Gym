import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaSwimmer, FaBiking, FaOm, FaFire, FaChartLine, FaCalendarAlt } from 'react-icons/fa';

const WorkoutPlans = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const categories = [
    { id: 'all', name: 'All Plans', icon: <FaDumbbell /> },
    { id: 'strength', name: 'Strength Training', icon: <FaDumbbell /> },
    { id: 'cardio', name: 'Cardio', icon: <FaRunning /> },
    { id: 'swimming', name: 'Swimming', icon: <FaSwimmer /> },
    { id: 'cycling', name: 'Cycling', icon: <FaBiking /> },
    { id: 'yoga', name: 'Yoga', icon: <FaOm /> },
  ];

  const workoutPlans = [
    {
      id: 1,
      name: 'Beginner Strength Program',
      category: 'strength',
      difficulty: 'Beginner',
      duration: '8 weeks',
      description: 'Perfect for those new to strength training. Build a solid foundation with proper form and technique.',
      exercises: [
        { name: 'Squats', sets: 3, reps: '10-12' },
        { name: 'Push-ups', sets: 3, reps: '8-10' },
        { name: 'Dumbbell Rows', sets: 3, reps: '10-12' },
        { name: 'Plank', sets: 3, duration: '30-45 seconds' },
      ],
      image: '/workout1.jpg',
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      category: 'cardio',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      description: 'High-intensity interval training to boost your metabolism and burn calories.',
      exercises: [
        { name: 'Jump Rope', sets: 4, duration: '30 seconds' },
        { name: 'Burpees', sets: 4, reps: '10-12' },
        { name: 'Mountain Climbers', sets: 4, duration: '30 seconds' },
        { name: 'High Knees', sets: 4, duration: '30 seconds' },
      ],
      image: '/workout2.jpg',
    },
    {
      id: 3,
      name: 'Yoga Flow',
      category: 'yoga',
      difficulty: 'All Levels',
      duration: '6 weeks',
      description: 'Improve flexibility, balance, and mindfulness with this comprehensive yoga program.',
      exercises: [
        { name: 'Sun Salutations', sets: 3, duration: '5 minutes' },
        { name: 'Warrior Poses', sets: 2, duration: '30 seconds each' },
        { name: 'Tree Pose', sets: 2, duration: '30 seconds each side' },
        { name: 'Savasana', sets: 1, duration: '5 minutes' },
      ],
      image: '/workout3.jpg',
    },
  ];

  const filteredPlans = selectedCategory === 'all'
    ? workoutPlans
    : workoutPlans.filter(plan => plan.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/workout-hero.jpg)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Workout Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Choose from our expert-designed workout plans to achieve your fitness goals
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Plans Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-600">
                      {plan.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{plan.duration}</span>
                  </div>
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Details Modal */}
      {selectedPlan && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlan(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 overflow-hidden">
              <img
                src={selectedPlan.image}
                alt={selectedPlan.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedPlan.name}</h2>
                <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-600">
                  {selectedPlan.difficulty}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{selectedPlan.description}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercises</h3>
              <div className="space-y-4">
                {selectedPlan.exercises.map((exercise, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                      <p className="text-sm text-gray-500">
                        {exercise.reps ? `${exercise.sets} sets of ${exercise.reps} reps` : `${exercise.sets} sets of ${exercise.duration}`}
                      </p>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700">
                      <FaChartLine />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Close
                </button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Start Plan
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WorkoutPlans; 