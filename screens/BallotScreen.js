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

//TODO: back button on camera 

export default class BallotScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container} behavior="padding" enabled>
      <Text style = {styles.Header}> Your Ballot </Text>
      <Text style = {styles.SubHeader}> Learn about what's on your ballot </Text> 

        <FlatList 
          data = {[{key: 'Propositions', value: '12'}, 
            {key: 'Senate Race', value: '8'}, 
            {key: 'Your Decisions', value: '20'}]}
          renderItem = {({item}) => <ListItem 
          title = {item.key}
          titleStyle = {styles.TitleFont}
          badge={{ value: item.value, textStyle: { color: 'white' }, containerStyle: { backgroundColor: '#66257D' } }} 
          bottomDivider = {true}
          />}
        />
        </View>

    );
    // return (
    //   <View style={styles.container}>
    //     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    //       <View style={styles.welcomeContainer}>
    //         <Image
    //           source={require('../assets/images/MotiVote-logo.png')}
    //           style={styles.welcomeImage}
    //         />
    //       </View>

    //       <View style={styles.getStartedContainer}>
    //         {this._maybeRenderDevelopmentModeWarning()}

    //         <Text style={styles.getStartedText}>
    //           Hello fellow students of Minh-An.
    //         </Text>
    //       </View>

    //       <View style={styles.helpContainer}>
    //         <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
    //           <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </ScrollView>

    //   </View>
    // );
  }

  
}

const styles = StyleSheet.create({
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
      marginBottom: 20,
  },
    TitleFont:{
      fontFamily: 'Charter',
      marginLeft: 2,
  },
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    flex: 1
  },
});
