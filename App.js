import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import IntroScreen from './screens/IntroScreen';

export default class App extends React.Component {
  
  state = {
    introScreenVisible: true,
  };

  hideIntroScreen() {
    this.setState({
      introScreenVisible: false
    })
  }

  render() {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {this.state.introScreenVisible &&
            <IntroScreen cb={this.hideIntroScreen.bind(this)} />
          }
          {this.state.regIntroVisible &&
            <RegIntro cb={this.hideIntroScreen.bind(this)} />
          }
          {!this.state.introScreenVisible &&
            <AppNavigator/>
          }
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});
