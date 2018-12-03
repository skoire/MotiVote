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
  first: t.String,
  last: t.String,
  dob: t.Date,
  address1: t.String,
  address2: t.maybe(t.String),
  city: t.String,
  state: t.String,
  dl: t.String,
  party: t.maybe(t.String),
});

var val = {
  first: 'Emma',
  last: 'Dolan',
  dob: new Date('February 25, 1998'),
  address1: '123 45th St',
  city: 'Palo Alto',
  state: 'CA',
  dl: 'A126542',
};

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
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
    first: {
      label: 'First Name:',
      error: 'Please enter your first name.'
    },
    last: {
      label: 'Last Name:',
      error: 'Please enter your last name.'
    },
    dob: {
      type: 'date',
      label: 'Date of Birth:',
      error: 'Please enter your date of birth.',
      config: {
      	format: (date) => moment(date).format('MM/DD/YYYY'), 
      },
      mode: 'date',
      blurOnSubmit: true,
    },
    address1: {
      label: 'Address Line 1:',
      error: 'Please enter your street address.'
    },
    address2: {
      label: 'Address Line 2:',
    },
    city: {
      label: 'City:',
      error: 'Please enter your city.'
    },
    state: {
      label: 'State:',
      error: 'Please enter your state.'
    },
    dl: {
      //TODO: add apostrophe to driver's license and #
      label: 'Driver License #:',
      error: 'Please enter your drivers license number.' 
    },
    party: {
      label: 'Political Party:',
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    this.props.cb();
  }
  // handleSubmit2 = () => {
  // 	this.handleSubmit();
  // 	this.props.cb();
  // }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Text style={styles.Header}> Confirm Info </Text>
          <Text style={styles.SubHeader}> See and update your information here </Text>
          <ScrollView style={styles.scrollContainer}> 
            <Form 
              ref={c => this._form = c}
              type={User} 
              options={options}
              value={val}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleSubmit()}>
                <Text style={styles.buttonText}> Confirm </Text>
              </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
  },
    Header: {
      paddingTop: 20,
      fontSize: 35,
      color: '#66257D',
      lineHeight: 40,
      textAlign: 'left',
      marginLeft: 5,
      fontFamily: 'Charter-Bold',
  },
     SubHeader:{
      textAlign: 'left',
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
      marginLeft: 12,
      marginBottom: 5,
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
      marginLeft: 30,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      marginBottom: 150,
  },
});