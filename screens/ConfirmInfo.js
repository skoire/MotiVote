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
              <Text style={styles.Label}> First Name: </Text>
              <TextInput style={styles.textInput} defaultValue = "Armando" />
              <Text style={styles.Label}> Last Name: </Text>
              <TextInput style={styles.textInput} defaultValue = "Martinez" />
              <Text style={styles.Label}> DOB: </Text>
              <TextInput style={styles.textInput} defaultValue = "10/21/1997" />
              <Text style={styles.Label}> Address Line 1: </Text>
              <TextInput style={styles.textInput} defaultValue = "123 45th St" />
              <Text style={styles.Label}> Address Line 2 (optional): </Text>
              <TextInput style={styles.textInput} defaultValue = "" />
              <Text style={styles.Label}> City: </Text>
              <TextInput style={styles.textInput} defaultValue = "Palo Alto" />
              <Text style={styles.Label}> State: </Text>
              <TextInput style={styles.textInput} defaultValue = "CA" />
              <Text style={styles.Label}> Driver's License #: </Text>
              <TextInput style={styles.textInput} defaultValue = "1639582" />
              <Text style={styles.Label}> Political Party (optional): </Text>
              <TextInput style={styles.textInput} defaultValue = "" />

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
      marginLeft: 13,
      fontFamily: 'Charter-Bold',
  },
  Label: {
      paddingTop: 5,
      fontSize: 18,
      lineHeight: 20,
      textAlign: 'left',
      marginLeft: 20,
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
});
// import React, { Component } from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   KeyboardAvoidingView,
//   Button,
// } from 'react-native';

// import t from 'tcomb-form-native';

// const Form = t.form.Form;

// const User = t.struct({
//   first: t.String,
//   last: t.String,
//   dob: t.String,
//   address1: t.String,
//   address2: t.maybe(t.String),
//   city: t.String,
//   state: t.String,
//   dl: t.String,
//   party: t.maybe(t.String),
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {
//       marginBottom: 10
//     },
//   },
//   controlLabel: {
//     normal: {
//       color: 'blue',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     },
//     // the style applied when a validation error occours
//     error: {
//       color: 'red',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     }
//   }
// }

// const options = {
//   fields: {
//     first: {
//       label: 'First Name:',
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     last: {
//       label: 'Last Name:',
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     dob: {
//       label: 'Date of Birth:',
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     address1: {
//       label: 'Address Line 1:',
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     address2: {
//       label: 'Address Line 2:',
//     },
//     city: {
//       label: 'City:',
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     state: {
//       label: 'State:',
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     dl: {
//       label: 'Drivers License:',
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     party: {
//       label: 'Political Party:',
//     },
//   },
//   stylesheet: formStyles,
// };

// export default class App extends Component {
//   handleSubmit = () => {
//     const value = this._form.getValue();
//     console.log('value: ', value);
//   }
  
//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
//         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
//           <Form 
//             ref={c => this._form = c}
//             type={User} 
//             options={options}
//           />
//           <Button
//             title="Sign Up!"
//             onPress={this.handleSubmit}
//           />
//       </ScrollView>
//     </KeyboardAvoidingView>  
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       paddingTop: 30,
//   },
// });
