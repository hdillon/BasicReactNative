import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import StackNavigator from './components/navigator/StackNavigator';


const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
