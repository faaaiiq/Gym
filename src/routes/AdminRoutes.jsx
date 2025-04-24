import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Admin Pages
import Dashboard from '../pages/admin/Dashboard';
import Users from '../pages/admin/Users';
import Payments from '../pages/admin/Payments';
import Attendance from '../pages/admin/Attendance';
import Reports from '../pages/admin/Reports';
import Equipment from '../pages/admin/Equipment';

// Existing Pages with Admin Views
import Membership from '../pages/Membership';
import WorkoutPlans from '../pages/WorkoutPlans';
import Nutrition from '../pages/Nutrition';
import Classes from '../pages/Classes';
import Trainers from '../pages/Trainers';
import Store from '../pages/Store';

const AdminRoute = ({ children, requiredPermission }) => {
  const { isAuthenticated, isAdmin, hasPermission } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin()) {
    return <Navigate to="/" />;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return <Navigate to="/admin" />;
  }

  return children;
};

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Main Dashboard */}
      <Route
        path="/"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      {/* User Management */}
      <Route
        path="/users"
        element={
          <AdminRoute requiredPermission="manage_users">
            <Users />
          </AdminRoute>
        }
      />

      {/* Financial Management */}
      <Route
        path="/payments"
        element={
          <AdminRoute requiredPermission="manage_payments">
            <Payments />
          </AdminRoute>
        }
      />

      {/* Membership Management */}
      <Route
        path="/membership"
        element={
          <AdminRoute requiredPermission="manage_users">
            <Membership adminView={true} />
          </AdminRoute>
        }
      />

      {/* Class Management */}
      <Route
        path="/classes"
        element={
          <AdminRoute requiredPermission="manage_classes">
            <Classes adminView={true} />
          </AdminRoute>
        }
      />

      {/* Trainer Management */}
      <Route
        path="/trainers"
        element={
          <AdminRoute requiredPermission="manage_users">
            <Trainers adminView={true} />
          </AdminRoute>
        }
      />

      {/* Workout Plans */}
      <Route
        path="/workout-plans"
        element={
          <AdminRoute requiredPermission="manage_content">
            <WorkoutPlans adminView={true} />
          </AdminRoute>
        }
      />

      {/* Nutrition Plans */}
      <Route
        path="/nutrition"
        element={
          <AdminRoute requiredPermission="manage_content">
            <Nutrition adminView={true} />
          </AdminRoute>
        }
      />

      {/* Store Management */}
      <Route
        path="/store"
        element={
          <AdminRoute requiredPermission="manage_content">
            <Store adminView={true} />
          </AdminRoute>
        }
      />

      {/* Attendance Tracking */}
      <Route
        path="/attendance"
        element={
          <AdminRoute requiredPermission="manage_users">
            <Attendance />
          </AdminRoute>
        }
      />

      {/* Reports */}
      <Route
        path="/reports"
        element={
          <AdminRoute requiredPermission="view_analytics">
            <Reports />
          </AdminRoute>
        }
      />

      {/* Equipment Management */}
      <Route
        path="/equipment"
        element={
          <AdminRoute requiredPermission="manage_content">
            <Equipment />
          </AdminRoute>
        }
      />

      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/admin" />} />
    </Routes>
  );
};

export default AdminRoutes; 