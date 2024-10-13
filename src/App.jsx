/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './Auth/User/User.jsx';
import Money from './Auth/Money/Money.jsx';
import Ride from './Auth/Ride/Ride.jsx';
import Activity from './Auth/Activity/Activity.jsx';
import SplashScreen from './SplashScreen/SplashScreen.jsx';
import LoginScreen from './Login/Login.jsx';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Store from './Redux/Store.js';
import ProtectedRoute from './ProtectedRoute.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLogin } from './Redux/Action/Auth.Action.js';
import { useNavigation } from '@react-navigation/native';

// Enable native screens for performance optimization
enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Ride') {
            iconName = focused ? 'map-sharp' : 'map-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          } else if (route.name === 'Money') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Me') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Ride" component={Ride} options={{ tabBarBadge: 1 }} />
      <Tab.Screen name="Money" component={Money} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Me" component={User} />
    </Tab.Navigator>

  );
}

function App({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  const reduxToken = useSelector((state) => state.Auth);
  React.useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        dispatch(setLogin(token));
        navigation?.navigate('MainApp');
      } else {
        dispatch(setLogin(null));
        navigation?.navigate('Login');
      }
    };
    setTimeout(() => {
      setIsLoading(false);
      checkLoginStatus();
    }, 3000);

  }, [dispatch, navigation]);

  // eslint-disable-next-line quotes
  if (isLoading || reduxToken === "SplashScreen") {

    return <SplashScreen navigation={navigation} />;
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!reduxToken ? <Stack.Screen name="Login" component={LoginScreen} /> :
            <Stack.Screen name="MainApp">
              {(props) => (
                <ProtectedRoute>
                  <MainApp {...props} />
                </ProtectedRoute>
              )}
            </Stack.Screen>}



        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const RootApp = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

export default RootApp;