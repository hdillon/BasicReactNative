import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from '../../Screens/HomeScreen';
import DetailsScreen from '../../Screens/DetailsScreen';
import DrawerContent from './DrawerContent';

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        contentComponent: DrawerContent //Custom Drawer Navigator
    }
);

export default AppDrawerNavigator;