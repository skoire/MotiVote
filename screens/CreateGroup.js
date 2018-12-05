import React, { Component } from 'react';
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
  Button,
} from 'react-native';

import t from 'tcomb-form-native';

import moment from 'moment';

const Form = t.form.Form;

Form.stylesheet.dateValue.normal.borderColor = '#d0d2d3';
Form.stylesheet.dateValue.normal.backgroundColor = '#fff';
Form.stylesheet.dateValue.normal.borderWidth = 1;

const User = t.struct({
  meetTime: t.Date,
});

var val = {
  meetTime: new Date('Tue Nov 6 2018 12:00')
};

const formStyles = {
  ...Form.stylesheet,
  User: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      paddingTop: 5,
      fontSize: 21,
      lineHeight: 23,
      textAlign: 'left',
      fontFamily: 'Charter',
    },
    // the style applied when a validation error occours
    error: {
      paddingTop: 5,
      fontSize: 21,
      lineHeight: 23,
      textAlign: 'left',
      fontFamily: 'Charter',
      color: 'black',
      marginBottom: 7,
    }
  }
}

const options = {
  fields: {
    meetTime: {
      label: 'Meeting time:',
      error: 'Please enter your meeting time',
      config: {
        format: (time) => moment(time).format('hh:mm A'), 
      },
      mode: 'time',
      blurOnSubmit: true,
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  
  static navigationOptions = {
    header: null,
  }; 
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.backButtonText}> {'< Voting'} </Text>
        </TouchableOpacity>
        <Text style = {styles.Header}> Voting Plans</Text>
        <Text style = {styles.SubHeader}> Let friends join you at the poll </Text> 
        
        <ScrollView style={styles.scrollContainer}> 
          <Form 
            ref={c => this._form = c}
            type={User} 
            options={options}
            value={val}
          />
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Plans')}>
              <Text style={styles.buttonText}> Confirm </Text>
            </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 30,
    backgroundColor: '#ffffff',
    flex: 1
  },
  scrollContainer: {
    marginTop: 0,
    padding: 0,
    backgroundColor: '#ffffff',
  },
    Header: {
      paddingTop: 10,
      fontSize: 35,
      color: '#66257D',
      lineHeight: 40,
      textAlign: 'left',
      marginLeft: -10,
      fontFamily: 'Charter-Bold',
  },
     SubHeader:{
      textAlign: 'left',
      marginLeft: -5,
      marginBottom: 20,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
  TitleFont:{
      fontFamily: 'Charter',
      marginLeft: 11,
  },
    buttonText: {
      fontSize: 25,
      color: '#fff',
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter',
  },
  button: {
      marginTop: 10,
      backgroundColor: '#66257D',
      borderColor: 'white',
      borderRadius: 10,
      width: 250,
      marginLeft: 30,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      marginBottom: 200,
  },
  backButton: {
      marginTop: 20,
      backgroundColor: '#66257D',
      borderColor: 'white',
      borderRadius: 10,
      marginLeft: -5,
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
});