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

// import { MonoText } from '../components/StyledText';

// //TODO: if DOB is blank, put in TextInputMask (see line below)
// //<TextInputMask style={styles.textInput} type={'datetime'} options={{ format: 'DD/MM/YYYY' }} keyboardType='numeric' placeholder = "mm/dd/yyyy" />

// export default class IntroScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   }; 
//   render() {
//     return (
//         <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
//         	<Text style={styles.Header}> Confirm Info </Text>
//         	<Text style={styles.SubHeader}> See and update your information here </Text>
//             <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
//               <Text style={styles.Label}> First Name: </Text>
//               <TextInput style={styles.textInput} defaultValue = "Emma" />
//               <Text style={styles.Label}> Last Name: </Text>
//               <TextInput style={styles.textInput} defaultValue = "Dolan" />
//               <Text style={styles.Label}> Date of Birth: </Text>
//               <TextInput style={styles.textInput} keyboardType='numbers-and-punctuation' defaultValue = "02/25/1998" />
//               <Text style={styles.Label}> Address Line 1: </Text>
//               <TextInput style={styles.textInput} defaultValue = "123 45th St" />
//               <Text style={styles.Label}> Address Line 2 (optional): </Text>
//               <TextInput style={styles.textInput} defaultValue = "" />
//               <Text style={styles.Label}> City: </Text>
//               <TextInput style={styles.textInput} defaultValue = "Palo Alto" />
//               <Text style={styles.Label}> State: </Text>
//               <TextInput style={styles.textInput} defaultValue = "CA" />
//               <Text style={styles.Label}> Driver's License #: </Text>
//               <TextInput style={styles.textInput} defaultValue = "A1639582" />
//               <Text style={styles.Label}> Political Party (optional): </Text>
//               <TextInput style={styles.textInput} defaultValue = "" />

//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => this.props.cb()}>
//                 <Text style={styles.buttonText}> Confirm </Text>
//               </TouchableOpacity>
//             </ScrollView> 
//       	</KeyboardAvoidingView>
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
//   	  paddingTop: 35,
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
//   	  textAlign: 'left',
//       marginLeft: 20,
//       fontSize: 17,
//       lineHeight: 17,
//       fontFamily: 'Charter',
//   },
//   textInput: {
//   	  alignSelf: 'stretch',
//   	  fontSize: 25,
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

// SECOND

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
//       marginBottom: 10,
//       marginLeft: 23,
//       marginRight: 29,
//     },
//   },
//   controlLabel: {
//     normal: {
//       paddingTop: 5,
//       fontSize: 21,
//       lineHeight: 23,
//       textAlign: 'left',
//       marginLeft: 0,
//       fontFamily: 'Charter',
//     },
//     // the style applied when a validation error occours
//     error: {
//       color: '#66257D',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600',
//       marginLeft: 1000,
//     }
//   }
// }

// const options = {
//   fields: {
//     first: {
//       label: 'First Name:',
//       error: 'Please enter your first name.'
//     },
//     last: {
//       label: 'Last Name:',
//       error: 'Please enter your last name.'
//     },
//     dob: {
//       label: 'Date of Birth:',
//       error: 'Please enter your date of birth.'
//     },
//     address1: {
//       label: 'Address Line 1:',
//       error: 'Please enter your street address.'
//     },
//     address2: {
//       label: 'Address Line 2:',
//     },
//     city: {
//       label: 'City:',
//       error: 'Please enter your city.'
//     },
//     state: {
//       label: 'State:',
//       error: 'Please enter your state.'
//     },
//     dl: {
//       //TODO: add apostrophe to driver's license and #
//       label: 'Drivers License:',
//       error: 'Please enter your drivers license number.' 
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
//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
//       <Text style={styles.Header}> Confirm Info </Text>
//       <Text style={styles.SubHeader}> See and update your information here </Text>
//       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
//         <Form 
//           ref={c => this._form = c}
//           type={User} 
//           options={options}
//         />
//         <Button
//           title="Sign Up!"
//           onPress={this.handleSubmit}
//         />
//       </ScrollView>
//   </KeyboardAvoidingView>  
//   );
// }
// }

// const styles = StyleSheet.create({
//   // container: {
//   //     flex: 1,
//   //     backgroundColor: '#fff',
//   //     paddingTop: 30,
//   // },
//   container: {
//     marginTop: 30,
//     padding: 20,
//     backgroundColor: '#ffffff',
//   },
//   Header: {
//      paddingTop: 35,
//       fontSize: 35,
//       color: '#66257D',
//       lineHeight: 40,
//       textAlign: 'left',
//       marginLeft: 13,
//       fontFamily: 'Charter-Bold',
//   },
//      SubHeader:{
//       textAlign: 'left',
//       marginLeft: 20,
//       fontSize: 17,
//       lineHeight: 17,
//       fontFamily: 'Charter',
//   },
//   button: {
//     marginTop: 5,
//     backgroundColor: '#66257D',
//     borderColor: 'white',
//     borderRadius: 10,
//     width: 250,
//     marginLeft: 60,
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     overflow: 'hidden',
//     padding: 12,
//     textAlign:'center',
//     marginBottom: 1000,
//   },
//   buttonText: {
//     fontSize: 25,
//     color: '#fff',
//     lineHeight: 30,
//     textAlign: 'center',
//     fontFamily: 'Charter',
//   },
// });

// THIRD

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

const Form = t.form.Form;

const User = t.struct({
  first: t.String,
  last: t.String,
  dob: t.String,
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
      label: 'Date of Birth:',
      error: 'Please enter your date of birth.'
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
      label: 'Drivers License:',
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
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Text style={styles.Header}> Confirm Info </Text>
          <Text style={styles.SubHeader}> See and update your information here </Text>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
            <Form 
              ref={c => this._form = c}
              type={User} 
              options={options}
            />
            <Button
              title="Sign Up!"
              onPress={this.handleSubmit}
            />
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
      marginBottom: -20,
  },
});
