
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const DownlordBirthC = () => {
  const handleDownload = () => {
    Alert.alert("Download", "Downloading the birth certificate...");
    // Add your download logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Downloading a birth certificate in Sri Lanka involves visiting the Registrar General’s Department website, creating an account, filling out an application, uploading necessary documents, paying the fee, and then downloading and printing the certificate once approved.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Download" color="black" onPress={handleDownload} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  buttonContainer: {
    width: '60%',
  }
});

export default DownlordBirthC;
