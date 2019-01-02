import React from 'react';
import {Body, Container, Content, Header, Button} from "native-base";
import {Image, StyleSheet, Text, TouchableOpacity, Alert} from "react-native";
import {DrawerItems} from "react-navigation";
import * as Asyncstorage from "react-native";

const DrawerContent = (props) => (
    <Container>
        <Header style={{ height: 200 }}>
            <Body>
            <Image
                source={require('../../../assets/logo_cabj.png')}
                style={styles.drawerImage}
            />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
            <TouchableOpacity onPress={()=>
                Alert.alert(
                    'Log out',
                    'Do you want to logout?',
                    [
                        {text: 'Cancel', onPress: () => {return null}},
                        {text: 'Confirm', onPress: () => {
                                //Asyncstorage.clear();
                                props.navigation.navigate('AuthScreen')
                            }},
                    ],
                    { cancelable: false }
                )
            }>
                <Text style={{margin: 16,fontWeight: 'bold',color: 'red'}}>Log out</Text>
            </TouchableOpacity>
        </Content>
    </Container>
);

const styles = StyleSheet.create({
    drawerImage:{
        height: 150,
        width: 260
        //borderRadius: 75
    }
});

export default DrawerContent;