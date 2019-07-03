import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const chat = require("../../../assets/chat.png");
import { Image, View, TouchableOpacity } from "react-native";

export default class List extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          BarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}

          style={{ borderBottomWidth: 0, backgroundColor: "#7CD1E9", paddingLeft: 0, paddingRight:0}}>
          <Left style={styles.headerLeft}>

          </Left>
          <Body style={styles.headerBody}>
          <Image style = {styles.chat} source = {chat}></Image>
          <Title style={styles.textBody}>Botsify</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <Content>


        </Content>
      </Container>
    );
  }
}
