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


export default class BallotScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }; 

  onPress = (screen) => {
    this.props.navigation.navigate(screen)
  };

  render() {
    return (
      <View style={styles.container} behavior="padding" enabled>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.backButtonText}> {'< Ballot'} </Text>
      </TouchableOpacity>
      <Text style = {styles.Header}> Your Decisions</Text>
      <Text style = {styles.SubHeader}> How you plan to vote </Text> 

      //Make the array of decisions!!!!!

        <FlatList 
          data = {[{key: 'Proposition 1', value: 'one', decision: 'a'}, 
            {key: 'Proposition 2', value: 'two', decision: 'a'}, 
            {key: 'Proposition 3', value: 'three', decision: 'a'}, 
            {key: 'Governor', value: 'Governor', decision: 'a'},
            {key: 'Secretary of State', value: 'Secretary', decision: 'a'}]}
          renderItem = {({item}) => (
          <TouchableOpacity onPress={this.onPress.bind(this, item.value)}>
            <ListItem 
            title = {item.key}
            titleStyle = {styles.TitleFont}
            rightTitle = {item.decision}
            rightTitleStyle = {styles.TitleFont}
            chevron = {true} 
            bottomDivider = {true}
            />
          </TouchableOpacity>
          )}
        />
        </View>

    );
  }

  
}

const styles = StyleSheet.create({
    Header: {
      paddingTop: 10,
      fontSize: 35,
      color: '#66257D',
      lineHeight: 40,
      textAlign: 'left',
      marginLeft: 13,
      fontFamily: 'Charter-Bold',
  },
     SubHeader:{
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 20,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
    TitleFont:{
      fontFamily: 'Charter',
      marginLeft: 11,
  },
  backButton: {
      marginTop: 60,
      backgroundColor: '#66257D',
      borderColor: 'white',
      borderRadius: 10,
      marginLeft: 15,
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
  container: {
    marginTop: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    flex: 1
  },
});
