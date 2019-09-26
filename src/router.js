import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import User from './pages/User/index';
import Main from './pages/Main/index';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
