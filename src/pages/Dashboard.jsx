import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaChartLine, FaCalendarAlt, FaDumbbell, FaHeartbeat, FaTrophy, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Sample member data
  const memberData = {
    name: 'John Doe',
    membershipType: 'Premium',
    joinDate: '2024-01-15',
    nextPayment: '2024-05-15',
    profileImage: '/profile.jpg',
    stats: {
      workoutsThisWeek: 4,
      totalWorkouts: 32,
      caloriesBurned: 1200,
      minutesExercised: 180,
      streak: 5,
    },
    upcomingClasses: [
      {
        id: 1,
        name: 'Morning Yoga',
        date: '2024-04-23',
        time: '06:00 AM',
        trainer: 'Emma Wilson',
      },
      {
        id: 2,
        name: 'HIIT Training',
        date: '2024-04-24',
        time: '05:00 PM',
        trainer: 'Chris Brown',
      },
    ],
    recentAchievements: [
      {
        id: 1,
        title: '5 Day Streak',
        description: 'Worked out for 5 consecutive days',
        date: '2024-04-22',
        icon: <FaTrophy className="text-yellow-500" />,
      },
      {
        id: 2,
        title: 'Personal Best',
        description: 'New record in deadlift: 200kg',
        date: '2024-04-20',
        icon: <FaDumbbell className="text-indigo-500" />,
      },
    ],
  };

  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="pt-16">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
                <img
                  src={memberData.profileImage}
                  alt={memberData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{memberData.name}</h1>
                <p className="text-gray-400">{memberData.membershipType} Member</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <FaUser className="mr-2" />
                Profile
              </Link>
              <Link
                to="/settings"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <FaCog className="mr-2" />
                Settings
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <FaDumbbell className="text-indigo-600 text-xl" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Workouts This Week</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {memberData.stats.workoutsThisWeek}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-full">
                  <FaHeartbeat className="text-green-600 text-xl" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Calories Burned</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {memberData.stats.caloriesBurned}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full">
                  <FaChartLine className="text-blue-600 text-xl" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Minutes Exercised</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {memberData.stats.minutesExercised}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <FaTrophy className="text-yellow-600 text-xl" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Current Streak</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {memberData.stats.streak} days
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Classes and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Classes */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Classes</h2>
            <div className="space-y-4">
              {memberData.upcomingClasses.map((cls) => (
                <motion.div
                  key={cls.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{cls.name}</h3>
                    <p className="text-sm text-gray-500">
                      {cls.date} at {cls.time}
                    </p>
                    <p className="text-sm text-gray-500">Trainer: {cls.trainer}</p>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    View Details
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recent Achievements */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {memberData.recentAchievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start p-4 bg-gray-50 rounded-lg"
                >
                  <div className="p-2 bg-white rounded-full mr-4">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 