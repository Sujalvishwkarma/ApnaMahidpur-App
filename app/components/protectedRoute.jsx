// components/ProtectedRoute.jsx
import React from 'react';
import { useAuth } from '../Context/AuthProvider';
import { View, Text, ActivityIndicator } from 'react-native';
import { Redirect } from 'expo-router';

const ProtectedRoute = ({ children }) => {
  const { user, initializing } = useAuth();

  if (initializing) {
    return <ActivityIndicator size="large" color="black" />;
  }

  if (!user) {
    return <Redirect to="/pages/Auth/Login" />;
  }

  return <View>{children}</View>;
};

export default ProtectedRoute;
