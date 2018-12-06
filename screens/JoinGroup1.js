import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { ListItem } from 'react-native-elements'


export default class BallotScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }; 



onPress(status) {
  if(status === 'Leave Group') {
    global.group = undefined;
    global.time = undefined;
    global.inGroup = false;
  } else {
    global.group = 'Sami, Armando';
    global.time = '10:30 AM';
    global.inGroup = true;
  }
  this.props.navigation.navigate('Voting', {value: global.time})
};

render() {
  global.inGroup = global.inGroup === undefined ? false: global.inGroup
  buttonStatus = global.inGroup === true && global.group === 'Sami, Armando'? 'Leave Group': 'Join Group'
  return (
    <View style={styles.container} behavior="padding" enabled>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.navigate('Voting')}>
        <Text style={styles.backButtonText}> {'< Voting'} </Text>
      </TouchableOpacity>
      
      <Text style = {styles.Header}> Voting Plans</Text>
      <Text style = {styles.SubHeader}> Join friends at the poll </Text> 

      <Text style = {styles.SubHeader1}> Who:       Sami, Armando </Text>
      <Text style = {styles.SubHeader1}> When:     10:30 AM </Text>
      <Text style = {styles.SubHeader2}> Where:   Your Polling Location</Text>
      <Text style = {styles.SubHeader2}>                Palo Alto Fire Station # 05</Text>
      <Text style = {styles.SubHeader2}>                600 Arastradero Rd</Text>
      <Text style = {styles.SubHeader2}>                Palo Alto, CA 94306</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress.bind(this, buttonStatus)}>
        <Text style={styles.buttonText}> {buttonStatus} </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Header: {
      paddingTop: 10,
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
    TitleFont:{
      fontFamily: 'Charter',
      marginLeft: 11,
  },
    SubHeader1:{
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 30,
      fontSize: 20,
      fontFamily: 'Charter',
  },
     SubHeader2:{
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 10,
      fontSize: 20,
      fontFamily: 'Charter',
  },
  backButton: {
      marginTop: 60,
      backgroundColor: '#66257D',
      borderColor: 'white',
      borderRadius: 10,
      marginLeft: 15,
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 8,
      width: 95,
  },
  backButtonText: {
      fontSize: 18,
      color: '#fff',
      lineHeight: 20,
      textAlign: 'center',
      fontFamily: 'Charter',
      marginLeft: -9,
  },
  buttonText: {
      fontSize: 25,
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
      marginLeft: 55,
      marginTop: 170,
  },
  container: {
    marginTop: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    flex: 1
  },
});
