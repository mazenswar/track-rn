import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CreateScreen from './src/screens/Create';

const navigator = createStackNavigator(
  {
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Create',
    defaultNavigationOptions: { title: 'Tracks' },
  }
);

export default createAppContainer(navigator);
