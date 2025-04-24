import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { PageWrapper } from '../components/layout/Layout';
import Section from '../components/common/Section';
import {
  FaUsers,
  FaMoneyBillWave,
  FaChartLine,
  FaCalendarAlt,
  FaUserCog,
  FaCreditCard
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalRevenue: 0,
    monthlyRevenue: 0,
    activeSubscriptions: 0,
    pendingPayments: 0
  });

  const [revenueData, setRevenueData] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState([]);

  useEffect(() => {
    // Fetch dashboard data
    const fetchDashboardData = async () => {
      try {
        // Replace with actual API calls
        const response = await fetch('/api/admin/revenue');
        const data = await response.json();
        setRevenueData(data);

        const subResponse = await fetch('/api/admin/subscriptions');
        const subData = await subResponse.json();
        setSubscriptionData(subData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.7 }}
      className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-[20px] p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[15px] text-body-sm mb-2">{title}</p>
          <h3 className="text-[26px] font-primary font-semibold text-white">{value}</h3>
        </div>
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
          <Icon className="text-white text-xl" />
        </div>
      </div>
    </motion.div>
  );

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
            Admin Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Manage your gym operations and track performance
          </motion.p>
        </div>
      </Section>

      <Section className="pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <StatCard
              title="Total Users"
              value={stats.totalUsers}
              icon={FaUsers}
              color="bg-blue-500"
            />
            <StatCard
              title="Active Users"
              value={stats.activeUsers}
              icon={FaUserCog}
              color="bg-green-500"
            />
            <StatCard
              title="Total Revenue"
              value={`$${stats.totalRevenue}`}
              icon={FaMoneyBillWave}
              color="bg-purple-500"
            />
            <StatCard
              title="Monthly Revenue"
              value={`$${stats.monthlyRevenue}`}
              icon={FaChartLine}
              color="bg-yellow-500"
            />
            <StatCard
              title="Active Subscriptions"
              value={stats.activeSubscriptions}
              icon={FaCalendarAlt}
              color="bg-red-500"
            />
            <StatCard
              title="Pending Payments"
              value={stats.pendingPayments}
              icon={FaCreditCard}
              color="bg-indigo-500"
            />
          </div>

          {/* Revenue Chart */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-[20px] p-8 mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Revenue Overview</h2>
            <div className="h-80">
              {/* Add your chart component here */}
              <div className="h-full flex items-center justify-center text-gray-400">
                Revenue Chart Placeholder
              </div>
            </div>
          </motion.div>

          {/* Subscription Analytics */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-[20px] p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Subscription Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subscriptionData.map((item, index) => (
                <div key={index} className="bg-[rgba(255,255,255,0.05)] rounded-[15px] p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 capitalize">
                    {item._id} Subscriptions
                  </h3>
                  <p className="text-3xl font-bold text-white mb-2">{item.count}</p>
                  <p className="text-gray-400">Total Revenue: ${item.totalRevenue}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default AdminDashboard; 