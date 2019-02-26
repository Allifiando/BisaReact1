/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Stack, Actions, Drawer } from 'react-native-router-flux';

import { LoginScreen,MenuScreen,SignUpScreen } from './src/components/screens/';

// import Menu from './src/components/screens/MenuScreen';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <Router>
          <Scene key="root">
            <Scene key="menu" hideNavBar>
              <Scene key="menuScreen" component={MenuScreen} title="Menu" />
            </Scene>
            <Scene key="login" hideNavBar >
              <Scene key="loginScreen" component={LoginScreen} title="Login" />
            </Scene>            
            <Scene key="signup" hideNavBar initial>
              <Scene key="signupScreen" component={SignUpScreen} title="Signup" />
            </Scene>            
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;