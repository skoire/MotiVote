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
  KeyboardAvoidingView,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        	<Text style={styles.Header}> Confirm Info </Text>
        	<Text style={styles.SubHeader}> See and update your information here </Text>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Label}> First name </Text>
                <TextInput style={styles.textInput} placeholder = "Armando" />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Label}> Last name </Text>
                <TextInput style={styles.textInput} placeholder = "Martinez" />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Label}> DOB </Text>
                <TextInput style={styles.textInput} placeholder = "01/01/1998" />
              </View>
              
              <TextInput style={styles.textInput} placeholder = "First name" />
              <TextInput style={styles.textInput} placeholder = "Last name" />
              <TextInput style={styles.textInput} placeholder = "DOB" />
              <TextInput style={styles.textInput} placeholder = "Address Line 1" />
              <TextInput style={styles.textInput} placeholder = "Address Line 2" />
              <TextInput style={styles.textInput} placeholder = "City" />
              <TextInput style={styles.textInput} placeholder = "State" />
              <TextInput style={styles.textInput} placeholder = "Email Address" />

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.cb()}>
                <Text style={styles.buttonText}> Confirm </Text>
              </TouchableOpacity>
            </ScrollView> 
      	</KeyboardAvoidingView>
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
  Label: {
      paddingTop: 5,
      fontSize: 25,
      lineHeight: 25,
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 0,
      fontFamily: 'Charter',
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
  	  fontSize: 25,
      height: 28,
      marginBottom: 30,
      color: 'rgba(96,100,109, 1)',
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 2,
      marginLeft: 10,
      marginRight: 30,
      fontFamily: 'Charter',
  },
  buttonText: {
      fontSize: 25,
      color: '#fff',
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter',
  },
  button: {
    marginTop: 5,
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
      marginBottom: 100,
  },
});
