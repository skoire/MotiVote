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

  isFocused() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.subs = [
      this.props.navigation.addListener('didFocus', () => this.isFocused()),
    ];
  }

  componentWillUnmount() {
    this.subs.forEach(sub => sub.remove());
  }

  static navigationOptions = {
    header: null,
  };
  render() {
    oneDecision = global.decLeft === 5 ? 0 : 1
    allDecisions = global.decLeft === 0 ? 1 : 0
    groupStatus = global.group === undefined ? 0 : 1

 
    images = [require('../assets/images/trophyPurple.png'  ), require('../assets/images/trophyGrey.png')];
    stylesText = [styles.achievementLabelComplete, styles.achievementLabelIncomplete];
    if (oneDecision === 1){
      firstDecision = true   
    }
    else {
      firstDecision = false  
    }

    if (allDecisions === 1){
      fiveDecisions = true   
    }
    else {
      fiveDecisions = false  
    }

    if (groupStatus === 1){
      votingPlans = true   
    }
    else {
      votingPlans = false  
    }

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
                  source={firstDecision ? images[0] : images[1]}
                  style={styles.logoImage}
                />
                <Text style={firstDecision ? stylesText[0] : stylesText[1]}> Made first voting decision </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
                  source={fiveDecisions ? images[0] : images[1]}
                  style={styles.logoImage}
                />
                <Text style={fiveDecisions ? stylesText[0] : stylesText[1]}> Finished voting decisions </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
                  source={votingPlans ? images[0] : images[1]}
                  style={styles.logoImage}
                />
                <Text style={votingPlans ? stylesText[0] : stylesText[1]}> Joined voting group </Text>
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
