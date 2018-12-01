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

export default class BallotScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }; 

  onPress = (url) => {
    WebBrowser.openBrowserAsync(url)
  };

  render() {
    return (
      <View style={styles.container} behavior="padding" enabled>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.backButtonText}> {'< Props'} </Text>
      </TouchableOpacity>
      <Text style = {styles.Header}> Proposition 1</Text>
      <Text style = {styles.SubHeader}> Funds housing assistance programs </Text> 
      <Text style = {styles.SectionHeader}> Summary </Text>
      <Text style = {styles.Text}> - Funds affordable housing</Text>
      <Text style = {styles.Text}> - Helps low-income residents & veterans </Text>
      <Text style = {styles.Text}> - Authorizes CA to sell $4 billion in bonds </Text>
      <Text style = {styles.Text}> - State pays $170M/yr for 35 yrs </Text>
      <Text style = {styles.Text}> - Doesn't raise taxes </Text>
      <Text style = {styles.SectionHeader}> How You Plan to Vote </Text>

      <Text style = {styles.SectionHeader}> Related Articles </Text>
      <FlatList 
          data = {[{key: 'Housing Programs and Veterans\' Loans Bond (2018)', value: 'https://ballotpedia.org/California_Proposition_1,_Housing_Programs_and_Veterans%27_Loans_Bond_(2018)'}, 
            {key: 'A $4 Billion Bond for Housing', value: 'https://elections.calmatters.org/2018/california-ballot-measures/proposition-1-affordable-housing-bond/'}, 
            {key: 'Endorsements', value: 'https://igs.berkeley.edu/library/election-guides/ballot-measures/november-6-2018/endorsements'}]}
          renderItem = {({item}) => (
            <TouchableOpacity onPress={this.onPress.bind(this, item.value)}>
              <ListItem 
              title = {item.key}
              titleStyle = {styles.TitleFont}
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
      marginRight: 20,
      marginBottom: 20,
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
      paddingTop: 10,
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
