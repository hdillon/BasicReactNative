import React, {Component} from 'react';
import { Container, Content } from 'native-base';
import { Text } from 'react-native';
import ArrowHeader from '../ArrowHeader';


class DetailsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Details'
    };

    render() {
        return (
            <Container>
                <ArrowHeader
                    navigation={this.props.navigation}
                />
                <Content 
                    contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text>Details Screen</Text>
                </Content>
            </Container>
        );
    }
}

export default DetailsScreen;
