import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTools, FaExclamationTriangle } from 'react-icons/fa';

function Equipment() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Placeholder equipment data
  const equipmentData = [
    {
      id: 1,
      name: 'Treadmill X2000',
      type: 'Cardio',
      status: 'operational',
      lastMaintenance: '2024-02-15',
      nextMaintenance: '2024-03-15',
      location: 'Cardio Zone',
      serialNumber: 'TM2000-123',
      purchaseDate: '2023-01-15',
      warranty: '2025-01-15'
    },
    {
      id: 2,
      name: 'Smith Machine',
      type: 'Strength',
      status: 'maintenance',
      lastMaintenance: '2024-02-20',
      nextMaintenance: '2024-03-20',
      location: 'Weight Zone',
      serialNumber: 'SM1000-456',
      purchaseDate: '2023-02-01',
      warranty: '2025-02-01'
    },
    {
      id: 3,
      name: 'Rowing Machine',
      type: 'Cardio',
      status: 'out-of-order',
      lastMaintenance: '2024-02-10',
      nextMaintenance: '2024-03-10',
      location: 'Cardio Zone',
      serialNumber: 'RM3000-789',
      purchaseDate: '2023-03-01',
      warranty: '2025-03-01'
    }
  ];

  const statusColors = {
    operational: 'bg-green-500/20 text-green-400',
    maintenance: 'bg-yellow-500/20 text-yellow-400',
    'out-of-order': 'bg-red-500/20 text-red-400'
  };

  const filteredEquipment = equipmentData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Equipment Management</h1>
          <p className="text-gray-400">Manage and track gym equipment</p>
        </div>
        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
          <FaPlus />
          <span>Add Equipment</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Total Equipment</h3>
          <p className="text-3xl font-bold">24</p>
          <p className="text-sm text-gray-400 mt-1">Items in inventory</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Operational</h3>
          <p className="text-3xl font-bold text-green-400">20</p>
          <p className="text-sm text-gray-400 mt-1">Equipment in use</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Under Maintenance</h3>
          <p className="text-3xl font-bold text-yellow-400">3</p>
          <p className="text-sm text-gray-400 mt-1">Being serviced</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Out of Order</h3>
          <p className="text-3xl font-bold text-red-400">1</p>
          <p className="text-sm text-gray-400 mt-1">Needs attention</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Search equipment..."
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <select
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="operational">Operational</option>
              <option value="maintenance">Under Maintenance</option>
              <option value="out-of-order">Out of Order</option>
            </select>
          </div>
        </div>
      </div>

      {/* Equipment List */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Equipment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Next Maintenance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredEquipment.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-400">#{item.serialNumber}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[item.status]}`}>
                      {item.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.nextMaintenance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-3">
                      <button className="text-cyan-400 hover:text-cyan-300">
                        <FaEdit />
                      </button>
                      <button className="text-yellow-400 hover:text-yellow-300">
                        <FaTools />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Maintenance Alerts */}
      <div className="mt-8 bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Maintenance Alerts</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-red-500/10 text-red-400 p-4 rounded-lg">
            <FaExclamationTriangle className="text-xl" />
            <div>
              <h3 className="font-medium">Urgent: Treadmill X2000 Maintenance Required</h3>
              <p className="text-sm">Scheduled maintenance overdue by 5 days</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-yellow-500/10 text-yellow-400 p-4 rounded-lg">
            <FaExclamationTriangle className="text-xl" />
            <div>
              <h3 className="font-medium">Upcoming: Smith Machine Maintenance</h3>
              <p className="text-sm">Due in 2 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipment; 