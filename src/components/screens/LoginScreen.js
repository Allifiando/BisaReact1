import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView, Button
} from 'react-native';
import { Content, Text, Form, Item, Label, Input, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

import API from '../api/API';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    }

    onEmailChange(text) {
        this.setState({ email: text })
    }

    onPasswordChange(text) {
        this.setState({ password: text })
    }

    onButtonPress() {
        let api = new API();
        api.login(this.state.email, this.state.password)
            .then((response) => Actions.menu())
            .catch((error) => console.log(error))
    }

    callFun = () =>
    {
        alert("Image Clicked!!!");
    }
    goToSignUp = () => {
        Actions.signup()
     }

    render() {
        return (
            <ImageBackground style={{flex:1}}
            source={{uri:'http://124.81.225.72/ando/img/backgroundlogin70persen1.png'}}>
            <ScrollView>            
            <View style={styles.MainContainer}>                
                <Image source={require('../img/Logo1.png')} style={{width: 260, height: 130, marginTop: 50, marginBottom:180}}/>
                <View style={styles.SectionStyle}>
                    <Image source={require('../img/user.png')}style={styles.ImageStyle} />
                    <TextInput style={{width:215}} underlineColorAndroid = "transparent" placeholder = "Email"/>
                </View>
                <View style={styles.SectionStyle}>
                    <Image source={require('../img/locked.png')}style={styles.ImageStyle} />
                    <TextInput style={{width:215}} underlineColorAndroid = "transparent" placeholder = "Password" secureTextEntry={true}/>
                </View>
                <View style={{width:"70%", margin:10}}>                   
                    <Button title="Masuk" color="#26A9B5" border-radius="15" onPress={this.callFun} />
                    <Text style={styles.text1}>Lupa password ? </Text>            
                </View>
                <View style={{width:"90%", marginTop:30 }}>                                           
                    <TouchableOpacity onPress={this.goToSignUp}><Text style={styles.btnsignup}> Belum punya akun ? Daftar disini</Text></TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            </ImageBackground>
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
        width: 200,
        borderRadius: 5,
        fontSize: 15,
        marginBottom: 20,
        borderWidth: 0.5,
        height: 40,
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
        marginTop: 70,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    btnsignup: {
        textAlign: 'center',
        color: 'white',
        marginTop: 60,
        // backgroundColor: '#fff',
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    text1: {
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    underline: {
        textDecorationLine: 'underline'
    }
});

export { LoginScreen }