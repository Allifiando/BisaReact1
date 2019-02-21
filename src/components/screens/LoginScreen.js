import React, { Component } from 'react';
import {
    View, ImageBackground, StyleSheet, Image, TextInput
    , TouchableOpacity, Alert, ScrollView
} from 'react-native';
import { Content, Text, Form, Item, Label, Input, Button, Spinner } from 'native-base';
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
        api.login(email, password)
            .then((response) => Alert.alert('berhasil'))
            .catch((error) => Alert.alert('gagal'));
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Form style={[{ width: '100%' }]}>
                    <Item stackedLabel>
                        <Label style={{ padding: 0, margin: 0 }}>Your E-mail</Label>
                        <Input
                            keyboardType="email-address"
                            style={[{ paddingTop: 2, paddingBottom: 2 }]}
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.state.email}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input
                            style={[{ paddingTop: 2, paddingBottom: 2 }]}
                            secureTextEntry
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.state.password}
                        />
                    </Item>
                </Form>

                <View style={[{ flex: 1, flexDirection: 'row' }]}>
                    <View style={{ flex: 1 }}>
                        <Button block rounded style={{ elevation: 0 }} onPress={this.onButtonPress.bind(this)}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                </View>
                <Text style={styles.text1}>Lupa password ? </Text>
            </View>
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