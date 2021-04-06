import React, { useEffect } from 'react';
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
// PROVIDER
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

////
import { setNavigator } from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';

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
  loading: LoadingScreen,
  loginFlow: loginStack,
  mainFlow: createBottomTabNavigator({
    trackListFlow: trackStack,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNav);
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={setNavigator} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
