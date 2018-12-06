import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BallotScreen from '../screens/BallotScreen';
import PropositionsScreen from '../screens/PropositionsScreen';
import Proposition1Screen from '../screens/Proposition1Screen';
import Proposition2Screen from '../screens/Proposition2Screen';
import Proposition3Screen from '../screens/Proposition3Screen';
import GovernorScreen from '../screens/GovernorScreen';
import SecretaryScreen from '../screens/SecretaryScreen';
import DecisionsScreen from '../screens/DecisionsScreen';
import VotingScreen from '../screens/VotingScreen';
import CreateGroup from '../screens/CreateGroup';
import JoinGroup from '../screens/JoinGroup';
import AchievementsScreen from '../screens/AchievementsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditInfo from '../screens/EditInfo';

const BallotStack = createStackNavigator({
  Ballot: BallotScreen,
  Propositions: PropositionsScreen,
  one: Proposition1Screen,
  two: Proposition2Screen,
  three: Proposition3Screen,
  Governor: GovernorScreen,
  Secretary: SecretaryScreen,
  Decisions: DecisionsScreen,
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
  Join: JoinGroup,
  Create: CreateGroup,
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
  Edit: EditInfo,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  BallotStack,
  VotingStack,
  AchievementsStack,
  ProfileStack,
});
