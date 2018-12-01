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
    title: 'Your Ballot',
  }; 

  onPress = () => {
    <Text style = {styles.Header}> button was pressed!! </Text>
  };

  render() {
    return (
      <View style={styles.container} behavior="padding" enabled>
      <Text style = {styles.Header}> Propositions</Text>
      <Text style = {styles.SubHeader}> Learn about what's on your ballot </Text> 

        <FlatList 
          data = {[{key: 'Proposition 1'}, 
            {key: 'Proposition 2'}, 
            {key: 'Proposition 3'}]}
          renderItem = {({item}) => (
          <TouchableOpacity onPress={this.onPress}>
          <ListItem 
          title = {item.key}
          titleStyle = {styles.TitleFont}
           
          bottomDivider = {true}
          />
          </TouchableOpacity>
          )}
        />
        </View>

    );
    // return (
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
  container: {
    marginTop: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    flex: 1
  },
});
