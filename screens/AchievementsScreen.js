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
                source={require('../assets/images/trophyPurple.png')}
                style={styles.logoImage}
            />
            <Text style={styles.achievementLabelComplete}> Registered to vote </Text>
          </View>
          <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/trophyGrey.png')}
                style={styles.logoImage}
              />
              <Text style={styles.achievementLabelIncomplete}> Made first voting decision </Text>
          </View>
          <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/trophyGrey.png')}
                style={styles.logoImage}
              />
              <Text style={styles.achievementLabelIncomplete}> Finished voting decisions </Text>
          </View>
          <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/trophyGrey.png')}
                style={styles.logoImage}
              />
              <Text style={styles.achievementLabelIncomplete}> Joined voting group </Text>
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
      marginLeft: 5,
  },
  imageContainer: {
      backgroundColor: '#fff',
      marginBottom: 20,
      flexDirection: 'row',
  },
  achievementLabelComplete: {
    fontFamily: 'Charter-Bold',
    lineHeight: 60,
    marginLeft: 15,
    fontSize: 18,
    color: '#66257D', 
  },
  achievementLabelIncomplete: {
    fontFamily: 'Charter-Bold',
    lineHeight: 60,
    marginLeft: 15,
    fontSize: 18,
    color: '#8B8E95', 
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
      marginBottom: 40,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
});
