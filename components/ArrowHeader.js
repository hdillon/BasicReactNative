import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Body, Header, Icon, Left, Right } from 'native-base';

const ArrowHeader = (props) => (
    <Header style={styles.header}>
        <Left>
            <Icon 
                name={'arrow-back'} 
                onPress={() => props.navigation.goBack()} style={styles.menu}
            />
        </Left>
        <Body>
        <Text style={styles.menu}>{props.navigation.state.routeName}</Text>
        </Body>
        <Right />
    </Header>
);

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

export default ArrowHeader;
