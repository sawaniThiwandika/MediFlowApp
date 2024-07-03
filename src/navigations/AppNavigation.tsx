// AppNavigation.js
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import IntroScreen from '../screens/IntroScreen';
import LoginPageScreen from '../screens/LoginPageScreen';
import RegistrationPageScreen from '../screens/RegistrationPageScreen';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
         headerShown:false
      }
       
      }>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginPageScreen} />
        <Stack.Screen name="Home" component={SignupScreen} />
        <Stack.Screen name="Registration" component={RegistrationPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation; // Export default if this is the primary export
