import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDumbbell, FaUsers, FaHeart, FaPlay, FaTimes } from 'react-icons/fa';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';
import VideoPlayer from '../components/VideoPlayer';

// All media paths in one place for easy updates
const media = {
  images: {
    // Replace these paths with your own image paths
    hero: '/media/images/hero.jpg',
    strength: '/media/images/strength.jpg',
    cardio: '/media/images/cardio.jpg',
    classes: '/media/images/classes.jpg',
    interior: '/media/images/interior.jpg',
  },
  videos: {
    // Replace this with your promotional video path
    promo: '/media/videos/promo.mp4'
  }
};

// Temporary URLs until you add your own images
const tempUrls = {
  hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  strength: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
  cardio: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
  classes: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
  interior: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
};

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/oDpBFN0OVtA"; // Your YouTube video ID

  // Helper function to get image URL (tries local first, falls back to temp URL)
  const getImageUrl = (key) => {
    // You can add image existence check here if needed
    return tempUrls[key]; // Change this to media.images[key] when you add your own images
  };

  return (
    <PageWrapper>
      {/* Hero Section with Large Workout Image */}
      <section className="relative min-h-screen">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getImageUrl('hero')}')`,
            backgroundPosition: "center 30%"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join our state-of-the-art facility and start your fitness journey today with expert guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/membership"
                className="relative px-8 py-4 rounded-lg font-semibold overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 group-hover:bg-gradient-to-l animate-pulse"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 opacity-75 group-hover:bg-gradient-to-l" style={{ animationDelay: '150ms' }}></span>
                <span className="relative flex items-center text-white">
                  Start Your Journey
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <VideoPlayer videoUrl={videoUrl} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections with Images */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Strength Training",
              description: "Build muscle and increase strength with our comprehensive equipment and expert guidance.",
              image: getImageUrl('strength')
            },
            {
              title: "Cardio Zone",
              description: "State-of-the-art cardio equipment for effective heart-pumping workouts.",
              image: getImageUrl('cardio')
            },
            {
              title: "Group Classes",
              description: "Join our energetic group classes led by certified instructors.",
              image: getImageUrl('classes')
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section with Background Image */}
      <Section
        dark
        className="relative"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('${getImageUrl('interior')}')` }} 
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaUsers, count: "1000+", label: "Active Members" },
              { icon: FaDumbbell, count: "50+", label: "Weekly Classes" },
              { icon: FaHeart, count: "95%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <div className="text-4xl font-bold text-white mb-2">{stat.count}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        gradient
        pattern
        className="text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-700">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join now and get your first month at a special rate. Transform your life with our expert trainers and state-of-the-art facilities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform group"
          >
            Get Started Today
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </Section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <FaTimes size={24} />
              </button>
              <div className="relative pt-[56.25%] rounded-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={videoUrl}
                  title="Gym Promo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Home; 