import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types/types';
const imagePath = require('../../assets/mediFlowLogo.jpg');
const imagePathMessge = require('../../assets/message.jpg');
const imagePathBell = require('../../assets/notification.jpg');
const imagePathUser = require('../../assets/acc.jpg');
const imageBirth = require('../../assets/birtScti.png');
const imageClinic = require('../../assets/cilinic.png');
const imageMedicine = require('../../assets/medicin.png');
const imageLab = require('../../assets/lab.png');

type MyHealthScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const MyHealthScreen: React.FC<MyHealthScreenProps> = ({ navigation }) => {

  const handleButtonPress = () => {
    // Navigate to the BirthReport screen
    navigation.navigate('BirthReport');
  };

  const handleButtonPress1 = () => {
    // Navigate to the BirthReport screen
    navigation.navigate('ClinicReport');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={imagePath} style={styles.logo} />
        <Text style={styles.logoText}>MediFlow</Text>

        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Image source={imagePathMessge} style={styles.icon} />
          </View>
          <View style={styles.iconBackground}>
            <Image source={imagePathBell} style={styles.icon} />
          </View>
          <TouchableOpacity style={styles.iconBackground } onPress={() => navigation.navigate('Profile')}>
            <Image source={imagePathUser} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.rectangle}>
          <Image source={imageBirth} style={styles.image} />
          <Text style={styles.title}>Birth Certificate</Text>
          <Text style={styles.description}>Obtain Your Birth Certificate Here</Text>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Click here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rectangle}>
          <Image source={imageClinic} style={styles.image} />
          <Text style={styles.title}>Clinic Report</Text>
          <Text style={styles.description}>Obtain Your Clinic Report Here</Text>
          <TouchableOpacity style={styles.button}  onPress={handleButtonPress1}>
            <Text style={styles.buttonText}>Click here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rectangle}>
          <Image source={imageMedicine} style={styles.image} />
          <Text style={styles.title}>Treatment Report</Text>
          <Text style={styles.description}>Obtain Your Treatment Report Here</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Click here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rectangle}>
          <Image source={imageLab} style={styles.image} />
          <Text style={styles.title}>Lab Report</Text>
          <Text style={styles.description}>Obtain Your Lab Report Here</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Click here</Text>
          </TouchableOpacity>
        </View>

        {/* New Rectangle */}
        {/* <View style={styles.newRectangle}>
          <Text style={styles.newRectangleText}>New Rectangle</Text>
        </View> */}

        {/* Add more scrollable content here */}
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    zIndex: 1, // Ensure header is on top of other content
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: -40, // Reduced gap between logo and text
  },
  iconContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    elevation: 3, // Add shadow for elevation effect
  },
  icon: {
    width: 24,
    height: 24,
  },
  scrollContainer: {
    paddingTop: 80, // Adjust to leave space for the header
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  rectangle: {
    width: '80%',  // Width set to 70%
    height: 270,    // Fixed height
    backgroundColor: '#e3e8e5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',         // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2,           // Shadow opacity for iOS
    shadowRadius: 5,              // Shadow radius for iOS
    elevation: 5,                 // Elevation for Android
    alignSelf: 'center',          // Center horizontally
    marginVertical: 20,
    padding: 10,  
                    // Add padding for inner content
  },
  image: {
    marginTop:20,
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginBottom:30,
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  newRectangle: {
    width: 80, // New width
    height: 100, // New height
    backgroundColor: 'blue', // New background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
  newRectangleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navset: {
    position: 'absolute',
    width: '100%',
    height: 65,
    backgroundColor: '#e3e8e5',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1, // Ensure navset is on top of other content
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav1Text: {
    marginTop: 5,
  },
  logo5: {
    width: 25,
    height: 25,
  },
});

export default MyHealthScreen;