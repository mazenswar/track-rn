import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Screens
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

// STACKS //
const loginStack = createStackNavigator({
  Signup: SignupScreen,
  Signin: SigninScreen,
});
const trackStack = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});
////
// Switch Navigator //
const switchNav = createSwitchNavigator({
  loginFlow: loginStack,
  mainFlow: createBottomTabNavigator({
    trackListFlow: trackStack,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});
// //
// const navigator = createStackNavigator(
//   {
//     Signup: SignupScreen,
//     Signin: SigninScreen,
//     Account: AccountScreen,
//     TrackCreate: TrackCreateScreen,
//     TrackDetails: TrackDetailScreen,
//     TrackList: TrackListScreen,
//   },
//   {
//     initialRouteName: 'Signup',
//     defaultNavigationOptions: { title: 'Tracks' },
//   }
// );

export default createAppContainer(switchNav);
