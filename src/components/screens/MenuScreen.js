import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TextInput
,TouchableOpacity , Button, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Menu = () => {
   const goToHome = () => {
      Actions.home()
   }
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
        <View style={styles.MainContainer}>          
          <View style={styles.SectionStyle1}>
              <Image
              source={{
                  uri:
                    'http://124.81.225.71:5757/tes_ando/img/Logo1.png',
                }} 
                style={{ width: 260, height: 130, marginTop: 70, 
                marginBottom:140, marginLeft: 100}}
                />
              <Text style={styles.text1}>Pesan Sekarang </Text>            
         </View>         
          <View style={styles.SectionStyle}>
              <Image
              source={{
                  uri:
                    'http://124.81.225.71:5757/tes_ando/img/user.png',
                }} 
                style={styles.ImageStyle1}
                />
              <Image
              source={{
                  uri:
                    'http://124.81.225.71:5757/tes_ando/img/user.png',
                }} 
                style={styles.ImageStyle2}
                />                
         </View>         
          <View style={styles.SectionStyle}>
              <Image
              source={{
                  uri:
                    'http://124.81.225.71:5757/tes_ando/img/locked.png',
                }} 
                style={styles.ImageStyle3}
                />
              <Image
              source={{
                  uri:
                    'http://124.81.225.71:5757/tes_ando/img/locked.png',
                }} 
                style={styles.ImageStyle4}
                />
         </View>          
        </View>
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
    SectionStyle1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 200,
        width:300,
        borderRadius: 5,
        margin: 40,
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
    ImageStyle1: {
        padding: 10,
        margin: 15,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    ImageStyle2: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    ImageStyle3: {
        padding: 10,
        margin: 15,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    ImageStyle4: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
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
        marginBottom:140
    },
    underline:{
        textDecorationLine:'underline'
    }
});
export default Menu