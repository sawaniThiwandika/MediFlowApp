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
  Alert,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LogoImage = require('../../assets/mediFlowLogo.jpg');

const RegistrationPageScreen = (props: any) => {
  const stack = props.navigation;
  const isDarkMode = useColorScheme() === 'dark';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nic, setNic] = useState('');
  const [contactAddress, setContactAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nicImage, setNicImage] = useState<any>(null);

  const handleRegistration = async () => {
    if (!firstName || !lastName || !nic || !contactAddress || !email || !password || !nicImage) {
      Alert.alert('Error', 'Please fill in all fields and upload an NIC image.');
      return;
    }

    const userData = {
      firstName,
      lastName,
      nic,
      contactAddress,
      email,
      password,
      nicImage,
    };

    try {
      let users = await getUsersFromStorage();
      if (!users) {
        users = [];
      }

      users.push(userData);
      await saveUsersToStorage(users);

      stack.navigate('Login');
      clearFormFields();
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Error', 'An error occurred during registration. Please try again.');
    }
  };

  const getUsersFromStorage = async () => {
    try {
      const users = await AsyncStorage.getItem('users');
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error fetching users from storage:', error);
      return [];
    }
  };

  const saveUsersToStorage = async (users: any[]) => {
    try {
      await AsyncStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
      console.error('Error saving user data:', error);
      Alert.alert('Error', 'An error occurred while saving user data. Please try again.');
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

  const handleLogin = () => {
    stack.navigate('Login');
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
        console.error('Error picking document:', err);
      }
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
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
            <TouchableOpacity style={styles.fileButton} onPress={handleChooseNicImage}>
              <Text style={styles.fileButtonText}>
                {nicImage ? 'Change NIC Image' : 'Upload NIC Image'}
              </Text>
            </TouchableOpacity>
            {nicImage && (
              <Image source={{ uri: nicImage.uri }} style={styles.imagePreview} />
            )}
            <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>
                Already have an account? <Text style={styles.loginSpanText}>Login here</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTopic: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 27,
    color: '#000',
    fontWeight: 'bold',
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
    alignSelf: 'center',
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
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  fileButton: {
    backgroundColor: '#2196F3',
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  fileButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 100,
  },
  registerButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderColor: 'black', // Set the border color to black
    borderWidth: 1, // Set the border width
    // borderStyle: 'solid', // Optional: default is 'solid'. You can also use 'dotted' or 'dashed'
  },

  registerButtonText: {
    color: 'black',
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
    marginTop: 18,
    color: 'black',
    fontSize: 15,
  },
  loginSpanText: {
    marginTop: 18,
    color: 'blue',
  },
});

export default RegistrationPageScreen;
