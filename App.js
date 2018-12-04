import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppLoading, Asset, Font, Icon, Camera } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import IntroScreen from './screens/IntroScreen';
import VerifyScreen from './screens/VerifyScreen';
import ConfirmInfo from './screens/ConfirmInfo';
import ConfirmInfoBlank from './screens/ConfirmInfoBlank'
import Registered from './screens/Registered';
import { AsyncStorage } from "react-native";
import global from './screens/global.js';

export default class App extends React.Component {
  
  state = {
    appStatus: "INTRO",
  };

  hideIntroScreen() {
    this.setState({
      appStatus: "VERIFY"
    })
  }

  hideVerifyScreen() {
    this.setState({
      appStatus: "CAMERA"
    })
  }

 emptyForm() {
    this.setState({
      appStatus: "EMPTYFORM"
    })
  }

  snap() {
    this.setState({
      appStatus: "CONFIRM"
    })
  }

  hideConfirm() {
    this.setState({
      appStatus: "REGISTERED"
    })
  }

  hideRegistered() {
    this.setState({
      appStatus: "MAIN"
    })
  }


  render() {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {this.state.appStatus === "INTRO" &&
            <IntroScreen cb={this.hideIntroScreen.bind(this)} />
          }
          {this.state.appStatus === "VERIFY" &&
            <VerifyScreen cb={this.hideVerifyScreen.bind(this)} cb_2={this.emptyForm.bind(this)} />
          }
          {this.state.appStatus === "CAMERA" &&
            <View style={{ flex: 1 }}>
              <Camera style={{ flex: 1 }} ref={ref => {this.camera = ref; }} type={this.state.type}>
                <View
                  style={{
                    backgroundColor: 'transparent',
                  }}>
                  <Text style={styles.instructionTextTop}> Scan your ID </Text>
                  <Text style={styles.instructionTextBottom}> to see if you're registered </Text>
                  
                  <TouchableOpacity
                    style={{
                      marginTop: 475,
                      backgroundColor: '#66257D',
                      borderColor: 'white',
                      borderRadius: 10,
                      width: 250,
                      marginLeft: 60,
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 'bold',
                      overflow: 'hidden',
                      padding: 12,
                      textAlign:'center',
                    }}
                    onPress={this.snap.bind(this)}>
                    <Text
                      style={{
                        fontSize: 22,
                        color: '#fff',
                        lineHeight: 30,
                        textAlign: 'center',
                        fontFamily: 'Charter',
                      }}>
                      {' '}Scan ID{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          }
          {this.state.appStatus === "EMPTYFORM" &&
            <ConfirmInfoBlank cb={this.hideConfirm.bind(this)} cb_2={this.hideIntroScreen.bind(this)}/>
          }
          {this.state.appStatus === "CONFIRM" &&
            <ConfirmInfo cb={this.hideConfirm.bind(this)} />
          }
          {this.state.appStatus === "REGISTERED" &&
            <Registered cb={this.hideRegistered.bind(this)} />
          }
          {this.state.appStatus === "MAIN" &&
            <AppNavigator />
          }
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  instructionTextTop: {
      fontSize: 25,
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter-Bold',
      color: '#fff',
      marginTop: 110,
      textShadowColor: '#66257D',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
  },
  instructionTextBottom: {
      fontSize: 25,
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter',
      color: '#fff',
      textShadowColor: '#66257D',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
  },
  logoImage: {
      width: 300,
      height: 160,
      resizeMode: 'contain',
      marginLeft: -5,
  },
  logoContainer: {
      alignItems: 'center',
      marginTop: 100,
      marginBottom: 75,
  },  
});
