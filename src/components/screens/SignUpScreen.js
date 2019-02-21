import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TextInput
,TouchableOpacity , Button, Alert, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import PasswordInputText from 'react-native-hide-show-password-input';

const Signup = () => {
   const goToHome = () => {
      Actions.home()
   }

   // state = {
   // 	nama:'',
   // 	Password:''
   // }

   // handleNama = (text) => {
   // 	this.setState({nama:text})
   // }
   // handlePassword = (text) => {
   // 	this.setState({password:text})
   // }
   // daftar = (nama,password) => {
   // 	alert('nama:'+nama+'password:'+password)
   // }
   return (
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri:
            'http://124.81.225.71:5757/tes_ando/img/backgroundlogin70persen1.png',
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
        >
        <ScrollView>
        <View style={styles.MainContainer}>                  
          <View style={styles.SectionStyle}>              
              <TextInput 
              style={{width:200}}
              underlineColorAndroid = "transparent" 
              placeholder = "Nama Depan"
              // onChangeText = {this.handleNama}
              />
         </View>         
          <View style={styles.SectionStyle}>              
              <TextInput 
              style={{width:200}}
              underlineColorAndroid = "transparent" 
              placeholder = "Nama Belakang"              
               />
         </View> 
         <View style={styles.SectionStyle}>              
              <TextInput 
              style={{width:200}}
              underlineColorAndroid = "transparent" 
              placeholder = "Nomor Telepon"              
               />
         </View> 
         <View style={styles.SectionStyle}>              
              <TextInput 
              style={{width:200}}
              underlineColorAndroid = "transparent" 
              placeholder = "Alamat"              
               />
         </View> 
         <View style={styles.SectionStyle}>              
              <TextInput 
              style={{width:200}}
              underlineColorAndroid = "transparent" 
              placeholder = "Email"              
               />
         </View> 
         <View style={styles.SectionStyle}>              
              <TextInput 
              style={{width:200}}
              underlineColorAndroid = "transparent" 
              placeholder = "Password"
              secureTextEntry={true}
              // onChangeText = {this.handlePassword}
               />
         </View> 
         <View style={styles.SectionStyle}>              
              <TextInput 
              style={{width:200}}
              underlineColorAndroid = "transparent" 
              placeholder = "Confirmation Password"
              secureTextEntry={true}
               />
         </View> 
         <View style={{width:"70%", margin:10}}>                   
            <Button title="Daftar" color="#2196F3" onPress = {goToHome} />            
        </View>          
        </View>
        </ScrollView>
      </ImageBackground>
   )
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#fff',
        // borderColor: '#000',
    },
    Form:{
    	zIndex:-1,
    	width:300,
    	height:100,
    	backgroundColor:'white'
    },
    TextInputStyleClass: {
        borderColor: '#2196F3',
        backgroundColor: 'white',
        textAlign: 'center',        
        width:200,
        borderRadius:5,
        fontSize: 15,
        marginBottom:20,    
        borderWidth:0.5,
        height:40,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        marginTop:70,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    btnsignup: {
        textAlign: 'center',
        color: 'white',
        marginTop:70,
        backgroundColor: '#fff',
        fontSize: 15
    },
    text1: {
        textAlign: 'center',
        color: 'red',
        marginTop:5,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15,
        marginBottom:30
    },
    text2: {
        textAlign: 'center',
        color: 'red',
        marginTop:5,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15,
        marginBottom:30
    },
    text3: {
        textAlign: 'center',
        color: 'red',
        marginTop:5,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15,
        marginBottom:30
    },
    underline:{
        textDecorationLine:'underline'
    }
});
export default Signup