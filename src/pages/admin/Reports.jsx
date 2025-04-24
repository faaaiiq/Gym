import React, { useState } from 'react';
import { FaFileAlt, FaDownload, FaChartBar, FaUsers, FaMoneyBillWave, FaDumbbell } from 'react-icons/fa';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('financial');

  const reportTypes = [
    {
      id: 'financial',
      name: 'Financial Reports',
      icon: FaMoneyBillWave,
      description: 'Revenue, expenses, and subscription analytics'
    },
    {
      id: 'membership',
      name: 'Membership Reports',
      icon: FaUsers,
      description: 'Member statistics and demographics'
    },
    {
      id: 'attendance',
      name: 'Attendance Reports',
      icon: FaChartBar,
      description: 'Usage patterns and peak hours'
    },
    {
      id: 'equipment',
      name: 'Equipment Reports',
      icon: FaDumbbell,
      description: 'Maintenance logs and utilization'
    }
  ];

  // Placeholder report data
  const reportData = {
    financial: [
      { title: 'Monthly Revenue Report', date: '2024-03-01', type: 'PDF' },
      { title: 'Subscription Analysis', date: '2024-03-01', type: 'Excel' },
      { title: 'Expense Breakdown', date: '2024-03-01', type: 'PDF' }
    ],
    membership: [
      { title: 'Member Demographics', date: '2024-03-01', type: 'PDF' },
      { title: 'Membership Growth', date: '2024-03-01', type: 'Excel' },
      { title: 'Retention Analysis', date: '2024-03-01', type: 'PDF' }
    ],
    attendance: [
      { title: 'Daily Usage Patterns', date: '2024-03-01', type: 'PDF' },
      { title: 'Class Attendance', date: '2024-03-01', type: 'Excel' },
      { title: 'Peak Hours Analysis', date: '2024-03-01', type: 'PDF' }
    ],
    equipment: [
      { title: 'Maintenance Schedule', date: '2024-03-01', type: 'PDF' },
      { title: 'Equipment Usage', date: '2024-03-01', type: 'Excel' },
      { title: 'Repair History', date: '2024-03-01', type: 'PDF' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reports</h1>
          <p className="text-gray-400">Generate and view detailed reports</p>
        </div>
        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
          <FaFileAlt />
          <span>Generate New Report</span>
        </button>
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {reportTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedReport(type.id)}
            className={`p-6 rounded-lg transition-all ${
              selectedReport === type.id
                ? 'bg-indigo-600 ring-2 ring-indigo-400'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <type.icon className="text-3xl mb-4" />
            <h3 className="text-lg font-medium mb-2">{type.name}</h3>
            <p className="text-sm text-gray-400">{type.description}</p>
          </button>
        ))}
      </div>

      {/* Available Reports */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Available Reports</h2>
          <div className="flex space-x-4">
            <select className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
              <option value="day">Today</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportData[selectedReport].map((report, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium mb-1">{report.title}</h3>
                  <p className="text-sm text-gray-400">{report.date}</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-gray-600 rounded">
                  {report.type}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-sm text-cyan-400 hover:text-cyan-300">
                  Preview
                </button>
                <button className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white">
                  <FaDownload className="text-xs" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Reports */}
      <div className="mt-8 bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Scheduled Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="font-medium mb-2">Monthly Financial Summary</h3>
            <p className="text-sm text-gray-400 mb-4">Sends on the 1st of every month</p>
            <div className="flex justify-between items-center">
              <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded">
                Active
              </span>
              <button className="text-sm text-gray-400 hover:text-white">
                Configure
              </button>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="font-medium mb-2">Weekly Attendance Report</h3>
            <p className="text-sm text-gray-400 mb-4">Sends every Monday at 9 AM</p>
            <div className="flex justify-between items-center">
              <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded">
                Active
              </span>
              <button className="text-sm text-gray-400 hover:text-white">
                Configure
              </button>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="font-medium mb-2">Equipment Maintenance Alert</h3>
            <p className="text-sm text-gray-400 mb-4">Sends daily at 8 AM</p>
            <div className="flex justify-between items-center">
              <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded">
                Active
              </span>
              <button className="text-sm text-gray-400 hover:text-white">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 