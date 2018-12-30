import React, {Component} from 'react';
import { Text } from 'react-native';
import {Container, Content} from 'native-base';
import HeaderMenu from '../HeaderMenu';

class HomeScreen extends Component {
    static navigationOptions = {
        //drawerLabel: 'Home'
    };

    render() {
        return (
            <Container>
                <HeaderMenu
                    navigation={this.props.navigation}
                />
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>
                        Home Screen
                    </Text>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;