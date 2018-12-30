import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class AuthScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Auth Screen</Text>
                <Button
                    title="Log in"
                    onPress={() => this.props.navigation.navigate('DrawerNavigator')}
                />
            </View>
        );
    }
}

export default AuthScreen;