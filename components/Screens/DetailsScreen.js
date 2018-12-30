import React, {Component} from 'react';
import {Button, Container, Content} from "native-base";
import {Text} from "react-native";
import HeaderMenu from '../HeaderMenu';


class DetailsScreen extends Component {
    static navigationOptions = {
        //drawerLabel: 'Details'
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
                    <Text>Details Screen</Text>
                </Content>
            </Container>
        );
    }
}

export default DetailsScreen;