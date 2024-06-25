

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const LogoImage = require('../../assets/mediFlowLogo.jpg');

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const RegistrationScreen = (props: any) =>{
    const stack=props.navigation;
   
  const isDarkMode = useColorScheme() === 'dark';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nic, setNic] = useState('');
  const [contactAddress, setContactAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nicImage, setNicImage] = useState<any>(null);

  const handleRegistration = () => {
   
    const userData = {
        firstName,
        lastName,
        nic,
        contactAddress,
        email,
        password,
        nicImage,
      };
  
      // Save the userData to storage or context for later use (e.g., AsyncStorage, context API, etc.)
      // Example using AsyncStorage:
      saveUserDataToStorage(userData);
  
      // Navigate to login screen after registration
      stack.navigate('Login');
  
      // Optionally, you can clear the form fields after registration
      clearFormFields();


    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('NIC:', nic);
    console.log('Contact Address:', contactAddress);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('NIC Image:', nicImage);
    // Add further logic such as API calls, validation, etc.
  };
  const saveUserDataToStorage = async (userData: { firstName: string; lastName: string; nic: string; contactAddress: string; email: string; password: string; nicImage: any; }) => {
    // Example using AsyncStorage (make sure to import AsyncStorage from 'react-native')
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('User data saved successfully:', userData);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const clearFormFields = () => {
    setFirstName('');
    setLastName('');
    setNic('');
    setContactAddress('');
    setEmail('');
    setPassword('');
    setNicImage(null);
  };


  const handleLogin = (stack: any) => {
    stack.navigate('Login');
    // Implement your registration logic here
    
    console.log('Login');
    // Add further logic such as API calls, validation, etc.
  };
  const handleChooseNicImage = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setNicImage(result[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            padding: 24,
            borderRadius: 10,
            margin: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
      
          }}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={styles.headerTopic}>Create an account</Text>
            <View style={styles.sectionContainer}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
              <TextInput
                style={styles.input}
                placeholder="NIC"
                value={nic}
                onChangeText={setNic}
              />
              <TextInput
                style={styles.input}
                placeholder="Contact Address"
                value={contactAddress}
                onChangeText={setContactAddress}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.fileButton}
                onPress={handleChooseNicImage}>
                <Text style={styles.fileButtonText}>
                  {nicImage ? 'Change NIC Image' : 'Upload NIC Image'}
                </Text>
              </TouchableOpacity>
              {nicImage && (
                <Image
                  source={{ uri: nicImage.uri }}
                  style={styles.imagePreview}
                />
              )}
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => handleRegistration()}>
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin(stack)}>
                <Text style={styles.loginButtonText}>
                Already have an account?{' '}
               <Text style={styles.loginSpanText}>Login here</Text>
               </Text>
              </TouchableOpacity>
            </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 headerTopic:{
 fontSize:25,
 textAlign:'center',
 marginTop:27,
 color:'#000',
 fontWeight:'bold',


 },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logo: {
    width: 126,
    height: 81.3,
    //resizeMode: 'center', // Adjust the resizeMode as needed
    alignSelf:'center'
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },



  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  input: {
   width:'100%',
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  fileButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  fileButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    marginTop:18,
    color: 'black',
    fontSize: 15,
  },
  loginSpanText: {
    marginTop:18,
    color:'blue',
  },
});

export default RegistrationScreen;


