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
import { ListItem } from 'react-native-elements'


export default class BallotScreen extends React.Component {
  isFocused() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.subs = [
      this.props.navigation.addListener('didFocus', () => this.isFocused()),
    ];
  }

  componentWillUnmount() {
    this.subs.forEach(sub => sub.remove());
  }

  static navigationOptions = {
    header: null,
  };


  onPress(screen) {
    this.props.navigation.navigate(screen)
  };

  render() {
    propStatus = 0;
    govStatus = 0;
    secStatus = 0;

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

    if (prop1dec === "Undecided") propStatus++;
    if (prop2dec === "Undecided") propStatus++;
    if (prop3dec === "Undecided") propStatus++;

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

    if (govDec === "Undecided") govStatus++;
    if (secDec === "Undecided") secStatus++;

    global.decLeft = propStatus + govStatus + secStatus;
    
    return (
      <View style={styles.container} behavior="padding" enabled>
      <Text style = {styles.Header}> Your Ballot </Text>
      <Text style = {styles.SubHeader}> Learn about what's on your ballot </Text> 
      <Text style = {styles.Title}> California General Election </Text>
      <Text style = {styles.Title}> Tuesday, November 6, 2018 </Text>
      <Text style = {styles.Title}> </Text>

        <FlatList 
          data = {[{key: 'Propositions', screen: 'Propositions', value: propStatus}, 
            {key: 'Governor', screen: 'Governor', value: govStatus},
            {key: 'Secretary of State', screen: 'Secretary', value: secStatus}, 
            {key: 'Your Decisions', screen: 'Decisions', value: '5'}]}
          renderItem = {({item}) => (
          <TouchableOpacity onPress={this.onPress.bind(this, item.screen)}>
          <ListItem 
          title = {item.key}
          titleStyle = {styles.TitleFont}
          badge= {{ value: item.value, textStyle: { color: 'white' }, containerStyle: { backgroundColor: '#66257D' } }}
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
      fontSize: 20,
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
