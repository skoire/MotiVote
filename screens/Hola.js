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
    header: 'Hello',
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/MotiVote-logo.png')}
              style={styles.welcomeImage}
            />
          </View>

          <Text style={styles.getStartedText}> Voting Made Simple & Social </Text>
          <Text style={styles.getStartedText}> Simple & Social </Text>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Lets get started!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }
}
