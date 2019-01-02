import React, {Component} from 'react';
import { Text } from 'react-native';
import {Container, Content} from 'native-base';
import MenuHeader from '../MenuHeader';

class HomeScreen extends Component {
    static navigationOptions = {
        //drawerLabel: 'Home'
    };

    render() {
        return (
            <Container>
                <MenuHeader
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