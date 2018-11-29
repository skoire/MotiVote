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
        	<Text style={styles.Header}> Confirm Info </Text>
        	<Text style={styles.SubHeader}> See and update your information here </Text>
            
            <TextInput style={styles.textInput} placeholder = "First name" />
            <TextInput style={styles.textInput} placeholder = "Last name" />
            <TextInput style={styles.textInput} placeholder = "DOB" />
            <TextInput style={styles.textInput} placeholder = "Email Address" />

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
  
  Header: {
  	  paddingTop: 35,
      fontSize: 35,
      color: '#66257D',
      lineHeight: 40,
      textAlign: 'left',
      marginLeft: 16,
      marginBottom: 0,
      fontFamily: 'Charter-Bold',
  },
  SubHeader:{
  	  textAlign: 'left',
      marginLeft: 23,
      fontSize: 17,
      lineHeight: 20,
      fontFamily: 'Charter',
      marginBottom: 15,
  },
  textInput: {
  	  alignSelf: 'stretch',
  	  fontSize: 20,
      height: 40,
      marginBottom: 30,
      color: 'rgba(96,100,109, 1)',
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 2,
      marginLeft: 30,
      marginRight: 30,
  },
});
