import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import {Container, Header, Content, Body } from 'native-base';
import DetailsScreen from './components/Screens/DetailsScreen';
import HomeScreen from './components/Screens/HomeScreen';


const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{ height: 200 }}>
            <Body>
                <Image
                    source={require('./assets/logo_cabj.png')}
                    style={styles.drawerImage}
                />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },

    drawerImage:{
        height: 150,
        width: 260
        //borderRadius: 75
    }
});

const drawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        contentComponent: CustomDrawerContentComponent //Custom Drawer Navigator
    }
);


const AppContainer = createAppContainer(drawerNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
