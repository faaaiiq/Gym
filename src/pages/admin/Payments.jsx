import React, { useState } from 'react';
import { FaSearch, FaFileDownload, FaMoneyBillWave } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Payments = () => {
  const { hasPermission } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder data - will be replaced with real data later
  const payments = [
    {
      id: 1,
      member: 'John Doe',
      amount: 99.99,
      plan: 'Premium Monthly',
      status: 'Completed',
      date: '2024-03-01',
      paymentMethod: 'Credit Card'
    },
    {
      id: 2,
      member: 'Jane Smith',
      amount: 299.99,
      plan: 'Elite Quarterly',
      status: 'Pending',
      date: '2024-03-02',
      paymentMethod: 'PayPal'
    },
    // Add more placeholder payments as needed
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Payment Management</h1>
          <p className="text-gray-400">Track and manage all payment transactions</p>
        </div>
        <div className="flex space-x-4">
          {hasPermission('manage_payments') && (
            <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
              <FaMoneyBillWave />
              <span>Record Payment</span>
            </button>
          )}
          <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
            <FaFileDownload />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Total Revenue</h3>
          <p className="text-2xl font-semibold mt-2">$12,345.67</p>
          <p className="text-sm text-green-400 mt-2">+8.2% from last month</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Pending Payments</h3>
          <p className="text-2xl font-semibold mt-2">23</p>
          <p className="text-sm text-yellow-400 mt-2">5 due today</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Failed Payments</h3>
          <p className="text-2xl font-semibold mt-2">3</p>
          <p className="text-sm text-red-400 mt-2">Requires attention</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search payments..."
              className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <select className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
          <select className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option value="all">All Plans</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="elite">Elite</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Member</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Method</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{payment.member}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">${payment.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{payment.plan}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    payment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {payment.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {payment.paymentMethod}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Showing 1 to 10 of 50 results
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700">
            Previous
          </button>
          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments; 