// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Logout } from './Redux/Action/Auth.Action';

const ProtectedRoute = ({ children }) => {
  const reduxToken = useSelector((state) => state.Auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const asyncStorageToken = await AsyncStorage.getItem('userToken');
        // If no token in Redux or AsyncStorage
        if (!reduxToken || !asyncStorageToken) {
          navigation.navigate('Login');
          return;
        }

        // Check if tokens match
        if (reduxToken !== asyncStorageToken) {
          await AsyncStorage.removeItem('userToken');
          dispatch(Logout(null));
          navigation.navigate('Login');
          return;
        }

        // Placeholder for token validation API call
        const isValid = await validateToken(reduxToken); // Implement your validation logic here

        if (!isValid) {
          await AsyncStorage.removeItem('userToken');
          dispatch(Logout(null));
          navigation.navigate('Login'); // Navigate to login if token is invalid
          return;
        }

        // Token is valid
        setIsValidating(false);
      } catch (error) {
        console.error('Token validation error:', error);
        // Handle error (e.g., navigate to login or show an error message)
        navigation.navigate('Login');
      }
    };

    checkTokenValidity();
  }, [reduxToken, navigation, dispatch]);

  if (isValidating) {
    return null; // or a loading spinner/component if desired
  }

  return children; // Render the protected content
};

const validateToken = async (token) => {
  // Replace with your token validation logic (e.g., API call)
  // Example:
  // const response = await fetch('your_api_endpoint', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   },
  // });
  // const data = await response.json();
  // return data.isValid;

  return true; // Placeholder; always returns valid for now
};

export default ProtectedRoute;
