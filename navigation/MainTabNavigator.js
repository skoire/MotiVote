import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BallotScreen from '../screens/BallotScreen';
import PropositionsScreen from '../screens/PropositionsScreen';
import VotingScreen from '../screens/VotingScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const BallotStack = createStackNavigator({
  Ballot: BallotScreen,
  Propositions: PropositionsScreen
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
  Voting: VotingScreen,
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
