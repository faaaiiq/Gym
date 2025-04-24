import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';

const AboutUs = () => {
  const stats = [
    { icon: FaUsers, number: '1000+', label: 'Active Members' },
    { icon: FaDumbbell, number: '50+', label: 'Weekly Classes' },
    { icon: FaTrophy, number: '10+', label: 'Years Experience' },
    { icon: FaHeart, number: '95%', label: 'Member Satisfaction' }
  ];

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
            About Fitness Freak
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Your journey to a healthier, stronger you starts here
          </motion.p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-800 rounded-xl"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Story Section */}
      <Section
        dark
        pattern
        className="relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-96 rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2013, Fitness Freak has grown from a small local gym to a premier fitness destination. Our mission is to provide a welcoming environment where everyone can achieve their fitness goals.
            </p>
            <p className="text-gray-300">
              With state-of-the-art equipment, expert trainers, and a supportive community, we're committed to helping you transform your body and transform your life.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from our facilities to our training programs.'
              },
              {
                title: 'Community',
                description: 'We believe in building a supportive community where everyone feels welcome and motivated.'
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve our programs and facilities to provide the best fitness experience.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default AboutUs; 