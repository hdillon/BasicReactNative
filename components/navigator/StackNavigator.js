import { createStackNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';
import AppDrawerNavigator from './drawer/AppDrawerNavigator';

const StackNavigator = new createStackNavigator({
        AuthScreen,
        DrawerNavigator: AppDrawerNavigator
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default StackNavigator;
