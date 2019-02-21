import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Image, TextInput
,TouchableOpacity , Alert , ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Text, Form, Item, Label, Input, Button, Spinner } from 'native-base';

class LoginScreen extends Component{
	constructor(props){
		super(props);

		this.state = {email:'',password:''}
	}

	render(){
		return(
			// <Text style={styles.text1}>Lupa password111 ? </Text>
      <Text style={styles.text1}>Lupa password ? </Text>
		)
	}
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
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
    ImageStyle: {
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
        marginTop:60,
        // backgroundColor: '#fff',
        fontSize: 15,
        textDecorationLine:'underline'
    },
    text1: {
        textAlign: 'center',
        color: 'white',
        marginTop:5,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    underline:{
        textDecorationLine:'underline'
    }
});

export{LoginScreen}