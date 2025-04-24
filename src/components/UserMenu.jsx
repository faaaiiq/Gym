import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCog, FaCreditCard, FaChartLine, FaSignOutAlt, FaUsers, FaFileAlt, FaMoneyBillWave, FaClipboardList } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const UserMenu = ({ className = '' }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout, isAdmin, hasRole, hasPermission } = useAuth();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsUserMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsUserMenuOpen(false);
  };

  if (!user) return null;

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300"
      >
        <FaUser className="text-white" />
        <span className="text-white">{user.name}</span>
        {isAdmin() && (
          <span className="ml-2 px-2 py-1 text-xs rounded-full bg-yellow-500 text-white">
            Admin
          </span>
        )}
      </button>

      {/* User Dropdown Menu */}
      {isUserMenuOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
          {/* User Profile Section */}
          <div className="px-4 py-2 border-b border-gray-700">
            <div className="text-white font-medium">{user.name}</div>
            <div className="text-sm text-gray-400">{user.email}</div>
            {isAdmin() && (
              <div className="mt-1 text-xs text-yellow-400">
                {user.adminRole ? `Role: ${user.adminRole}` : 'Administrator'}
              </div>
            )}
          </div>

          {/* Common User Options */}
          <button
            onClick={() => handleLinkClick('/dashboard')}
            className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <FaCog className="text-cyan-400" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => handleLinkClick('/subscription')}
            className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <FaCreditCard className="text-cyan-400" />
            <span>Subscription</span>
          </button>

          {/* Admin Options */}
          {isAdmin() && (
            <>
              <div className="px-4 py-2 text-xs text-gray-400 uppercase tracking-wider">
                Admin Tools
              </div>
              
              {hasPermission('manage_users') && (
                <button
                  onClick={() => handleLinkClick('/admin/users')}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <FaUsers className="text-cyan-400" />
                  <span>Manage Users</span>
                </button>
              )}
              
              {hasPermission('manage_content') && (
                <button
                  onClick={() => handleLinkClick('/admin/content')}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <FaFileAlt className="text-cyan-400" />
                  <span>Manage Content</span>
                </button>
              )}
              
              {hasPermission('manage_payments') && (
                <button
                  onClick={() => handleLinkClick('/admin/payments')}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <FaMoneyBillWave className="text-cyan-400" />
                  <span>Manage Payments</span>
                </button>
              )}
              
              {hasPermission('view_analytics') && (
                <button
                  onClick={() => handleLinkClick('/admin/analytics')}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <FaChartLine className="text-cyan-400" />
                  <span>Analytics</span>
                </button>
              )}
              
              {hasPermission('manage_classes') && (
                <button
                  onClick={() => handleLinkClick('/admin/classes')}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <FaClipboardList className="text-cyan-400" />
                  <span>Manage Classes</span>
                </button>
              )}
            </>
          )}

          {/* Logout Button */}
          <div className="px-4 py-2 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <FaSignOutAlt className="text-cyan-400" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu; 