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
import DashboardScreen from '../navigations/DashboardNavigation';
import DoctorDetailsScreen from '../screens/DoctorDetailsScreen';
import NurseDetailsScreen from '../screens/NurseDetailsScreen';
import BirthReportScreen from '../screens/BirthReportScreen';
import DownloadBirthReportScreen from '../screens/BirthCetificateDownloadScreen';
import ClinicReportScreen from '../screens/ClinicReportScreen';
import DownloadClinicReportScreen from '../screens/DownloadClinicReportScreen';
import profile from '../screens/profileScreen';
import Appointment from '../screens/ChannelDetails';
const Stack = createStackNavigator()

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
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="DoctorDetails" component={DoctorDetailsScreen}/>
        <Stack.Screen name="NurseDetails" component={NurseDetailsScreen}/>
        <Stack.Screen name="BirthReport" component={BirthReportScreen}/>
        <Stack.Screen name="DownloadBirthReport" component={DownloadBirthReportScreen}/>
        <Stack.Screen name="ClinicReport" component={ClinicReportScreen}/>
        <Stack.Screen name="DownloadClinicReport" component={DownloadClinicReportScreen}/>
        <Stack.Screen name="Profile" component={profile}/>
        <Stack.Screen name="Appointment" component={Appointment}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation; // Export default if this is the primary export