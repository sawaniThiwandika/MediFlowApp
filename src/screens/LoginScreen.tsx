import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

interface LoginScreenProps {
    navigation: any; // Replace with the correct type from React Navigation
}

interface LoginFieldProps {
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
}

function LoginField({ setEmail, setPassword }: LoginFieldProps) {
    return (
        <View>
            <View style={{ backgroundColor: 'white', borderRadius: 10, height: 50, marginHorizontal: 40, marginTop: 300, justifyContent: 'center' }}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={'gray'}
                    onChangeText={setEmail}
                />
            </View>

            <View style={{ backgroundColor: 'white', borderRadius: 10, height: 50, marginHorizontal: 40, marginTop: 20, justifyContent: 'center' }}>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor={'gray'}
                    secureTextEntry
                    onChangeText={setPassword}
                />
            </View>
        </View>
    );
}

function SignInButton() {
    return (
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ backgroundColor: 'blue', height: 70, flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 30 }}>Sign in</Text>
            </View>

            <View style={{ backgroundColor: 'green', height: 70, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
            </View>
        </View>
    );
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkCredentials = async (emailAddress: string, pwd: string) => {
        try {
            const storedUsers = await AsyncStorage.getItem('users');
            if (storedUsers) {
                const users = JSON.parse(storedUsers);
                console.log('Stored users:', users);
                const user = users.find((user: any) => user.email === emailAddress && user.password === pwd);

                if (user) {
                    console.log('Login successful');
                    navigation.navigate('SignUp');
                    // Navigate to the next screen or dashboard
                    // navigation.navigate('Dashboard'); // Example of navigation
                } else {
                    console.log('Invalid credentials');
                    // Display error message to user
                }
            } else {
                console.log('No user data found');
                // Display error message to user
            }
        } catch (error) {
            console.error('Error checking credentials:', error);
        }
    };

    const getInputs = () => {
        checkCredentials(email, password);
    };

    const goToSignUp = () => {
        navigation.navigate('registration');
    };

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundIMg} source={require('../../assets/1.jpg')} />

            <Text style={styles.headerText}>Login</Text>
            <LoginField setEmail={setEmail} setPassword={setPassword} />
            <TouchableOpacity onPress={goToSignUp}>
                <SignInButton />
            </TouchableOpacity>

            <TouchableOpacity onPress={getInputs}>
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ backgroundColor: 'blue', height: 70, flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 30 }}>Login</Text>
                    </View>

                    <View style={{ backgroundColor: 'green', height: 70, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundIMg: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    headerText: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        marginTop: 30,
    }
});
