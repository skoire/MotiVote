// import React from 'react';
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
// } from 'react-native';
// import { WebBrowser } from 'expo';
// import PropositionsScreen from "./PropositionsScreen.js";
// import '../global.js';

// import { MonoText } from '../components/StyledText';

// //TODO: Re-enable "Edit" button
// //TODO: Allow editing once edit button has been selected
// //TODO: Change location of edit button

// export default class IntroScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   }; 
//   render() {
//     return (
//         <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
//           <Text style={styles.Header}> Confirm Info </Text>
//           <Text style={styles.SubHeader}> See and update your information here </Text>
//             <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
//               <Text style={styles.Label}> First Name: </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.first}/>
//               <Text style={styles.Label}> Last Name: </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.last} />
//               <Text style={styles.Label}> DOB: </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.dob.toLocaleDateString()} />
//               <Text style={styles.Label}> Address Line 1: </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.address1} />
//               <Text style={styles.Label}> Address Line 2 (optional): </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.address2} />
//               <Text style={styles.Label}> City: </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.city} />
//               <Text style={styles.Label}> State: </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.state} />
//               <Text style={styles.Label}> Driver's License #: </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.dl} />
//               <Text style={styles.Label}> Political Party (optional): </Text>
//               <TextInput style={styles.textInput} editable={false} defaultValue = {global.userData.party} />

//               <TouchableOpacity
//                 disabled={true}
//                 style={styles.button}
//                 onPress={() => this.props.cb()}>
//                 <Text style={styles.buttonText}> Edit </Text>
//               </TouchableOpacity>
//             </ScrollView> 
//         </KeyboardAvoidingView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       paddingTop: 30,
//   },
  
//   Header: {
//       paddingTop: 35,
//       fontSize: 35,
//       color: '#66257D',
//       lineHeight: 40,
//       textAlign: 'left',
//       marginLeft: 13,
//       fontFamily: 'Charter-Bold',
//   },
//   Label: {
//       paddingTop: 5,
//       fontSize: 18,
//       lineHeight: 20,
//       textAlign: 'left',
//       marginLeft: 20,
//       fontFamily: 'Charter',
//   },
//   SubHeader:{
//       textAlign: 'left',
//       marginLeft: 20,
//       fontSize: 17,
//       lineHeight: 17,
//       fontFamily: 'Charter',
//   },
//   textInput: {
//       alignSelf: 'stretch',
//       fontSize: 25,
//       height: 28,
//       marginBottom: 20,
//       color: 'rgba(96,100,109, 1)',
//       borderBottomColor: '#D3D3D3',
//       borderBottomWidth: 2,
//       marginLeft: 23,
//       marginRight: 30,
//       fontFamily: 'Charter',
//   },
//   buttonText: {
//       fontSize: 25,
//       color: '#fff',
//       lineHeight: 30,
//       textAlign: 'center',
//       fontFamily: 'Charter',
//   },
//   button: {
//     marginTop: 5,
//       backgroundColor: '#66257D',
//       borderColor: 'white',
//       borderRadius: 10,
//       width: 250,
//       marginLeft: 60,
//       color: 'white',
//       fontSize: 24,
//       fontWeight: 'bold',
//       overflow: 'hidden',
//       padding: 12,
//       textAlign:'center',
//       marginBottom: 100,
//   },
// });
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

import '../global.js';

const Form = t.form.Form;

Form.stylesheet.dateValue.normal.borderColor = '#d0d2d3';
Form.stylesheet.dateValue.normal.backgroundColor = '#f0f1f1';
Form.stylesheet.dateValue.normal.borderWidth = 1;
Form.stylesheet.dateValue.normal.borderRadius = 100;
Form.stylesheet.textbox.notEditable.backgroundColor = '#fff';
Form.stylesheet.textbox.notEditable.color = '#000';
Form.stylesheet.dateTouchable.notEditable.backgroundColor = '#fff';
Form.stylesheet.dateTouchable.notEditable.color = '#777';


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

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
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
    datePicker:{
      backgroundColor: '#999999'
    },
    notEditable: {
      paddingHorizontal: 7,
      borderRadius: 4,
      borderWidth: 1,
      marginBottom: 5,
      color: '#999999',
      backgroundColor: '#999999'
    }
  }
}

const options = {
  fields: {
    first: {
      label: 'First Name:',
      editable: false,
    },
    last: {
      label: 'Last Name:',
      editable: false,
    },
    dob: {
      disabled: true,
      label: 'Date of Birth:',
      config: {
        format: (date) => moment(date).format('MM/DD/YYYY'), 
      },
      mode: 'date',
      blurOnSubmit: true,
    },
    address1: {
      label: 'Address Line 1:',
      editable: false,
    },
    address2: {
      label: 'Address Line 2:',
      editable: false,
    },
    city: {
      label: 'City:',
      editable: false,
    },
    state: {
      label: 'State:',
      editable: false,
    },
    dl: {
      //TODO: add apostrophe to driver's license and #
      label: 'Driver License #:',
      editable: false,
    },
    party: {
      label: 'Political Party:',
      editable: false,
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
        <Text style={styles.Header}> Profile </Text>
        <Text style={styles.SubHeader}> See and update your information here </Text>
        <ScrollView style={styles.scrollContainer}> 
          <Form 
            ref={c => this._form = c}
            type={User} 
            options={options}
            value={global.userData}
          />
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Edit')}>
              <Text style={styles.buttonText}> Edit </Text>
            </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 15,
    backgroundColor: '#ffffff',
    flex: 1
  },
  scrollContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffff',
  },
    Header: {
      paddingTop: 50,
      fontSize: 35,
      color: '#66257D',
      lineHeight: 40,
      textAlign: 'left',
      marginLeft: 0,
      fontFamily: 'Charter-Bold',
  },
     SubHeader:{
      textAlign: 'left',
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
      marginLeft: 7,
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
      marginBottom: 75,
  },
  backButton: {
      marginTop: 10,
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