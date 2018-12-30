import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppDrawerNavigator from './components/navigator/drawer/AppDrawerNavigator';

const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
