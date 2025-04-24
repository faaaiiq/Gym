import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaTicketAlt } from 'react-icons/fa';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Summer Fitness Challenge',
      date: '2024-06-15',
      time: '09:00 AM',
      location: 'Main Gym Hall',
      capacity: 50,
      registered: 35,
      image: '/summer-challenge.jpg',
      description: 'Join our annual summer fitness challenge! Test your limits and win amazing prizes.',
      price: 25.00,
      category: 'competition',
    },
    {
      id: 2,
      title: 'Yoga Workshop',
      date: '2024-06-20',
      time: '06:00 PM',
      location: 'Yoga Studio',
      capacity: 20,
      registered: 15,
      image: '/yoga-workshop.jpg',
      description: 'Learn advanced yoga techniques from our expert instructors.',
      price: 15.00,
      category: 'workshop',
    },
    {
      id: 3,
      title: 'Nutrition Seminar',
      date: '2024-06-25',
      time: '07:00 PM',
      location: 'Conference Room',
      capacity: 30,
      registered: 22,
      image: '/nutrition-seminar.jpg',
      description: 'Expert advice on nutrition and meal planning for optimal fitness.',
      price: 20.00,
      category: 'seminar',
    },
    {
      id: 4,
      title: 'Group Cycling Marathon',
      date: '2024-07-01',
      time: '08:00 AM',
      location: 'Cycling Studio',
      capacity: 40,
      registered: 28,
      image: '/cycling-marathon.jpg',
      description: 'Join our 4-hour cycling marathon for charity!',
      price: 30.00,
      category: 'charity',
    },
  ];

  const handleRegister = (event) => {
    // Handle event registration
    console.log('Registering for event:', event);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/events-hero.jpg)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          >
            Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Join our exciting fitness events and challenges
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="mr-2" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">${event.price}</span>
                    <button
                      onClick={() => handleRegister(event)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center"
                    >
                      <FaTicketAlt className="mr-2" />
                      Register
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2" />
                <span>{selectedEvent.date} at {selectedEvent.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <span>{selectedEvent.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaUsers className="mr-2" />
                <span>{selectedEvent.registered}/{selectedEvent.capacity} registered</span>
              </div>
              <p className="text-gray-600">{selectedEvent.description}</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Close
                </button>
                <button
                  onClick={() => handleRegister(selectedEvent)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Events; 