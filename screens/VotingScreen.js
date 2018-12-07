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
import { ListItem } from 'react-native-elements'

export default class VotingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPress(group, time) {
    if(group === 'Start your own group!') {
      this.props.navigation.navigate('Create')
    } else if (group === 'Sami, Armando') {
      this.props.navigation.navigate('Join1')
    } else if (group === 'Elizabeth') {
      this.props.navigation.navigate('Join2')
    } else if (group === 'Joe, Ed') {
      this.props.navigation.navigate('Join3')
    }
  };

  render() {
    groupStatus = global.group === undefined ? 'You are not in a group yet!': 'Your Group: ' + global.group
    timeStatus = global.time === undefined ? '': 'Meeting Time:  ' + global.time
    startGroup = global.inGroup === true && global.group === 'You' ? 'You' : 'Start your own group!'
    startTime = global.inGroup === true && global.group === 'You' ? '' + global.time : ''
    console.log(startGroup)
    console.log(startTime)

    return (
      <View style={styles.container} behavior="padding" enabled>
      <Text style = {styles.Header}> Voting Plans </Text>
      <Text style = {styles.SubHeader}> Form or join a group to go vote with friends</Text> 
      <Text style = {styles.Title}> </Text>
      <Text style = {styles.Title2}> Your next election is </Text>
      <Text style = {styles.Title2}> Tuesday, November 6, 2018 </Text>

      <Text style = {styles.Title}> </Text>
      <Text style = {styles.yourGroup}> {groupStatus} </Text>
      <Text style = {styles.yourTime}> {timeStatus} </Text>

      <FlatList 
          data = {[
            {key: 'Sami, Armando', value: '10:30 AM'}, 
            {key: 'Elizabeth', value: '2:00 PM'},
            {key: 'Joe, Ed', value: '3:45 PM'}, 
            {key: startGroup, value: startTime}]}
          scrollEnabled={false}  
          renderItem = {({item}) => (
            //the on press button needs to store the key/value pair picked into the global variable sheet
            //if picked a group, go to join group screen and populate with 
          <TouchableOpacity onPress={this.onPress.bind(this, item.key, item.value)}>
          <ListItem 
            title = {item.key}
            titleStyle = {styles.TitleFont}
            rightTitle = {item.value}
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
    Header:{
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
      marginBottom: 3,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
    TitleFont:{
      fontFamily: 'Charter',
      fontSize: 20,
      marginLeft: 11,
  },
    Title:{
      fontFamily: 'Charter',
      fontSize: 20,
      textAlign: 'center'
  },
  yourGroup:{
      fontFamily: 'Charter-Bold',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 12,
  },
  yourTime:{
      fontFamily: 'Charter-Bold',
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 15  
  },
    Title2:{
      fontFamily: 'Charter-Bold',
      fontSize: 23,
      color: '#66257D',
      textAlign: 'center'
  },
  container: {
    paddingTop: 30,
    backgroundColor: '#ffffff',
    flex: 1
  },
  buttonTextLeft: {
      fontSize: 20,
      color: '#fff',
      lineHeight: 30,
      textAlign: 'left',
      fontFamily: 'Charter',
  },
  buttonTextRight: {
      fontSize: 20,
      color: '#fff',
      lineHeight: 30,
      textAlign: 'right',
      fontFamily: 'Charter',
  },
  button: {
      marginTop: 5,
      backgroundColor: '#66257D',
      borderColor: 'white',
      borderRadius: 10,
      width: 320,
      marginLeft: 27,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      marginBottom: 150,
  },
});
