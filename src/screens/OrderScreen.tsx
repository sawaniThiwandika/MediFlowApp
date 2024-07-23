
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, TextInput, Button, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types/types';

const imagePath = require('../../assets/mediFlowLogo.jpg');
const imagePathMessge = require('../../assets/message.jpg');
const imagePathBell = require('../../assets/notification.jpg');
const imagePathUser = require('../../assets/acc.jpg');

type OrderFormScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const OrderFormScreen: React.FC<OrderFormScreenProps> = ({ navigation }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    medicine: '',
    streetAddress: '',
    townCity: '',
    country: '',
    phoneNumber: '',
    email: '',
    productName: '',
    quantity: '',
    subtotal: '',
    shipping: '',
  });

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOrderSubmit = () => {
    Alert.alert('Confirmation', 'Are you a premium member?', [
      { text: 'Yes', onPress: () => console.log('Yes Pressed') },
      { text: 'No', onPress: () => console.log('No Pressed') },
    ]);
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
          <View style={styles.iconBackground}>
            <Image source={imagePathUser} style={styles.icon} />
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={(value) => handleInputChange('firstName', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={(value) => handleInputChange('lastName', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Medicine"
            value={formData.medicine}
            onChangeText={(value) => handleInputChange('medicine', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            value={formData.streetAddress}
            onChangeText={(value) => handleInputChange('streetAddress', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Town/City"
            value={formData.townCity}
            onChangeText={(value) => handleInputChange('townCity', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={formData.country}
            onChangeText={(value) => handleInputChange('country', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChangeText={(value) => handleInputChange('phoneNumber', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
          <Text style={styles.sectionTitle}>Your Order</Text>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={formData.productName}
            onChangeText={(value) => handleInputChange('productName', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={formData.quantity}
            onChangeText={(value) => handleInputChange('quantity', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Subtotal"
            value={formData.subtotal}
            onChangeText={(value) => handleInputChange('subtotal', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Shipping"
            value={formData.shipping}
            onChangeText={(value) => handleInputChange('shipping', value)}
          />
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>Bank Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>Cash</Text>
          </TouchableOpacity>
          <Button title="Next Order" onPress={handleOrderSubmit} />
        </View>
      </ScrollView>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9', // Light background color for better contrast
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
    zIndex: 1,
    borderBottomWidth: 1, // Optional: Add a border for better separation
    borderBottomColor: '#ddd', // Optional: Light gray border color
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Dark color for better visibility
    marginLeft: -30, // Reduced gap between logo and text
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff', // White background for circular icons
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 3,
  },
  icon: {
    width: 25,
    height: 25,
  },
  scrollContainer: {
    paddingTop: 80, // Adjust to leave space for the header
    paddingBottom: 100, // Adjust to leave space for the navbar
    alignItems: 'center',
  },
  form: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff', // White background for the form
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333333', // Dark color for text
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  paymentButton: {
    backgroundColor: '#b7ebe4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  paymentButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333', // Dark color for text
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
    zIndex: 1, // Ensure navbar is on top of other content
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav1Text: {
    marginTop: 5,
    color: '#333333', // Dark color for text
  },
  logo5: {
    width: 25,
    height: 25,
  },
});

export default OrderFormScreen;
