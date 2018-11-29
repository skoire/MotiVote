import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  enterInfo() {
    this.setState({
      appStatus: "CONFIRM"
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.instructionTextTop}> Scan your ID </Text>
          <Text style={styles.instructionTextBottom}> to see if you're registered </Text>
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={() => this.props.cb()}>
              <Image 
                source={require('../assets/images/Scan-complete.png')}
                style={styles.logoImage}
              />
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.enterInfo()}>
              <Text style={styles.buttonText}> Fill out form instead </Text>
          </TouchableOpacity>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  logoImage: {
      width: 300,
      height: 400,
      resizeMode: 'contain',
      marginTop: -180,
  },
  instructionTextTop: {
      fontSize: 25,
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter-Bold',
      color: '#66257D',
  },
  instructionTextBottom: {
      fontSize: 25,
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter',
      color: '#66257D',
      marginBottom: 40,
  },
  cameraButton: {
    backgroundColor: '#fff',
    paddingTop: 180,
    marginBottom: 55,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    height: 380,
    width: 260,
    alignItems: 'center',

  },
  buttonText: {
      fontSize: 22,
      color: '#fff',
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter',
  },
  button: {
      backgroundColor: '#66257D',
      borderColor: 'white',
      borderRadius: 10,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      width: 250,
  },
});