import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';
import PaymentModal from '../components/PaymentModal';
import { FaCreditCard, FaHistory, FaBell, FaCheck } from 'react-icons/fa';

const Subscription = () => {
  const [subscription, setSubscription] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [upcomingPayments, setUpcomingPayments] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    // Fetch subscription and payment data
    const fetchData = async () => {
      try {
        // Replace with actual API calls
        const subResponse = await fetch('/api/payments/history');
        const subData = await subResponse.json();
        setPaymentHistory(subData);

        const upcomingResponse = await fetch('/api/payments/upcoming');
        const upcomingData = await upcomingResponse.json();
        setUpcomingPayments(upcomingData);
      } catch (error) {
        console.error('Error fetching subscription data:', error);
      }
    };

    fetchData();
  }, []);

  const subscriptionPlans = [
    {
      name: 'Basic',
      price: 29.99,
      features: [
        'Access to basic equipment',
        'Standard workout plans',
        'Email support',
        'Monthly payment'
      ],
      color: 'bg-blue-500'
    },
    {
      name: 'Premium',
      price: 49.99,
      features: [
        'All basic features',
        'Personal trainer access',
        'Advanced workout plans',
        'Priority support',
        'Quarterly payment'
      ],
      color: 'bg-purple-500'
    },
    {
      name: 'Elite',
      price: 99.99,
      features: [
        'All premium features',
        '24/7 gym access',
        'Nutrition planning',
        'One-on-one training',
        'Yearly payment'
      ],
      color: 'bg-gradient-to-r from-purple-600 to-pink-600'
    }
  ];

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    setSubscription(selectedPlan);
    setSelectedPlan(null);
  };

  return (
    <PageWrapper>
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
            Subscription Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Choose the perfect plan for your fitness journey
          </motion.p>
        </div>
      </Section>

      <Section className="pt-8">
        <div className="max-w-7xl mx-auto">
          {/* Subscription Plans */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-[20px] p-8 ${
                  subscription?.name === plan.name ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <div className={`${plan.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <FaCreditCard className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-white mb-6">${plan.price}<span className="text-gray-400 text-lg">/mo</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <FaCheck className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full py-3 rounded-lg font-semibold ${
                    subscription?.name === plan.name
                      ? 'bg-gray-600 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {subscription?.name === plan.name ? 'Current Plan' : 'Subscribe Now'}
                </button>
              </div>
            ))}
          </motion.div>

          {/* Payment History */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-[20px] p-8 mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <FaHistory className="mr-2" />
              Payment History
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400">
                    <th className="pb-4">Date</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="py-4 text-white">
                        {new Date(payment.paymentDate).toLocaleDateString()}
                      </td>
                      <td className="py-4 text-white">${payment.amount}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          payment.status === 'completed'
                            ? 'bg-green-500/20 text-green-500'
                            : payment.status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-red-500/20 text-red-500'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="py-4 text-white capitalize">{payment.subscriptionType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Upcoming Payments */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-[20px] p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <FaBell className="mr-2" />
              Upcoming Payments
            </h2>
            <div className="space-y-4">
              {upcomingPayments.map((payment, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-[15px] p-6"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {payment.subscriptionType} Subscription
                      </h3>
                      <p className="text-gray-400">
                        Due on {new Date(payment.nextPaymentDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">${payment.amount}</p>
                      <p className="text-gray-400">Auto-renewal</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        plan={selectedPlan}
        onSuccess={handlePaymentSuccess}
      />
    </PageWrapper>
  );
};

export default Subscription; 