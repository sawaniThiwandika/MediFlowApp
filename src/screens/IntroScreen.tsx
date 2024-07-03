import React, { useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text,Linking, Animated } from 'react-native';

// Import your image (example path)
const imagePath = require('../../assets/medi.gif');
const LogoImage = require('../../assets/mediFlowLogo.jpg');

interface LoginProps {
    navigation: any;
  }

  const IntroPage: React.FC<LoginProps> = ({ navigation }) => {
    // Initialize an animated value (opacity)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Function to animate the image when component mounts
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Animated View for fading effect */}
      <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
        {/* Image with fade-in effect */}
        {/* <Image source={LogoImage} style={styles.logo} /> */}

        <Image source={imagePath} style={styles.image} onLoad={fadeIn} />
      </Animated.View>

      {/* Buttons for navigation or actions */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
      >
        <Text style={styles.buttonText1}>Watch Video</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    left:30,
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderColor: 'black', // Set the border color to black
    borderWidth: 1, 
  },
  secondaryButton: {
    backgroundColor: 'white', 
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    
  },

  buttonText1: {
    color: 'black',
  },

//   logo: {
//     width: 126,
//     height: 81.3,
//     alignSelf: 'center',
//   },
});

export default IntroPage;
