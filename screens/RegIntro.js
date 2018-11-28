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
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.instructionText}> First, let's register you to vote / confirm your registration! </Text>
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
              onPress={() => this.props.cb()}>
              <Text style={styles.buttonText}> Fill out form instead </Text>
          </TouchableOpacity>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 80,
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
  instructionText: {
      fontSize: 30,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 40,
      textAlign: 'center',
      marginBottom: 20,
  },
  cameraButton: {
    backgroundColor: '#fff',
    paddingTop: 180,
    marginBottom: 60,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    height: 380,
    width: 260,
    alignItems: 'center',

  },
  buttonText: {
      fontSize: 30,
      color: '#fff',
      lineHeight: 40,
      textAlign: 'center',
  },
  button: {
      backgroundColor: 'purple',
      borderColor: 'white',
      borderRadius: 10,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
  },
});