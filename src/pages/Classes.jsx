import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaUser, FaDumbbell, FaCalendar, FaTimes, FaCheck, FaTrash, FaCheckCircle } from 'react-icons/fa';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const classCategories = [
  'All Classes',
  'Strength Training',
  'Cardio',
  'Yoga',
  'HIIT',
  'Pilates',
  'Cycling'
];

const classes = [
  {
    id: 1,
    name: 'Power Lifting',
    category: 'Strength Training',
    instructor: 'John Smith',
    time: '8:00 AM - 9:00 AM',
    days: 'Mon, Wed, Fri',
    capacity: 15,
    level: 'Intermediate',
    description: 'Build strength and power with professional guidance on proper lifting techniques.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 2,
    name: 'Spin Class',
    category: 'Cycling',
    instructor: 'Sarah Johnson',
    time: '7:00 AM - 8:00 AM',
    days: 'Tue, Thu',
    capacity: 20,
    level: 'All Levels',
    description: 'High-energy indoor cycling class with great music and motivation.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 3,
    name: 'Vinyasa Flow',
    category: 'Yoga',
    instructor: 'Emma Davis',
    time: '9:00 AM - 10:00 AM',
    days: 'Mon, Wed, Fri',
    capacity: 25,
    level: 'All Levels',
    description: 'Dynamic yoga flow linking breath with movement for mind-body balance.',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 4,
    name: 'HIIT Blast',
    category: 'HIIT',
    instructor: 'Mike Williams',
    time: '6:00 PM - 7:00 PM',
    days: 'Mon, Wed, Fri',
    capacity: 20,
    level: 'Advanced',
    description: 'High-intensity interval training for maximum calorie burn and endurance.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 5,
    name: 'Pilates Core',
    category: 'Pilates',
    instructor: 'Lisa Brown',
    time: '10:00 AM - 11:00 AM',
    days: 'Tue, Thu, Sat',
    capacity: 15,
    level: 'All Levels',
    description: 'Strengthen your core and improve flexibility with Pilates techniques.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 6,
    name: 'CrossFit',
    category: 'Strength Training',
    instructor: 'David Wilson',
    time: '5:00 PM - 6:00 PM',
    days: 'Mon, Wed, Fri',
    capacity: 20,
    level: 'Advanced',
    description: 'Functional fitness combining strength and conditioning exercises.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 7,
    name: 'Cardio Blast',
    category: 'Cardio',
    instructor: 'Jessica Taylor',
    time: '11:00 AM - 12:00 PM',
    days: 'Mon, Wed, Fri',
    capacity: 25,
    level: 'All Levels',
    description: 'High-energy cardio workout combining dance, aerobics, and step exercises for maximum calorie burn.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
  }
];

const Classes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Classes');
  const [selectedClass, setSelectedClass] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookedClasses, setBookedClasses] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [recentlyBookedClass, setRecentlyBookedClass] = useState(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const savedBookings = localStorage.getItem('bookedClasses');
    if (savedBookings) {
      setBookedClasses(JSON.parse(savedBookings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookedClasses', JSON.stringify(bookedClasses));
  }, [bookedClasses]);

  const filteredClasses = selectedCategory === 'All Classes'
    ? classes
    : classes.filter(c => c.category === selectedCategory);

  const handleBookClass = (classItem) => {
    if (!isAuthenticated) {
      toast.error('Please login to book a class');
      navigate('/login');
      return;
    }

    setIsBooking(true);
    setTimeout(() => {
      setBookedClasses([...bookedClasses, classItem]);
      setShowSuccessModal(true);
      setRecentlyBookedClass(classItem);
      setIsBooking(false);
      toast.success('Class booked successfully!');
    }, 1000);
  };

  const handleCancelBooking = (classId) => {
    setBookedClasses(bookedClasses.filter(c => c.id !== classId));
    toast.success('Booking cancelled successfully!');
  };

  const isClassBooked = (classId) => {
    return bookedClasses.some(c => c.id === classId);
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <Section
        dark
        gradient
        pattern
        className="relative min-h-[40vh] flex items-center justify-center text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          >
            Group Fitness Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Join our energetic group classes led by expert instructors
          </motion.p>
        </div>
      </Section>

      {/* Categories */}
      <Section className="py-8">
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          {classCategories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </Section>

      {/* Booked Classes Section */}
      {isAuthenticated && bookedClasses.length > 0 && (
        <Section>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Your Booked Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bookedClasses.map((classItem) => (
                <motion.div
                  key={classItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800 rounded-xl overflow-hidden group relative"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{classItem.name}</h3>
                      <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white px-3 py-1 rounded-full text-sm">
                        {classItem.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-300">
                        <FaUser className="mr-2 text-purple-400" />
                        {classItem.instructor}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <FaClock className="mr-2 text-purple-400" />
                        {classItem.time}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <FaCalendar className="mr-2 text-purple-400" />
                        {classItem.days}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <FaDumbbell className="mr-2 text-purple-400" />
                        {classItem.level}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCancelBooking(classItem.id)}
                      className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold flex items-center justify-center"
                    >
                      <FaTrash className="mr-2" />
                      Cancel Booking
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Available Classes Section */}
      <Section>
        <h2 className="text-3xl font-bold mb-8 text-white">Available Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredClasses.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{classItem.name}</h3>
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white px-3 py-1 rounded-full text-sm">
                    {classItem.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-300">
                    <FaUser className="mr-2 text-purple-400" />
                    {classItem.instructor}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FaClock className="mr-2 text-purple-400" />
                    {classItem.time}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FaCalendar className="mr-2 text-purple-400" />
                    {classItem.days}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FaDumbbell className="mr-2 text-purple-400" />
                    {classItem.level}
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{classItem.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedClass(classItem)}
                  disabled={isClassBooked(classItem.id)}
                  className={`w-full py-3 rounded-lg font-semibold ${
                    isClassBooked(classItem.id)
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white'
                  }`}
                >
                  {isClassBooked(classItem.id) ? 'Already Booked' : 'Book Class'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && recentlyBookedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-xl p-8 max-w-lg w-full relative text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <FaCheckCircle className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">Class Booked Successfully!</h3>
              
              <div className="bg-gray-700 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Class:</span>
                  <span className="text-white font-semibold">{recentlyBookedClass.name}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Time:</span>
                  <span className="text-white font-semibold">{recentlyBookedClass.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Days:</span>
                  <span className="text-white font-semibold">{recentlyBookedClass.days}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                You can view and manage your bookings in the "Your Booked Classes" section.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white rounded-lg font-semibold"
              >
                Continue
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-xl p-6 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelectedClass(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedClass.name}</h3>
                <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white px-3 py-1 rounded-full text-sm">
                  {selectedClass.category}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <FaUser className="mr-2 text-purple-400" />
                  <span>Instructor: {selectedClass.instructor}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaClock className="mr-2 text-purple-400" />
                  <span>Time: {selectedClass.time}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaCalendar className="mr-2 text-purple-400" />
                  <span>Days: {selectedClass.days}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaDumbbell className="mr-2 text-purple-400" />
                  <span>Level: {selectedClass.level}</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6">{selectedClass.description}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleBookClass(selectedClass);
                  setSelectedClass(null);
                }}
                disabled={isBooking || isClassBooked(selectedClass.id)}
                className={`w-full py-3 rounded-lg font-semibold ${
                  isBooking || isClassBooked(selectedClass.id)
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white'
                }`}
              >
                {isBooking ? 'Booking...' : isClassBooked(selectedClass.id) ? 'Already Booked' : 'Confirm Booking'}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Classes; 