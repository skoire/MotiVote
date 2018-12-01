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

  onPress(screen) {
    this.props.navigation.navigate(screen)
  };

  render() {
    return (
      <View style={styles.container} behavior="padding" enabled>
      <Text style = {styles.Header}> Your Ballot </Text>
      <Text style = {styles.SubHeader}> Learn about what's on your ballot </Text> 
      <Text style = {styles.Title}> California General Election </Text>
      <Text style = {styles.Title}> Tuesday, November 6, 2018 </Text>
      <Text style = {styles.Title}> </Text>

        <FlatList 
          data = {[{key: 'Propositions', value: '12'}, 
            {key: 'Governor', value: '2'},
            {key: 'Secretary of State', value: '2'}, 
            {key: 'Your Decisions', value: '20'}]}
          renderItem = {({item}) => (
          <TouchableOpacity onPress={this.onPress.bind(this, item.key)}>
          <ListItem 
          title = {item.key}
          titleStyle = {styles.TitleFont}
          badge={{ value: item.value, textStyle: { color: 'white' }, containerStyle: { backgroundColor: '#66257D' } }}
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
      marginBottom: 30,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
    TitleFont:{
      fontFamily: 'Charter',
      marginLeft: 11,
  },
    Title:{
      fontFamily: 'Charter-Bold',
      fontSize: 20,
      color: '#66257D',
      textAlign: 'center'
  },
  container: {
    paddingTop: 30,
    backgroundColor: '#ffffff',
    flex: 1
  },
});
