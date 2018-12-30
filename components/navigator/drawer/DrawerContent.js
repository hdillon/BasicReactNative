import React from 'react';
import {Body, Container, Content, Header} from "native-base";
import {Image, StyleSheet} from "react-native";
import {DrawerItems} from "react-navigation";

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
        </Content>
    </Container>
)

const styles = StyleSheet.create({
    drawerImage:{
        height: 150,
        width: 260
        //borderRadius: 75
    }
});

export default DrawerContent;