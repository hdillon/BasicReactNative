import React, {Component} from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class AuthScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    onLogin= () => {
        const { username, password } = this.state;
        //TODO: Validate credentials before navigate to home view
        Alert.alert('Welcome', `${username}`);
        this.props.navigation.navigate('DrawerNavigator');
    }

    render() {
        const { isFocused } = this.state;
        const { onBlur, onFocus, ...otherProps } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 3 }} />
                <View style={{flex: 1}}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    selectionColor={BLUE}
                    underlineColorAndroid={BLUE}
                    style={styles.input}
                    {...otherProps}
                />
                </View>
                <View style={{flex: 1}}>
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    selectionColor={BLUE}
                    underlineColorAndroid={BLUE}
                    secureTextEntry={true}
                    style={styles.input}
                    {...otherProps}
                />
                </View>
                <View style={{ flex: 1 }} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={ this.onLogin }
                    activeOpacity={3}
                >
                    <Text style={{fontWeight: 'bold',color: '#ffffff'}}>LOGIN</Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
            </View>
        );
    }
}

const BLUE = '#428AF8';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    input: {
        width: 300,
        height: 45,
        paddingLeft: 6,
        fontSize: 20
    },
    button: {
        width: 300,
        height: 44,
        alignItems: 'center',
        backgroundColor: '#ff3d00',
        borderRadius: 25,
        margin: 2,
        justifyContent: 'center'
    }
});

export default AuthScreen;