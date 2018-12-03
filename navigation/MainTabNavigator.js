import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BallotScreen from '../screens/BallotScreen';
import PropositionsScreen from '../screens/PropositionsScreen';
import Proposition1Screen from '../screens/Proposition1Screen';
import VotingScreen from '../screens/VotingScreen';
import CreateGroup from '../screens/CreateGroup';
import JoinGroup from '../screens/JoinGroup';
import AchievementsScreen from '../screens/AchievementsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const BallotStack = createStackNavigator({
  Ballot: BallotScreen,
  Propositions: PropositionsScreen,
  one: Proposition1Screen,
});

BallotStack.navigationOptions = {
  tabBarLabel: 'Your Ballot',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-checkmark-circle-outline' : 'md-information-circle-outline'
      }
    />
  ),
};

const VotingStack = createStackNavigator({
  //MAYBE WE CAN PUT SOME KIND OF IF HERE WHERE 
  //IF THE USER HAS MADE PLANS it goes to Voting Screen 
  //else it goes to confirmed plans screen!!!!!!
  Voting: VotingScreen,
  Join: JoinGroup,
  Create: CreateGroup,
  Plans: VotingScreen,
});

VotingStack.navigationOptions = {
  tabBarLabel: 'Voting Plans',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
    />
  ),
};

const AchievementsStack = createStackNavigator({
  Achievements: AchievementsScreen,
});

AchievementsStack.navigationOptions = {
  tabBarLabel: 'Achievements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
    />
  ), 
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}
    />
  ),
};

export default createBottomTabNavigator({
  BallotStack,
  VotingStack,
  AchievementsStack,
  ProfileStack,
});
