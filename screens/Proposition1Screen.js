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

  onPress = data => this.setState({data});

  state = {
    data: [{label: 'Undecided', color: '#66257D'}, {label: 'Yes', color: '#66257D'}, {label: 'No', color: '#66257D'}]
  }

  render() {

    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;

    return (
      <View style={styles.container} behavior="padding" enabled>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.backButtonText}> {'< Props'} </Text>
      </TouchableOpacity>
      <Text style = {styles.Header}> Proposition 1</Text>
      <Text style = {styles.SubHeader}> Funds housing assistance programs </Text> 

      <ScrollView>
      <Text style = {styles.SectionHeader}> Summary </Text>
      <Text style = {styles.Text}> - Funds affordable housing</Text>
      <Text style = {styles.Text}> - Helps low-income residents & veterans </Text>
      <Text style = {styles.Text}> - Authorizes CA to sell $4 billion in bonds </Text>
      <Text style = {styles.Text}> - State pays $170M/yr for 35 yrs </Text>
      <Text style = {styles.Text}> - Doesn't raise taxes </Text>
      <Text style = {styles.SectionHeader}> How You Plan to Vote </Text>

      <View style={styles.Radio}>
      <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
      </View>

      <Text style = {styles.SectionHeader}> Related Articles </Text>
      <FlatList 
          data = {[{key: 'Housing Programs and Veterans\' Loans Bond (2018)', value: 'https://ballotpedia.org/California_Proposition_1,_Housing_Programs_and_Veterans%27_Loans_Bond_(2018)'}, 
            {key: 'A $4 Billion Bond for Housing', value: 'https://elections.calmatters.org/2018/california-ballot-measures/proposition-1-affordable-housing-bond/'}, 
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
    Text:{
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
