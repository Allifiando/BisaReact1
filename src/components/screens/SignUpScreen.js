import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView
} from 'react-native';
import { Content, Text, Form, Item, Label, Input, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

import API from '../api/API';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { validation: "" }
         }

    onNamaDepanChange(text) {
        this.setState({ nama_depan: text })
    }

    onNamaBelakangChange(text) {
        this.setState({ nama_belakang: text })
    }

    onTeleponChange(text) {
        this.setState({ telepon: number })
    }

    onAlamatChange(text) {
        this.setState({ alamat: text })
    }

    onEmailChange(text) {
        this.setState({ email: text })
    }

    onPasswordChange(text) {
        this.setState({ password: text })
    }

    onConfirmPasswordChange(text) {
        this.setState({ confirm_password: text })
    }

    onButtonPress() {
      const {nama_depan, 
        nama_belakang,
        telepon,
        alamat,
        email,
        password,
        confirm_password} = this.props;
    
    callFun = () =>
    {
        alert("Image Clicked!!!");
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nama_depan === null || nama_belakang === null || telepon === null || alamat === null || email === null || password === null || confirm_password === null ) {
        this.setState({
          validation: 'Ada form yang masih kosong'
        });        
    }else if (reg.test(email) === false) {
        this.setState({
          validation: `Email is not correct!`
        });
    }else if (password.length < 6 ) {
        this.setState({
          validation: `Password must be 6 character or more!`
        });
    }else if (password != confirm_password){
          this.setState({
            validation: `Password Tidak Sama`
          });
    }

        let api = new API();
        api.login(this.state.nama_depan,
          this.state.nama_belakang,
          this.state.telepon,
          this.state.alamat,
          this.state.email,
         this.state.password)
            .then((response) => Actions.login())
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <ImageBackground style={{flex:1}}
            source={{uri:'http://124.81.225.72/ando/img/backgroundlogin70persen1.png'}}>
            <ScrollView>
            <View style={styles.MainContainer}>            
                <Form style={[{ width: '85%', backgroundColor:'white', borderRadius:10,borderColor:'blue',borderWidth:1, marginTop:30 }]}>
                <View style={{flexDirection:'column',backgroundColor:'#26A9B5'}}>
                    <Image source={require('../img/Logo1.png')} style={{width: 60, height: 30, marginTop: 10, marginBottom:10, alignSelf:'center'}}/>                
                </View>
                <View style={{flexDirection:'column'}}>                
                    <Item regular style={{borderWidth:1,borderColor:'grey', margin:10, marginLeft:10}}>
                        <Input placeholder='Nama Depan' 
                        style={{fontSize:10}}
                        onChangeText={this.onNamaDepanChange.bind(this)}
                        value={this.state.nama_depan}/>
                    </Item>                    
                    <Item regular style={{borderWidth:1,borderColor:'grey', margin:10, marginLeft:10}}>
                        <Input placeholder='Nama Belakang' 
                        style={{fontSize:10}}
                        onChangeText={this.onNamaBelakangChange.bind(this)}
                        value={this.state.nama_belakang}/>
                    </Item>                    
                    <Item regular style={{borderWidth:1,borderColor:'grey', margin:10, marginLeft:10}}>
                        <Input placeholder='Nomor Telepon' 
                        style={{fontSize:10}}
                        onChangeText={this.onTeleponChange.bind(this)}
                        value={this.state.telepon}/>
                    </Item>                    
                    <Item regular style={{borderWidth:1,borderColor:'grey', margin:10, marginLeft:10}}>
                        <Input placeholder='Alamat' 
                        style={{fontSize:10}}
                        onChangeText={this.onAlamatChange.bind(this)}
                        value={this.state.alamat}/>
                    </Item>                    
                    <Item regular style={{borderWidth:1,borderColor:'grey', margin:10, marginLeft:10}}>
                        <Input placeholder='Email' 
                        style={{fontSize:10}}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.state.email}/>
                    </Item>                    
                    <Item regular style={{borderWidth:1,borderColor:'grey', margin:10, marginLeft:10}}>
                        <Input placeholder='Password' 
                        style={{fontSize:10}}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.state.password}/>
                    </Item>                    
                    <Item regular style={{borderWidth:1,borderColor:'grey', margin:10, marginLeft:10}}>
                        <Input placeholder='Confirm Password' 
                        style={{fontSize:10}}
                        onChangeText={this.onConfirmPasswordChange.bind(this)}
                        value={this.state.confirm_password}/>
                    </Item>                    
                    <Button block rounded style={{ elevation: 0,backgroundColor:'#26A9B5',marginLeft:20,marginRight:20,marginBottom:10 }} onPress={this.callFun}>
                        <Text>Daftar</Text>
                    </Button>
                    </View>
                </Form>                                
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
        borderRadius:10
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

export { SignUpScreen }