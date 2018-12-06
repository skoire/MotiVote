import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
        	<Text style={styles.Header}> Achievements </Text>
        	<Text style={styles.SubHeader}> Look at all you've accomplished </Text>
          <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/Trophy.png')}
                style={styles.logoImage}
            />
          </View>
          <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/Trophy.png')}
                style={styles.logoImage}
            />
          </View>
      	</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 30,
  },
  logoImage: {
      width: 100,
      height: 60,
      resizeMode: 'contain',
      marginLeft: -5,
  },
  imageContainer: {
      backgroundColor: '#fff',
      marginBottom: 20,
      flexDirection: 'row',
  },
  Header: {
      paddingTop: 35,
      fontSize: 35,
      color: '#66257D',
      lineHeight: 40,
      textAlign: 'left',
      marginLeft: 13,
      fontFamily: 'Charter-Bold',
  },
     SubHeader:{
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 30,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
});
