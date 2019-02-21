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

import { LoginScreen } from './src/components/screens/';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <Router>
          <Scene key="root">
            <Scene key="login" initial>
              <Scene key="loginScreen" component={LoginScreen} title="Login" />
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