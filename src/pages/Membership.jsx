import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';

const membershipPlans = [
  {
    name: 'Basic',
    price: 29.99,
    duration: 'month',
    features: [
      'Access to gym facilities',
      'Basic equipment usage',
      'Locker room access',
      'Free WiFi',
      'Fitness assessment'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Premium',
    price: 49.99,
    duration: 'month',
    features: [
      'All Basic features',
      'Group fitness classes',
      'Personal trainer consultation',
      'Nutrition guidance',
      'Access to swimming pool',
      'Sauna & spa access'
    ],
    popular: true,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Elite',
    price: 79.99,
    duration: 'month',
    features: [
      'All Premium features',
      'Unlimited personal training',
      'Priority class booking',
      'Exclusive events access',
      'Meal planning service',
      'Guest passes (2/month)',
      '24/7 gym access'
    ],
    color: 'from-indigo-500 to-indigo-600'
  }
];

const Membership = () => {
  return (
    <PageWrapper>
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
            Choose Your Membership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Find the perfect plan to achieve your fitness goals
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-800 rounded-xl p-8 relative ${
                plan.popular ? 'border-2 border-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/{plan.duration}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <FaCheck className="text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${plan.color}`}
              >
                Get Started <FaArrowRight className="inline ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section
        dark
        pattern
        title="Membership Benefits"
        subtitle="Enjoy exclusive perks and amenities with your membership"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: 'State-of-the-art Equipment',
              description: 'Access to premium fitness equipment and machines'
            },
            {
              title: 'Expert Trainers',
              description: 'Get guidance from certified fitness professionals'
            },
            {
              title: 'Flexible Hours',
              description: 'Work out on your schedule with extended hours'
            },
            {
              title: 'Group Classes',
              description: 'Join energizing group fitness sessions'
            },
            {
              title: 'Wellness Programs',
              description: 'Participate in holistic health initiatives'
            },
            {
              title: 'Community Events',
              description: 'Connect with like-minded fitness enthusiasts'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Membership; 