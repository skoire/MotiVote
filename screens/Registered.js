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
          <Text style={styles.instructionTextTop}> Congratulations! </Text>
          <Image
                source={require('../assets/images/MotiVote-logo.png')}
                style={styles.logoImage}
            />
          <Text style={styles.instructionTextBottom}> registered </Text>
          <Text style={styles.instructionTextBottom}> you to vote! </Text>

          <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.cb()}>
              <Text style={styles.buttonText}> Get Prepping! </Text>
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
      width: 200,
      height: 75,
      resizeMode: 'contain',
  },
  instructionTextTop: {
      fontSize: 40,
      lineHeight: 50,
      textAlign: 'center',
      fontFamily: 'Charter',
      color: '#66257D',
      marginTop: 50,
      marginBottom: 115,
  },
  instructionTextBottom: {
      fontSize: 40,
      lineHeight: 50,
      textAlign: 'center',
      fontFamily: 'Charter',
      color: '#66257D',
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
      marginTop: 155,
  },
});