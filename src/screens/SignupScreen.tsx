import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
  } from 'react-native';
  function LoginField(){
    return(
      <View>
        <View style={{backgroundColor:'white', borderRadius:10,height:50,marginHorizontal:40,marginTop:300, justifyContent:'center'}}>
      <TextInput placeholder='Email' placeholderTextColor={'gray'}></TextInput>
        </View>
  
        <View style={{backgroundColor:'white', borderRadius:10,height:50,marginHorizontal:40,marginTop:20,justifyContent:'center'}}>
      <TextInput placeholder='Password' placeholderTextColor={'gray'}></TextInput>
        </View>
      </View>
  
    );
   }
  
   function SignInButton(){
    return(
      <View style={{flexDirection:'row', marginTop:30}}>
        <View style={{backgroundColor:'blue',height:70,flex:1, justifyContent:'center'}}>
        <Text style={{textAlign:'center', color:'white',fontSize:30}}>Login</Text>
  
        </View >
  
        <View style={{backgroundColor:'green',height:70,flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{width:50,height:50, backgroundColor:'yellow'}}></View>
      
  
        </View>
      </View>
    );
   }
  
  const SignupScreen = () =>{
    return(

        <View style={styles.container}>
        <Image style={styles.backgroundIMg}source={
          require('../../assets/1.jpg')
          
        }/>
        <Text style={styles.headerText}>Sign Up</Text>
        <LoginField/>
        <SignInButton/>
    
    
    
      </View>
      
    );

  }

  export default SignupScreen;

  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
      
        },
        backgroundIMg:{
          
          width:'100%',
          height:'100%',
          position:'absolute'
        
          },
          headerText:{
            fontSize:40,
            color:'white',
            textAlign:'center',
            marginTop:30,
          }
  });