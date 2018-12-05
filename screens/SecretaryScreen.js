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
  Linking,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { ListItem } from 'react-native-elements'
import RadioGroup from 'react-native-radio-buttons-group';

export default class BallotScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }; 

  _onPress = (url) => {
    WebBrowser.openBrowserAsync(url)
  };

  onPress = data => {
    global.secretaryData = data;
    this.setState({data})
  };

  state = {
    data: [{label: 'Undecided', color: '#66257D'}, {label: 'Yes', color: '#66257D'}, {label: 'No', color: '#66257D'}]
  }

  constructor (props){
      super(props);
      if(!global.secretaryData) global.secretaryData = [{label: 'Undecided', color: '#66257D'}, {label: 'Alex Padilla', color: '#66257D'}, {label: 'Mark P. Meuser', color: '#66257D'}];
  }

  render() {

    let selectedButton = global.secretaryData.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : global.secretaryData[0].label;

    return (
      <View style={styles.container} behavior="padding" enabled>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.backButtonText}> {'< Ballot'} </Text>
      </TouchableOpacity>
      <Text style = {styles.Header}> Secretary of State</Text>
      <Text style = {styles.SubHeader}> Elected state executive officer </Text> 

      <ScrollView>
      <Text style = {styles.SectionHeader}> What's the Role? </Text>
      <Text style = {styles.Text1}> - Keeps CA's key documents </Text>
      <Text style = {styles.Text1}> - Registers businesses in CA</Text>
      <Text style = {styles.Text1}> - Commissions notaries public</Text>
      <Text style = {styles.Text1}> - Manages state ballot initiatives</Text>
      <Text style = {styles.Text1}> - 4-year term</Text>


      <Text style = {styles.SectionHeader}> Who are the Candiates? </Text>
      <Text style = {styles.Text}> Alex Padilla (Incumbent)</Text>
      <Text style = {styles.Text1}>     - Democrat </Text>
      <Text style = {styles.Text1}>     - 2015 - Present: CA Secretary of State</Text>
      <Text style = {styles.Text1}>     - 2006 - 2014: CA Senate District 20</Text>
      <Text style = {styles.Text1}>     - Member of National Association of</Text>
      <Text style = {styles.Text2}>       Latino Elected and Appointed Officials</Text>

      <Text style = {styles.Text}> Mark P. Meuser </Text>
      <Text style = {styles.Text1}>     - Republican </Text>
      <Text style = {styles.Text1}>     - 2016: CA Senate District 7 Candidate</Text>
      <Text style = {styles.Text1}>     - Civil Litigation Attorney</Text>

      <Text style = {styles.SectionHeader}> How You Plan to Vote </Text>
      <View style={styles.Radio}>
      <RadioGroup radioButtons={global.secretaryData} onPress={this.onPress} />
      </View>

      <Text style = {styles.SectionHeader}> Related Articles </Text>
      <FlatList 
          data = {[{key: 'Alex Padilla, Mark Meuser Run for California Secretary of State', value: 'http://www.dailycal.org/2018/10/17/alex-padilla-mark-meuser-run-for-california-secretary-of-state/'}, 
            {key: 'Secretary of State — State of California', value: 'https://votersedge.org/en/ca/ballot/election/area/69/contests/contest/16572?id=statewide-69-ca'}]}
          renderItem = {({item}) => (
            <TouchableOpacity onPress={this._onPress.bind(this, item.value)}>
              <ListItem 
              title = {item.key}
              titleStyle = {styles.TitleFont}
              chevron = {true} 
              bottomDivider = {true}
              />
            </TouchableOpacity>
          )}
      />
      </ScrollView>
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
      marginRight: 20,
      marginBottom: 0,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
    Text:{
      textAlign: 'left',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 5,
      marginTop: 5,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter-Bold',
  },
    Text1:{
      textAlign: 'left',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 0,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
    Text2:{
      textAlign: 'left',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 5,
      fontSize: 17,
      lineHeight: 17,
      fontFamily: 'Charter',
  },
    SectionHeader:{
      paddingTop: 20,
      marginBottom: 10,
      fontSize: 28,
      color: '#66257D',
      textAlign: 'left',
      marginLeft: 13,
      fontFamily: 'Charter-Bold',
  },
    TitleFont:{
      fontFamily: 'Charter',
      marginLeft: 11,
  },
  Radio:{
      marginLeft: 15,
      alignItems: 'flex-start',
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
