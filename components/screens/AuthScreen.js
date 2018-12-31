import React, {Component} from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class AuthScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin= () => {
        const { username, password } = this.state;
        //TODO: Validate credentials before navigate to home view
        Alert.alert('Welcome', `${username}`);
        this.props.navigation.navigate('DrawerNavigator');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={ this.onLogin }
                    activeOpacity={3}
                >
                    <Text style={{margin: 5 ,fontWeight: 'bold',color: '#ffff00'}}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    button: {
        width: 200,
        height: 44,
        alignItems: 'center',
        backgroundColor: '#000051',
        padding: 5
    }
});

export default AuthScreen;