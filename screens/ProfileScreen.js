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
        	<Text style={styles.missionText}> First, let's register you to vote / confirm your registration! </Text>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/images/Scan-complete.png')}
                style={styles.logoImage}
            />
        </View>

        

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
      backgroundColor: '#fff',
  },
  contentContainer: {
      paddingTop: 100,
  },
  logoContainer: {
      alignItems: 'center',
      marginTop: 200,
      marginBottom: 25,
  },
  logoImage: {
      width: 300,
      height: 160,
      resizeMode: 'contain',
      marginLeft: -5,
  },
  missionText: {
      fontSize: 20,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 40,
      textAlign: 'center',
  },
  buttonText: {
      fontSize: 30,
      color: '#fff',
      lineHeight: 40,
      textAlign: 'center',
  },
  button: {
    marginTop: 75,
      backgroundColor: 'purple',
      borderColor: 'white',
      borderWidth: 60,
      borderRadius: 75,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
  },
});