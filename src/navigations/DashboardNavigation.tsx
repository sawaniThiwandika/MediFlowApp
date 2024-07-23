import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View } from 'react-native';
import DashboardContent from '../screens/Dashboard'; // Extracted content of DashboardScreen
import HomeScreen from '../screens/Dashboard'; // Replace with the actual Home component
import SettingsScreen from '../screens/RegistrationScreen'; // Replace with the actual Settings component

const Tab = createBottomTabNavigator();




const DashboardTabNavigator = () => {
  return (
    

    <Tab.Navigator
    
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = require('../../assets/home.jpg'); // Replace with your image path
          } else if (route.name === 'Shedule') {
            iconSource = require('../../assets/timeTable.jpg'); // Replace with your image path
          } else if (route.name === 'Doctor') {
            iconSource = require('../../assets/doctor.jpg'); // Replace with your image path
          } else if (route.name === 'Report') {
            iconSource = require('../../assets/report.jpg'); // Replace with your image path
          } else if (route.name === 'Order') {
            iconSource = require('../../assets/order.jpg'); // Replace with your image path
          }

          return (
            <Image
              source={iconSource}
              style={{ width: size, height: size }}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 5, height: 60 }, // Adjust the style as needed
        tabBarLabelStyle: { fontSize: 12 }, // Adjust label style if needed
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shedule" component={SettingsScreen} />
      <Tab.Screen name="Doctor" component={SettingsScreen} />
      <Tab.Screen name="Report" component={DashboardContent}  />
      <Tab.Screen name="Order" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default DashboardTabNavigator;
