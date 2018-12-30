import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Body, Header, Icon, Left, Right} from "native-base";

const HeaderMenu = (props) => (
    <Header style={styles.header}>
        <Left/>
        <Body>
        <Text>Details</Text>
        </Body>
        <Right>
            <Icon name={'menu'} onPress={
                () => props.navigation.openDrawer()} style={styles.menu}/>
        </Right>
    </Header>
)

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    header: {
        backgroundColor: '#000051',
    },
    menu: {
        color: '#ffff00',
    },
});

export default HeaderMenu;