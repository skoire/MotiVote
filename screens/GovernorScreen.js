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
    global.governorData = data;
    this.setState({data})
  };

  state = {
    data: [{label: 'Undecided', color: '#66257D'}, {label: 'Yes', color: '#66257D'}, {label: 'No', color: '#66257D'}]
  }

  constructor (props){
      super(props);
      if(!global.governorData) global.governorData = [{label: 'Undecided', color: '#66257D'}, {label: 'Gavin Newsom', color: '#66257D'}, {label: 'John H. Cox', color: '#66257D'}];
  }

  render() {

    return (
      <View style={styles.container} behavior="padding" enabled>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.navigate('Ballot',{value: global.governorData})}>
        <Text style={styles.backButtonText}> {'< Ballot'} </Text>
      </TouchableOpacity>
      <Text style = {styles.Header}> Governor</Text>
      <Text style = {styles.SubHeader}> Elected state chief executive officer </Text> 

      <ScrollView>
      <Text style = {styles.SectionHeader}> What's the Role? </Text>
      <Text style = {styles.Text1}> - Head of state government </Text>
      <Text style = {styles.Text1}> - Implements state laws </Text>
      <Text style = {styles.Text1}> - Oversees operation of CA’s executive</Text>
      <Text style = {styles.Text2}>   branch</Text>

      <Text style = {styles.SectionHeader}> Who are the Candiates? </Text>
      <Text style = {styles.Text}> Gavin Newsom </Text>
      <Text style = {styles.Text1}>     - Democrat </Text>
      <Text style = {styles.Text1}>     - Current CA Lieutenant Governor</Text>
      <Text style = {styles.Text1}>     - Former San Francisco Mayor</Text>
      <Text style = {styles.Text1}>     - Top Priority: CA’s affordability crisis</Text>

      <Text style = {styles.Text}> John H. Cox </Text>
      <Text style = {styles.Text1}>     - Republican </Text>
      <Text style = {styles.Text1}>     - Accountant & Attorney</Text>
      <Text style = {styles.Text1}>     - Active in the Nativity Catholic Church</Text>
      <Text style = {styles.Text1}>     - Top Priority: Reigning in special</Text>
      <Text style = {styles.Text2}>       interests</Text>

      <Text style = {styles.SectionHeader}> How You Plan to Vote </Text>
      <View style={styles.Radio}>
      <RadioGroup radioButtons={global.governorData} onPress={this.onPress} />
      </View>

      <Text style = {styles.SectionHeader}> Related Articles </Text>
      <FlatList 
          data = {[{key: 'A Look at California\'s Gubernatorial Candidates', value: 'https://abc7news.com/politics/2018-voter-guide-a-look-at-the-california-governors-race/4463875/'}, 
            {key: 'PolitiFact Statements about The 2018 California Governor\'s Race', value: 'https://www.politifact.com/subjects/2018-california-governors-race/'}]}
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
