
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const DownlordCilnic = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/CR.jpeg')} // Replace with your image path
        style={styles.image}
      />
      <Text style={styles.text}>DownlordCilnic</Text>
      <Button
        title="Download"
        onPress={() => {
          // Add your download logic here
        }}
        color="#000" // Button color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '90%',
    height: 300,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DownlordCilnic;
