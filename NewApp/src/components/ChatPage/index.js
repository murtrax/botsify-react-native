import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { StatusBar, View } from "react-native";

import styles from "./styles";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';



// custom classes
classes = {
  title: {
    color: 'red',
  }
};


bootstrapStyleSheet = new BootstrapStyleSheet();
s = style = bootstrapStyleSheet.create();

export default class Chat extends Component {
  
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
          style={{ borderBottomWidth: 1 }}>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{ color: "#000" }}/>
            </Button>
          </Left>
          <Body style={styles.headerBody}>
          <Title style={styles.textBody}>Chat</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <Content>
          <Text style={{ alignSelf: "center", marginTop: 10}}>Chat Page App</Text>
          <View style={[s.body]}>
          <View style={[s.card]}>
            <View style={[s.cardBody]}>
              <Text style={[s.text]}>Hello Card!</Text>
            </View>
          </View>
          </View>
        </Content>
      </Container>
    );
  }
}
