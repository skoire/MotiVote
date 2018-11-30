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
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/images/MotiVote-logo.png')}
                style={styles.logoImage}
            />
        </View>

        <Text style={styles.missionTextTop}> Voting Made</Text>
        <Text style={styles.missionTextBottom}> Simple & Social </Text>



        <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.cb()}>
            <Text style={styles.buttonText}> Get Started! </Text>
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
      marginTop: 100,
      marginBottom: 75,
  },
  logoImage: {
      width: 300,
      height: 160,
      resizeMode: 'contain',
      marginLeft: -5,
  },
  missionTextTop: {
      fontSize: 30,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 40,
      marginLeft: 95,
      fontFamily: 'Charter',
      color: '#66257D',
  },
  missionTextBottom: {
      fontSize: 30,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 40,
      marginLeft: 67,
      fontFamily: 'Charter-Bold',
      color: '#66257D',
  },
  buttonText: {
      fontSize: 25,
      color: '#fff',
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter',
  },
  button: {
    marginTop: 233,
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
  },
});