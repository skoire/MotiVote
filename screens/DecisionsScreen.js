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
    prop1dec = false;
    try{
    prop1dec = global.prop1Data.find(e => e.selected == true);
    } catch {}
    prop1dec = prop1dec ? prop1dec.label : "Undecided";

    prop2dec = false;
    try{
    prop2dec = global.prop2Data.find(e => e.selected == true);
    } catch {}
    prop2dec = prop2dec ? prop2dec.label : "Undecided";

    prop3dec = false;
    try{
    prop3dec = global.prop3Data.find(e => e.selected == true);
    } catch {}
    prop3dec = prop3dec ? prop3dec.label : "Undecided";

    govDec = false;
    try{
    govDec = global.governorData.find(e => e.selected == true);
    } catch {}
    govDec = govDec ? govDec.label : "Undecided";

    secDec = false;
    try{
    secDec = global.secretaryData.find(e => e.selected == true);
    } catch {}
    secDec = secDec ? secDec.label : "Undecided";

    return (
      <View style={styles.container} behavior="padding" enabled>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.backButtonText}> {'< Ballot'} </Text>
      </TouchableOpacity>
      <Text style = {styles.Header}> Your Decisions</Text>
      <Text style = {styles.SubHeader}> How you plan to vote </Text> 

        <FlatList 
          data = {[{key: 'Proposition 1', decision: prop1dec}, 
            {key: 'Proposition 2', decision: prop2dec}, 
            {key: 'Proposition 3', decision: prop3dec}, 
            {key: 'Governor', decision: govDec},
            {key: 'Secretary of State', decision: secDec}]}
          renderItem = {({item}) => (
            <ListItem 
            title = {item.key}
            titleStyle = {styles.TitleFont}
            rightTitle = {item.decision}
            rightTitleStyle = {styles.TitleFont}
            bottomDivider = {true}
            />
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
      fontSize: 20,
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
