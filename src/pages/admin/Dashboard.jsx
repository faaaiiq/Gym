import React from 'react';
import { FaUsers, FaMoneyBillWave, FaChartLine, FaDumbbell } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const StatCard = ({ icon: Icon, title, value, change, changeType }) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="text-cyan-400">
        <Icon size={24} />
      </div>
      <div className={`text-sm px-2 py-1 rounded ${changeType === 'increase' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
        {change}
      </div>
    </div>
    <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
    <p className="text-white text-2xl font-semibold mt-2">{value}</p>
  </div>
);

const Dashboard = () => {
  const { user, hasPermission } = useAuth();

  // Placeholder data - will be replaced with real data later
  const stats = [
    {
      icon: FaUsers,
      title: 'Total Members',
      value: '2,345',
      change: '+12.5%',
      changeType: 'increase'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Monthly Revenue',
      value: '$45,678',
      change: '+8.2%',
      changeType: 'increase'
    },
    {
      icon: FaChartLine,
      title: 'Active Subscriptions',
      value: '1,890',
      change: '-2.4%',
      changeType: 'decrease'
    },
    {
      icon: FaDumbbell,
      title: 'Class Attendance',
      value: '456',
      change: '+15.3%',
      changeType: 'increase'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">
          Welcome back, {user?.name}! Here's what's happening at your gym.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hasPermission('manage_users') && (
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
              Add New Member
            </button>
          )}
          {hasPermission('manage_classes') && (
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors">
              Schedule Class
            </button>
          )}
          {hasPermission('manage_payments') && (
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              Process Payment
            </button>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
              <div>
                <p className="text-white">New member registration</p>
                <p className="text-sm text-gray-400">John Doe completed registration</p>
              </div>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 