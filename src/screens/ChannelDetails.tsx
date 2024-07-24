import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const doctorImage = require('../../assets/doctorM.png');

type AppointmentsProps = {
  navigation: NavigationProp<any>;
};

const Appointment: React.FC<AppointmentsProps> = ({ navigation }) => {
  const appointments = [
    {
      day: 'WEDNESDAY',
      time: '10:00 AM - 12:00 PM',
      room: 'ROOM 101',
      type: 'General Check-up',
      doctorName: 'Dr. Lasika Karanngoda',
      medicalCenter: 'Teaching Hospital, Kalutara',
      diagnosis: 'Hypertension',
      prescribedDrug: 'Lisinopril',
      note: 'The patient presented with high blood pressure. Lisinopril, an ACE inhibitor, was prescribed to manage hypertension.',
    },
    {
      day: 'WEDNESDAY',
      time: '1:00 PM - 2:30 PM',
      room: 'ROOM 202',
      type: 'Follow-up Consultation',
      doctorName: 'Dr. Lasika Karanngoda',
      medicalCenter: 'Teaching Hospital, Kalutara',
      diagnosis: 'Hypertension',
      prescribedDrug: 'Lisinopril',
      note: 'The patient presented with high blood pressure. Lisinopril, an ACE inhibitor, was prescribed to manage hypertension.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {appointments.map((appointment, index) => (
        <View key={index} style={styles.appointmentWrapper}>
          <View style={styles.sideLine} />
          <View style={styles.appointmentContainer}>
            <View style={styles.header}>
              <Text style={styles.time}>{appointment.day}</Text>
              <Text style={styles.room}>{appointment.time}</Text>
            </View>
            <View style={styles.details}>
              <Image source={doctorImage} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.title}>{appointment.type}</Text>
                <Text style={styles.doctorName}>{appointment.doctorName}</Text>
                <Text style={styles.medicalCenter}>{appointment.medicalCenter}</Text>
                <Text style={styles.diagnosis}>Diagnosis: {appointment.diagnosis}</Text>
                <Text style={styles.prescribedDrug}>Prescribed Drug: {appointment.prescribedDrug}</Text>
                <Text style={styles.note}>Note: {appointment.note}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  appointmentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  sideLine: {
    width: 5,
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  appointmentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginLeft: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  room: {
    fontSize: 16,
    color: '#555',
  },
  details: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 5,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  medicalCenter: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  diagnosis: {
    fontSize: 14,
    marginBottom: 5,
  },
  prescribedDrug: {
    fontSize: 14,
    marginBottom: 5,
  },
  note: {
    fontSize: 14,
    color: '#777',
  },
  legendContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  legendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendColorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
    color: '#333',
  },

});

export default Appointment;
