import React, {Component} from 'react';
import {Alert, TextInput, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';

class AuthScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    async componentDidMount() {
        // TODO: You: Do firebase things
        // const { user } = await firebase.auth().signInAnonymously();
        // console.warn('User -> ', user.toJSON());

        // await firebase.analytics().logEvent('foo', { bar: '123'});
    }

    onLogin = () => {
        const { email, password } = this.state;
        if(email === '' || password === '')
            Alert.alert('Ivalid user or pass');
        else{
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    console.info('LOGIN OK', `${user}`);
                    this.props.navigation.navigate('DrawerNavigator');
                })
                .catch((error) => {
                    const { code, message } = error;
                    console.info('LOGIN ERROR', `${code}`);
                    console.info('MESSAGE', `${message}`);
                    Alert.alert('Ivalid user or pass');
                });
        }
    };

    onRegister = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                //Do anything with the user
            })
            .catch((error) => {
                const { code, message } = error;
                console.info('REGISTER ERROR', `${code}`);
                console.info('MESSAGE', `${message}`);
                Alert.alert('Sign up failed');
            });
    };

    render() {
        const { isFocused } = this.state;
        const { onBlur, onFocus, ...otherProps } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 3 }} />
                <View style={{flex: 1}}>
                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={'Email'}
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