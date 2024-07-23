import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, GestureResponderEvent } from 'react-native';
import { RootStackParamList } from './types/types'; // Update the path as needed
import { StackNavigationProp } from '@react-navigation/stack';
import { Calendar } from 'react-native-calendars';
import { NavigationProp } from '@react-navigation/native';

const imagePathLogo = require('../../assets/mediFlowLogo.jpg');
const imagePathMenu = require('../../assets/ham.jpg');
const imagePathMessage = require('../../assets/message.jpg');
const imagePathBell = require('../../assets/notification.jpg');
const imagePathUser = require('../../assets/acc.jpg');
const doctorM = require('../../assets/doctorM.png');
const hospital1 = require('../../assets/hospital1.jpg');
const hospital2 = require('../../assets/hospital2.jpg');
const hospital3 = require('../../assets/hospital3.jpg');
const hospital4 = require('../../assets/hospital4.jpg');
const map = require('../../assets/map.jpg');
type DashboardScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Dash'>;
};



  
const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };


  const [task, setTask] = useState('');
    const handleAddTask = () => {
      console.log('Task added:', task);
      setTask(''); // Clear input after adding
    };
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
      <View style={styles.rectangle}>
        <Image source={imagePathLogo} style={styles.logo} />
        <TouchableOpacity onPress={toggleSidebar}>
          <Image source={imagePathMenu} style={styles.menu} />
        </TouchableOpacity>
        <Image source={imagePathMessage} style={styles.msg} />
        <Image source={imagePathBell} style={styles.bell} />
        <Image source={imagePathUser} style={styles.user} />
      </View>

      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require('../../assets/blood.jpg')} style={styles.icon} />
          <Text style={styles.label}>Blood Group</Text>
          <Text style={styles.value}>O+</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/height.jpg')} style={styles.icon} />
          <Text style={styles.label}>Height</Text>
          <Text style={styles.value}>175 cm</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/weight.jpg')} style={styles.icon} />
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.value}>50 kg</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/heart.jpg')} style={styles.icon} />
          <Text style={styles.label}>Healthy Rate</Text>
          <Text style={styles.value}>80%</Text>
        </View>
      </View>
      <Text style={styles.callText1}>Hi Sawani,</Text>
      <Text style={styles.callText2}>Check Your Health</Text>

      <View style={styles.calendarContainer}>
        <Text style={styles.calenderText}>Calender</Text>
        <Calendar 
          // Initially visible month. Default = Date()
          current={new Date().toISOString().split('T')[0]} 
    
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2020-01-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2030-12-31'}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction: string) => <Text>{direction === 'left' ? '<' : '>'}</Text>}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If true, the calendar scrolls to the currently selected date if it falls on a different month than the month displayed. Default = false
          scrollEnabled={true}
          // Specify theme properties to override specific styles
          theme={{
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
          }}
        />
      </View>

      <View style={styles.recentDoctorContainer}>
          <Text style={styles.recentDoctorTitle}>Recent Doctor</Text>
          <View style={styles.recentDoctorImageContainer}>
            <Image source={doctorM} style={styles.recentDoctorImage} />
          </View>
          <TouchableOpacity style={styles.recentDoctorButton} onPress={() => navigation.navigate('Doctor')}>
            <Text style={styles.recentDoctorButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>

 <View style={styles.hospitalContainer}>
          <Text style={styles.hospitalTitle}>Hospitals</Text>
          <View style={styles.hospitalImages}>
            <Image source={hospital1} style={styles.hospitalImage} />
            <Image source={hospital2} style={styles.hospitalImage} />
            <Image source={hospital3} style={styles.hospitalImage} />
            <Image source={hospital4} style={styles.hospitalImage} />
          </View>
          <View style={styles.radioButtonsContainer}>
            <TouchableOpacity style={styles.radioButton} />
            <TouchableOpacity style={styles.radioButton} />
            <TouchableOpacity style={styles.radioButton} />
            <TouchableOpacity style={styles.radioButton} />
          </View>
        </View>

        <View style={styles.mapContainer}>
          <Image source={map} style={styles.mapImg} />
        </View>

        <View style={styles.todoContainer}>
          <Text style={styles.todoTitle}>To Do List</Text>
          <Text style={styles.showAll}>Show all</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
          <View style={styles.radioButtonsContainer}>
            <TouchableOpacity style={styles.radioButton} />
            <Text style={styles.radioButtonText}>Short task goes there</Text>
          </View>
        </View>



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 40,
  },
  menu: {
    position:'absolute',
    top: -15,
    left: 90,
    width: 30,
    height: 30,
  },
  msg: {
    position: 'absolute',
    top: 20,
    left: 170,
    width: 20,
    height: 20,
  },
  bell: {
    position: 'absolute',
    top: 20,
    left: 240,
    width: 20,
    height: 20,
  },
  user: {
    position: 'absolute',
    top: 20,
    left: 300,
    width: 20,
    height: 20,
  },
  rectangle: {
    width: '100%',
    height: 70,
    backgroundColor: '#b7ebe4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    marginTop: 70, // Adjust to ensure content is not hidden under the top bar
  },
  card: {
    width: '90%',
    backgroundColor: '#e3e8e5',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    position:'absolute',
 
    color: '#333',
    left:'10%',
    top:'47%',
  },
  value: {
    position:'absolute',
    fontSize: 16,
    color: '#333',
    right:'10%',
    top:'47%',
    
   

  },
  callText1:{
    fontSize:25,
    position:'absolute',
    top:600,
    left:'7%',
    right:'5%',
    color:'black',
    fontWeight:'bold'
  },
  callText2:{
    fontSize:25,
    position:'absolute',
    top:650,
    left:'7%',
    right:'5%',
    color:'black',
    fontWeight:'bold'
  },
  calendarContainer: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180, // Adjust based on your layout
    
  },
  calenderText:{
    fontSize:18,
    marginBottom:20,
    textAlign:'center',
    color:'black',
    fontWeight:'bold'
  },
  doctorViewComponent:{
    position:'absolute',
    top:1000,

  },
  recentDoctorContainer: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    alignSelf:'center',
  },
  recentDoctorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  recentDoctorImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 10,
  },
  recentDoctorImage: {
    width: '100%',
    height: '100%',
  },
  recentDoctorButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  recentDoctorButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  hospitalContainer: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignSelf:'center',
  },
  hospitalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  hospitalImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hospitalImage: {
    width: '23%',
    height: 80,
    borderRadius: 10,
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf:'center',
  },
  radioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007bff',
    marginHorizontal: 5,
  },
  mapContainer: {
    width: '90%',
    marginTop: 20,
    alignSelf:'center',
  },
  mapImg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  todoContainer: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignSelf:'center',
    marginBottom:20
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  showAll: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  radioButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
 
});

export default DashboardScreen;
