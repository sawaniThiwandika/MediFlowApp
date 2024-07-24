import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, GestureResponderEvent, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types/types';
import { Calendar } from 'react-native-calendars';

const imagePathLogo = require('../../assets/mediFlowLogo.jpg');
const imagePathMessage = require('../../assets/message.jpg');
const imagePathBell = require('../../assets/notification.jpg');
const imagePathUser = require('../../assets/acc.jpg');
const imageDate = require('../../assets/day.png');

type MyHealthScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const MyHealthScreen: React.FC<MyHealthScreenProps> = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navigate to the BirthReport screen
  };

  const handleButtonPress1 = () => {
    // Navigate to the BirthReport screen
  };

  const MyCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('');

    type DayType = {
      dateString: string;
      day: number;
      month: number;
      year: number;
      timestamp: number;
    };

    const onDayPress = (day: DayType) => {
      setSelectedDate(day.dateString);

      // Alert.alert('Date Selected', day.dateString);
      navigation.navigate('Appointment',{ selectedDate: day.dateString });
      // Add your custom function here
    };

    // Define the dates to highlight with background colors
    const markedDates = {
      '2024-06-15': { customStyles: { container: { backgroundColor: 'red' }, text: { color: 'white' } } },
      '2024-06-20': { customStyles: { container: { backgroundColor: 'red' }, text: { color: 'white' } } },
      '2024-07-10': { customStyles: { container: { backgroundColor: 'blue' }, text: { color: 'white' } } },
      '2024-07-15': { customStyles: { container: { backgroundColor: 'blue' }, text: { color: 'white' } } },
      [selectedDate]: { selected: true, customStyles: { container: { backgroundColor: 'blue' }, text: { color: 'white' } } }
    };

    return (
      <View style={styles.calendarContainer}>
        <Text style={styles.headerNav}>Resent Updates</Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={markedDates}
          markingType={'custom'}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
        />
        {selectedDate ? (
          <View style={styles.selectedDateContainer}>
            <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
     <View style={styles.headerNav}>
        <Image source={imagePathLogo} style={styles.logo} />
       <Text style={styles.logoText}>MediFlow</Text>

        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Image source={imagePathMessage} style={styles.iconHeader} />
          </View>
          <View style={styles.iconBackground}>
            <Image source={imagePathBell} style={styles.iconHeader} />
          </View>
          <TouchableOpacity style={styles.iconBackground } onPress={() => navigation.navigate('Profile')}>
            <Image source={imagePathUser} style={styles.iconHeader} />
          </TouchableOpacity>
        </View>
      </View>

      <MyCalendar />
      <View style={styles.legendContainer}>
        
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: 'red' }]} />
          <Text style={styles.legendText}>Updates in previous months</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColorBox, { backgroundColor: 'blue' }]} />
          <Text style={styles.legendText}>Updatets in this month</Text>
        </View>
  
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 0,
  },
  headerNav: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:0,
  
  
    zIndex: 1, // Ensure header is on top of other content
  },
  logo: {
    width: 40,
    height: 40,
    left:5,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: -40, // Reduced gap between logo and text
  },
  iconContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    elevation: 3, // Add shadow for elevation effect
  },
  iconHeader: {
    width: 24,
    height: 24,
  },


  
  
  calendarContainer: {
    flex: 1,
    marginTop: 150,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
    textAlign: 'center',
  },
  selectedDateContainer: {
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
  selectedDateText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  legendContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f4f7',
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

export default MyHealthScreen;
