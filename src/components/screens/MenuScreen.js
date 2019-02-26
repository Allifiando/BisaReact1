import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView
} from 'react-native';
import { Content, Text, Form, Item, Label, Input, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

// import API from '../api/API';

class MenuScreen extends Component {  
    
    goToLogin = () => {
        Actions.login()
     }

    render() {
        return (
            <ImageBackground style={{flex:1}}
            source={{uri:'http://124.81.225.72/ando/img/backgroundlogin70persen1.png'}}>
            <View style={styles.MainContainer}>
                <View style={{flexDirection:'row', marginTop:15, alignSelf: 'flex-end', marginRight:15}}>                
                    <Image source={require('../img/man.png')} />
                    <Image source={require('../img/keranjang.png')} style={{marginLeft:10,marginRight:10}}/>
                    <Image source={require('../img/chat.png')} />                
                </View>
                <TouchableOpacity onPress={this.goToLogin}>
                    <Image source={require('../img/pesansekarang.png')} style={{marginTop:20,marginLeft:20}}/>
                </TouchableOpacity>                                
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../img/carapesan.png')} style={{marginTop:20}} />
                    <Image source={require('../img/infobahan.png')} style={{marginTop:20}} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../img/simulasi.png')} />
                    <Image source={require('../img/testimoni.png')} />
                </View>
                <View style={{flexDirection:'row', alignSelf:'flex-start', marginTop:50 }}>
                    <Image source={require('../img/iso.png')} />                 
                </View>                                
            </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
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
        color: 'red',
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
        color: 'red',
        marginTop: 5,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15
    },
    underline: {
        textDecorationLine: 'underline'
    }
});

export { MenuScreen }