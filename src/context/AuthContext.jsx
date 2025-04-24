import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set up axios defaults
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Temporary admin check
      if (email === 'admin@gym.com' && password === 'admin123') {
        const adminUser = {
          id: 1,
          name: 'Admin User',
          email: 'admin@gym.com',
          isAdmin: true,
          adminRole: 'super_admin',
          adminPermissions: ['manage_users', 'manage_content', 'manage_payments', 'view_analytics', 'manage_classes']
        };
        
        // Store admin user data
        localStorage.setItem('user', JSON.stringify(adminUser));
        setUser(adminUser);
        setIsAuthenticated(true);
        return { success: true };
      }

      // Regular user login (temporary)
      const regularUser = {
        id: 2,
        name: 'Regular User',
        email: email,
        isAdmin: false,
        adminRole: null,
        adminPermissions: []
      };

      localStorage.setItem('user', JSON.stringify(regularUser));
      setUser(regularUser);
      setIsAuthenticated(true);
      return { success: true };

    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        message: error.message || 'Login failed' 
      };
    }
  };

  const register = async (userData) => {
    try {
      const user = {
        id: Math.floor(Math.random() * 1000),
        ...userData,
        isAdmin: false,
        adminRole: null,
        adminPermissions: []
      };

      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        message: error.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Helper functions for role-based access control
  const isAdmin = () => {
    return user?.isAdmin || false;
  };

  const hasRole = (role) => {
    return user?.adminRole === role;
  };

  const hasPermission = (permission) => {
    return user?.adminPermissions?.includes(permission) || false;
  };

  const canAccess = (requiredRole, requiredPermission) => {
    if (!isAdmin()) return false;
    if (requiredRole && !hasRole(requiredRole)) return false;
    if (requiredPermission && !hasPermission(requiredPermission)) return false;
    return true;
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      loading,
      login, 
      register, 
      logout,
      isAdmin,
      hasRole,
      hasPermission,
      canAccess
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 