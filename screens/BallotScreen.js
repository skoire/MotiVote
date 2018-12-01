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

  onPress = () => {
    this.props.navigation.navigate('Propositions')
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
          renderItem = {({item}) => (
          <TouchableOpacity onPress={this.onPress}>
          <ListItem 
          title = {item.key}
          titleStyle = {styles.TitleFont}
          badge={{ value: item.value, textStyle: { color: 'white' }, containerStyle: { backgroundColor: '#66257D' } }} 
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
      paddingTop: 35,
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
  container: {
    paddingTop: 30,
    backgroundColor: '#ffffff',
    flex: 1
  },
});
