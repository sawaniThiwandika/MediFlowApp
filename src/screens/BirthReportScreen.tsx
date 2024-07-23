import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Button, Image, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native'; // Ensure this import

const imageBirth = require('../../assets/BirthC.jpg');
const introBack = require('../../assets/introBack.jpg'); // Assuming this is your background image

type BirthReportProps = {
  navigation: NavigationProp<any>;
};

const BirthReport: React.FC<BirthReportProps> = ({ navigation }) => {
  const [form, setForm] = useState({
    fullNameChild: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: '',
    fullNameMother: '',
    fullNameFather: '',
    occupationMother: '',
    occupationFather: '',
    nationalityMother: '',
    nationalityFather: '',
    residenceAddress: '',
    birthWeight: '',
    birthLength: '',
    healthConditions: '',
    registrationNumber: '',
    assistedBy: '',
    dateOfRegistration: '',
    registrarSignature: '',
    specialRemarks: '',
    immunizations: ''
  });

  const handleInputChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', form);
    navigation.navigate('DownloadBirthReport'); // Navigate to the DownlordBirthC screen
  };

  return (
    <ImageBackground source={introBack} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Birth Certificate</Text>

          {/* Basic Information */}
          <Text style={styles.label}>Full name of the child</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('fullNameChild', text)}
            value={form.fullNameChild}
          />
          <Text style={styles.label}>Date of birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('dateOfBirth', text)}
            value={form.dateOfBirth}
          />
          <Text style={styles.label}>Time of birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('timeOfBirth', text)}
            value={form.timeOfBirth}
          />
          <Text style={styles.label}>Place of birth (hospital/home address)</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('placeOfBirth', text)}
            value={form.placeOfBirth}
          />
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('gender', text)}
            value={form.gender}
          />

          {/* Parent Information */}
          <Text style={styles.heading}>Parent Information</Text>
          <Text style={styles.label}>Full name of the mother</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('fullNameMother', text)}
            value={form.fullNameMother}
          />
          <Text style={styles.label}>Full name of the father</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('fullNameFather', text)}
            value={form.fullNameFather}
          />
          <Text style={styles.label}>Occupation of the mother</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('occupationMother', text)}
            value={form.occupationMother}
          />
          <Text style={styles.label}>Occupation of the father</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('occupationFather', text)}
            value={form.occupationFather}
          />
          <Text style={styles.label}>Nationality and ethnicity of the mother</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('nationalityMother', text)}
            value={form.nationalityMother}
          />
          <Text style={styles.label}>Nationality and ethnicity of the father</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('nationalityFather', text)}
            value={form.nationalityFather}
          />
          <Text style={styles.label}>Residence address of the parents</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('residenceAddress', text)}
            value={form.residenceAddress}
          />

          {/* Child's Information */}
          <Text style={styles.heading}>Child's Information</Text>
          <Text style={styles.label}>Birth weight</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('birthWeight', text)}
            value={form.birthWeight}
          />
          <Text style={styles.label}>Length/height at birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('birthLength', text)}
            value={form.birthLength}
          />
          <Text style={styles.label}>Any notable health conditions at birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('healthConditions', text)}
            value={form.healthConditions}
          />

          {/* Official Details */}
          <Text style={styles.heading}>Official Details</Text>
          <Text style={styles.label}>Birth registration number</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('registrationNumber', text)}
            value={form.registrationNumber}
          />
          <Text style={styles.label}>Name and signature of the person who assisted with the birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('assistedBy', text)}
            value={form.assistedBy}
          />
          <Text style={styles.label}>Date of registration</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('dateOfRegistration', text)}
            value={form.dateOfRegistration}
          />
          <Text style={styles.label}>Name and signature of the registrar or official in charge</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('registrarSignature', text)}
            value={form.registrarSignature}
          />

          {/* Additional Information */}
          <Text style={styles.heading}>Additional Information</Text>
          <Text style={styles.label}>Any special remarks or notes</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('specialRemarks', text)}
            value={form.specialRemarks}
          />
          <Text style={styles.label}>Details of any immunizations given at birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleInputChange('immunizations', text)}
            value={form.immunizations}
          />

          <View style={styles.imageContainer}>
            <Image source={imageBirth} style={styles.image} />
          </View>

          <Button  title="Submit" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '80%',
    height: 150,
    borderRadius: 10,
  },
});

export default BirthReport;