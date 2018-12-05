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
    global.prop2Data = data;
    this.setState({data})
  };

  state = {
    data: [{label: 'Undecided', color: '#66257D'}, {label: 'Yes', color: '#66257D'}, {label: 'No', color: '#66257D'}]
  }

  constructor (props){
      super(props);
      if(!global.prop2Data) global.prop2Data = [{label: 'Undecided', color: '#66257D'}, {label: 'Yes', color: '#66257D'}, {label: 'No', color: '#66257D'}];
  }

  render() {

    return (
      <View style={styles.container} behavior="padding" enabled>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.backButtonText}> {'< Props'} </Text>
      </TouchableOpacity>
      <Text style = {styles.Header}> Proposition 2</Text>
      <Text style = {styles.SubHeader}> Funds housing for those with mental illness </Text> 

      <ScrollView>
      <Text style = {styles.SectionHeader}> Summary </Text>
      <Text style = {styles.Text1}> - Allows CA to use $140M/yr of </Text>
      <Text style = {styles.Text2}>   existing county mental health funds</Text>
      <Text style = {styles.Text1}> - Pays for housing for homeless, mentally ill </Text>
      <Text style = {styles.Text2}>   people</Text>
      <Text style = {styles.Text1}> - Doesn’t require those helped to seek </Text>
      <Text style = {styles.Text2}>   treatment, but offers it</Text>
      <Text style = {styles.Text1}> - Doesn't raise taxes </Text>
      <Text style = {styles.SectionHeader}> How You Plan to Vote </Text>

      <View style={styles.Radio}>
      <RadioGroup radioButtons={global.prop2Data} onPress={this.onPress} />
      </View>

      <Text style = {styles.SectionHeader}> Related Articles </Text>
      <FlatList 
          data = {[{key: 'Use Millionaire\'s Tax Revenue for Homelessness Prevention Housing ', value: 'https://ballotpedia.org/California_Proposition_2,_Use_Millionaire%27s_Tax_Revenue_for_Homelessness_Prevention_Housing_Bonds_Measure_(2018)'}, 
            {key: 'At Issue Is Housing For 20,000 Mentally Ill Homeless People in California', value: 'http://www.capradio.org/articles/2018/10/18/proposition-2-at-issue-is-housing-for-20000-mentally-ill-homeless-people-in-california/'}, 
            {key: 'Endorsements', value: 'https://igs.berkeley.edu/library/election-guides/ballot-measures/november-6-2018/endorsements'}]}
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
