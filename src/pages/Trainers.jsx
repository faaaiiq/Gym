import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin, FaStar, FaDumbbell, FaUserGraduate, FaTimes } from 'react-icons/fa';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';
import trainer3Img from '../assets/images/trainer.avif';
import trainer1Img from '../assets/images/trainer1.avif';

const trainers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Head Trainer',
    specialties: ['Strength Training', 'Bodybuilding', 'Nutrition'],
    experience: '10+ years',
    certifications: ['NASM CPT', 'CrossFit Level 2', 'Precision Nutrition'],
    bio: 'Dedicated fitness professional with over a decade of experience in transforming lives through personalized training programs.',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 156,
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Yoga & Pilates Specialist',
    specialties: ['Yoga', 'Pilates', 'Meditation'],
    experience: '8 years',
    certifications: ['RYT 500', 'Pilates Certification', 'Mindfulness Coach'],
    bio: 'Passionate about helping others find balance and strength through mindful movement and breath work.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 142,
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Mike Williams',
    role: 'HIIT & Cardio Expert',
    specialties: ['HIIT', 'Cardio', 'Weight Loss'],
    experience: '6 years',
    certifications: ['ACE CPT', 'HIIT Specialist', 'TRX Certified'],
    bio: 'Energetic trainer specializing in high-intensity workouts and sustainable weight loss programs.',
    image: trainer3Img,
    rating: 4.7,
    reviews: 98,
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
];

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { trainer: selectedTrainer, ...bookingForm });
    // Reset form and close modal
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
    setSelectedTrainer(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
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
            Meet Our Expert Trainers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Dedicated professionals committed to helping you achieve your fitness goals
          </motion.p>
        </div>
      </Section>

      {/* Trainers Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-96 relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x1000?text=Trainer+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    {trainer.role}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-400">
                    <FaStar />
                    <span className="ml-2 text-white">{trainer.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm ml-2">({trainer.reviews} reviews)</span>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <FaDumbbell className="text-purple-500 mt-1 mr-3" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Specialties</h4>
                      <p className="text-gray-400">{trainer.specialties.join(', ')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaUserGraduate className="text-purple-500 mt-1 mr-3" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Certifications</h4>
                      <p className="text-gray-400">{trainer.certifications.join(', ')}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{trainer.bio}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a href={trainer.social.instagram} className="text-gray-400 hover:text-purple-500 transition-colors">
                      <FaInstagram size={20} />
                    </a>
                    <a href={trainer.social.twitter} className="text-gray-400 hover:text-purple-500 transition-colors">
                      <FaTwitter size={20} />
                    </a>
                    <a href={trainer.social.linkedin} className="text-gray-400 hover:text-purple-500 transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTrainer(trainer)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white rounded-lg font-semibold"
                  >
                    Book Session
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Booking Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 rounded-xl p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Book a Session with {selectedTrainer.name}</h3>
              <button
                onClick={() => setSelectedTrainer(null)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={bookingForm.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={bookingForm.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white rounded-lg font-semibold"
              >
                Confirm Booking
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Why Choose Our Trainers */}
      <Section
        dark
        pattern
        title="Why Choose Our Trainers"
        subtitle="Experience the difference with our certified fitness professionals"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: 'Expert Guidance',
              description: 'Certified professionals with years of experience in fitness and nutrition'
            },
            {
              title: 'Personalized Approach',
              description: 'Custom workout plans tailored to your specific goals and needs'
            },
            {
              title: 'Proven Results',
              description: 'Track record of helping clients achieve their fitness objectives'
            },
            {
              title: 'Continuous Support',
              description: 'Ongoing motivation and accountability throughout your fitness journey'
            },
            {
              title: 'Latest Techniques',
              description: 'Up-to-date with the most effective training methodologies'
            },
            {
              title: 'Flexible Schedule',
              description: 'Convenient scheduling options to fit your busy lifestyle'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Trainers; 