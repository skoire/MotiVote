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
import { TextInputMask } from 'react-native-masked-text'


import { MonoText } from '../components/StyledText';

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }; 
  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => this.props.cb_2()}>
                  <Text style={styles.backButtonText}> {'<'} </Text>
                </TouchableOpacity>
          <Text style={styles.Header}> Confirm Info </Text>
          <Text style={styles.SubHeader}> See and update your information here </Text>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
              <Text style={styles.Label}> First Name: </Text>
              <TextInput style={styles.textInput} placeholder = "" />
              <Text style={styles.Label}> Last Name: </Text>
              <TextInput style={styles.textInput} placeholder = "" />
              <Text style={styles.Label}> Date of Birth: </Text>
              <TextInputMask style={styles.textInput} type={'datetime'} options={{ format: 'DD/MM/YYYY' }} keyboardType='numeric' placeholder = "mm/dd/yyyy" />
              <Text style={styles.Label}> Address Line 1: </Text>
              <TextInput style={styles.textInput} placeholder = "" />
              <Text style={styles.Label}> Address Line 2 (optional): </Text>
              <TextInput style={styles.textInput} placeholder = "" />
              <Text style={styles.Label}> City: </Text>
              <TextInput style={styles.textInput} placeholder = "" />
              <Text style={styles.Label}> State: </Text>
              <TextInput style={styles.textInput} placeholder = "" />
              <Text style={styles.Label}> Driver's License #: </Text>
              <TextInput style={styles.textInput} placeholder = "" />
              <Text style={styles.Label}> Political Party (optional): </Text>
              <TextInput style={styles.textInput} placeholder = "" />

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
      paddingTop: 10,
      fontSize: 35,
      color: '#66257D',
      lineHeight: 40,
      textAlign: 'left',
      marginLeft: 13,
      fontFamily: 'Charter-Bold',
  },
  Label: {
      paddingTop: 5,
      fontSize: 18,
      lineHeight: 20,
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 0,
      fontFamily: 'Charter',
  },
  SubHeader:{
      textAlign: 'left',
      marginLeft: 20,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
  textInput: {
      alignSelf: 'stretch',
      fontSize: 25,
      height: 28,
      marginBottom: 20,
      color: 'rgba(96,100,109, 1)',
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 2,
      marginLeft: 23,
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
  backButton: {
      marginTop: 15,
      backgroundColor: '#66257D',
      borderColor: 'white',
      borderRadius: 10,
      marginLeft: 15,
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 8,
      width: 75,
  },
  backButtonText: {
      fontSize: 20,
      color: '#fff',
      lineHeight: 20,
      textAlign: 'center',
      fontFamily: 'Charter',
      marginLeft: -9,
  },
});
