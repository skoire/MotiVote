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

        <Text style={styles.missionText}> Voting Made</Text>
        <Text style={styles.missionText}> Simple & Social </Text>

        <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
          	<Text style={styles.helpLinkText}>Lets get started!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          	style={styles.box}
          	onPress={() => this.clickMe(this.state.message)}>
          	<Text style={{color: "#fff"}}> Click Me! </Text>
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
	    fontSize: 30,
	    color: 'rgba(96,100,109, 1)',
	    lineHeight: 40,
	    textAlign: 'center',
	  },




  box: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 6
  },
  
  
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});