// import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';

// export default class IntroScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   };

//   render() {
//     return (
//         <View style={styles.container}>
//           <Text style={styles.instructionTextTop}> Scan your ID </Text>
//           <Text style={styles.instructionTextBottom}> to see if you're registered </Text>
//           <Text style={styles.cameraText}> Press the camera icon below to scan your ID! </Text>
//             <TouchableOpacity
//               style={styles.cameraButton}
//               onPress={() => this.props.cb()}>
//               <Image 
//                 source={require('../assets/images/Scan-complete.png')}
//                 style={styles.logoImage}
//               />
//           </TouchableOpacity>

//           <TouchableOpacity
//               style={styles.button}
//               onPress={() => this.props.cb_2()}>
//               <Text style={styles.buttonText}> Fill out form instead </Text>
//           </TouchableOpacity>

//         </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       paddingTop: 0,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//   },
//   logoImage: {
//       width: 300,
//       height: 400,
//       resizeMode: 'contain',
//       marginTop: -180,
//   },
//   instructionTextTop: {
//       fontSize: 25,
//       lineHeight: 30,
//       textAlign: 'center',
//       fontFamily: 'Charter-Bold',
//       color: '#66257D',
//   },
//   instructionTextBottom: {
//       fontSize: 25,
//       lineHeight: 30,
//       textAlign: 'center',
//       fontFamily: 'Charter',
//       color: '#66257D',
//       marginBottom: 10,
//   },
//   cameraText: {
//       fontSize: 16,
//       lineHeight: 20,
//       textAlign: 'center',
//       fontFamily: 'Charter',
//       color: '#66257D',
//       marginBottom: 20,
//   },
//   cameraButton: {
//     backgroundColor: '#fff',
//     paddingTop: 180,
//     marginBottom: 55,
//     shadowColor: '#303838',
//     shadowOffset: { width: 0, height: 10 },
//     shadowRadius: 10,
//     shadowOpacity: 0.35,
//     height: 380,
//     width: 260,
//     alignItems: 'center',

//   },
//   buttonText: {
//       fontSize: 22,
//       color: '#fff',
//       lineHeight: 30,
//       textAlign: 'center',
//       fontFamily: 'Charter',
//   },
//   button: {
//       backgroundColor: '#66257D',
//       borderColor: 'white',
//       borderRadius: 10,
//       color: 'white',
//       fontSize: 24,
//       fontWeight: 'bold',
//       overflow: 'hidden',
//       padding: 12,
//       textAlign:'center',
//       width: 250,
//   },
// });




import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  Animated, 
  Image, 
  Easing, 
  Platform, 
  ScrollView, 
  Text, 
  TouchableOpacity 
} from 'react-native';

import { WebBrowser, Constants } from 'expo';

import { MonoText } from '../components/StyledText';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      size: new Animated.Value(1)
    }
  }
  
  componentDidMount () {
    this._loopAnimationDown();
  }
    
  // The animation functions. Initial and end values can be anything (not just 1, 10, but remember to use the same value and flip them:
  _loopAnimationDown() {
    this.state.size.setValue(390);
    Animated.timing(this.state.size, {
      toValue: 380,
      duration: 500,
      easing: Easing.linear
    }).start((o) => {
      if (o.finished) {
        this._loopAnimationUp();
      }
    });
  }

  _loopAnimationUp() {
    this.state.size.setValue(380);
    Animated.timing(this.state.size, {
      toValue: 390,
      duration: 500,
      easing: Easing.linear
    }).start((o) => {
      if (o.finished) {
        this._loopAnimationNext();
      }
    });
  }
  
  

  _loopAnimationNext() {
    this.state.size.setValue(390);
    Animated.timing(this.state.size, {
      toValue: 390,
      duration: 2500,
      easing: Easing.linear
    }).start((o) => {
      if (o.finished) {
        this._loopAnimationDown();
      }
    });
  }
  
  render() {
    const size = this.state.size.interpolate({
      // inputRange: [280, 300],
      // outputRange: [300, 280],
      inputRange: [380, 390],
      outputRange: [390, 380],
      extrapolate: 'clamp',
    });
    
    return (
      <View style={styles.container}>
        <Text style={styles.instructionTextTop}> Scan your ID </Text>
        <Text style={styles.instructionTextBottom}> to see if you're registered </Text>
        <Text style={styles.cameraText}> Press the camera icon below to scan your ID! </Text>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => this.props.cb()}>
          <AnimatedImage
            style={[styles.image, {
              width: size,
              height: size,
            }]}
            source={require('../assets/images/Scan-complete.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.cb_2()}>
          <Text style={styles.buttonText}> Fill out form instead </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  image: {
    justifyContent:'center',
    backgroundColor:'transparent',
    width: 300,
    height: 400,
    resizeMode: 'contain',      
    marginTop: -180,
  },
  instructionTextTop: {
      fontSize: 25,
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter-Bold',
      color: '#66257D',
  },
  instructionTextBottom: {
      fontSize: 25,
      lineHeight: 30,
      textAlign: 'center',
      fontFamily: 'Charter',
      color: '#66257D',
      marginBottom: 10,
  },
  cameraText: {
      fontSize: 16,
      lineHeight: 20,
      textAlign: 'center',
      fontFamily: 'Charter',
      color: '#66257D',
      marginBottom: 20,
  },
  cameraButton: {
    backgroundColor: '#fff',
    paddingTop: 180,
    marginBottom: 55,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    height: 380,
    width: 240,
    alignItems: 'center',

  },
  buttonText: {
      fontSize: 22,
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
  },
});
