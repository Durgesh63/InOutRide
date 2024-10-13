import * as React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './User/User.jsx';
import Money from './Money/Money';
import Ride from './Ride/Ride';
import Activity from './Activity/Activity.jsx';


// Enable native screens for performance optimization
enableScreens();

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      > */}
        {/* <Stack.Screen name="Home"> */}

        <Tab.Navigator
          screenOptions={({ route }) => ({

            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Ride') {
                iconName = focused
                  ? 'map-sharp'
                  : 'map-outline';
              } else if (route.name === 'Activity') {
                iconName = focused ? 'receipt' : 'receipt-outline';
              } else if (route.name === 'Money') {
                iconName = focused ? 'wallet' : 'wallet-outline';
              } else if (route.name === 'Me') {
                iconName = focused ? 'person' : 'person-outline';
              }

              // You can return any component that you like here!
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
        {/* </Stack.Navigator> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
