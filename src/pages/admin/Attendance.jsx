import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUserCheck, FaDownload } from 'react-icons/fa';

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Placeholder data
  const attendanceData = [
    {
      id: 1,
      name: 'John Doe',
      checkIn: '09:00 AM',
      checkOut: '10:30 AM',
      duration: '1h 30m',
      activity: 'Gym Workout',
      trainer: 'Mike Johnson'
    },
    {
      id: 2,
      name: 'Jane Smith',
      checkIn: '10:00 AM',
      checkOut: '11:15 AM',
      duration: '1h 15m',
      activity: 'Yoga Class',
      trainer: 'Sarah Wilson'
    },
    // Add more placeholder data as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Attendance Management</h1>
          <p className="text-gray-400">Track and manage member attendance</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
            <FaUserCheck />
            <span>Mark Attendance</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
            <FaDownload />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Today's Check-ins</h3>
          <p className="text-2xl font-semibold mt-2">45</p>
          <p className="text-sm text-green-400 mt-2">+12% from yesterday</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Active Members</h3>
          <p className="text-2xl font-semibold mt-2">28</p>
          <p className="text-sm text-cyan-400 mt-2">Currently in gym</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Class Attendance</h3>
          <p className="text-2xl font-semibold mt-2">15</p>
          <p className="text-sm text-yellow-400 mt-2">3 classes in progress</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium">Average Duration</h3>
          <p className="text-2xl font-semibold mt-2">1h 45m</p>
          <p className="text-sm text-purple-400 mt-2">Per member today</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search members..."
              className="w-full bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <select className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option value="all">All Activities</option>
            <option value="gym">Gym Workout</option>
            <option value="class">Classes</option>
            <option value="personal">Personal Training</option>
          </select>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Member</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Check In</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Check Out</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Trainer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {attendanceData.map((record) => (
              <tr key={record.id} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">{record.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {record.checkIn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {record.checkOut}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {record.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {record.activity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {record.trainer}
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

export default Attendance; 