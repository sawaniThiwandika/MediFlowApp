import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const imagePath = require('../../assets/mediFlowLogo.jpg');

interface LoginProps {
  navigation: any;
}

const LoginPageScreen: React.FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    console.log('Login button pressed');
    checkCredentials(username, password);
  };

  const checkCredentials = async (username: string, password: string) => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        console.log('Stored users:', users);
        const user = users.find((user: any) => user.email === username && user.password === password);

        if (user) {
          console.log('Login successful');
          navigation.navigate('Home');
        } else {
          console.log('Invalid credentials');
        }
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error checking credentials:', error);
    }
  };

  const goToSignUp = () => {
    navigation.navigate('Registration');
  };

  const goToForgotPassword=() =>{

  }
  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.logo} />
      <Text style={styles.title}>Login into account</Text>

      <TextInput
        style={styles.input}
        placeholder="User name"
        placeholderTextColor={'gray'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'gray'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToForgotPassword}>
        <Text style={styles.linkTextV}>Forget Password?</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        <Text style={styles.titlefgt}>
          <Text style={{ color: '#070530' }}>facebook     </Text>
          <Text style={{ color: '#800303' }}>google       </Text>
          <Text style={{ color: '#32dde3' }}>twitter</Text>
        </Text>
      </Text>

      <Text style={styles.linkTextM}>
        Don't have an account?{' '}
        <Text style={styles.linkText} onPress={goToSignUp}>Register here</Text>
      </Text>
    </View>
  );
};

export default LoginPageScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width:100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    left: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    color:'black'
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  linkTextM: {
    fontSize: 15,
    marginTop: 30,
  },
  logo: {
    width: 126,
    height: 81.3,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },

  linkTextV: {
   marginTop: 25,
   marginBottom: 30,
  },


  titlefgt: {
   fontSize: 15,
    
  },
});
