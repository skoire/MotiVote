import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppLoading, Asset, Font, Icon, Camera } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import IntroScreen from './screens/IntroScreen';
import VerifyScreen from './screens/RegIntro';

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

  snap() {
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
            <VerifyScreen cb={this.hideVerifyScreen.bind(this)} />
          }
          {this.state.appStatus === "CAMERA" &&
            <View style={{ flex: 1 }}>
              <Camera style={{ flex: 1 }} ref={ref => {this.camera = ref; }} type={this.state.type}>
                <View
                  style={{
                    backgroundColor: 'transparent',
                  }}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      backgroundColor: 'purple',
                      borderColor: 'white',
                      borderRadius: 10,
                      width: 180,
                      height: 60,
                      marginTop: 600,
                      marginLeft: 100,
                      overflow: 'hidden',
                      padding: 12,
                      textAlign:'center',
                    }}
                    onPress={this.snap.bind(this)}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 26,
                        fontWeight: 'bold',
                      }}>
                      {' '}Scan ID{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
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
});
