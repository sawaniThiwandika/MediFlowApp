import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const introBack = require('../../assets/introBack.jpg');

// Define the types for navigation if using TypeScript
type NavigationProp = {
  navigate: (screen: string) => void;
};

const ClinicReport = () => {
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    gender: '',
    contactInformation: '',
    address: '',
    identificationNumber: '',
    visitDateTime: '',
    reasonForVisit: '',
    durationOfSymptoms: '',
  });

  const navigation = useNavigation<NavigationProp>(); // Initialize navigation

  const handleInputChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', form);
    // Navigate to the DownlordCilnic page
    navigation.navigate('DownloadClinicReport');
    // Add logic to handle form submission, e.g., send data to an API
  };

  return (
    <ImageBackground source={introBack} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Patient Information</Text>
          
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('fullName', text)}
            value={form.fullName}
          />
          
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('age', text)}
            value={form.age}
          />
          
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('gender', text)}
            value={form.gender}
          />
          
          <Text style={styles.label}>Contact information</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('contactInformation', text)}
            value={form.contactInformation}
          />
          
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('address', text)}
            value={form.address}
          />
          
          <Text style={styles.label}>Identification number (e.g., NIC or passport number)</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('identificationNumber', text)}
            value={form.identificationNumber}
          />
          
          <Text style={styles.heading}>Clinic Visit Details</Text>
          
          <Text style={styles.label}>Date and time of the visit</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('visitDateTime', text)}
            value={form.visitDateTime}
          />
          
          <Text style={styles.label}>Reason for the visit (chief complaint)</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('reasonForVisit', text)}
            value={form.reasonForVisit}
          />
          
          <Text style={styles.label}>Duration of symptoms</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('durationOfSymptoms', text)}
            value={form.durationOfSymptoms}
          />

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Adjusts the image to cover the entire background
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  innerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background for form
    borderRadius: 10,
    padding: 20,
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default ClinicReport;