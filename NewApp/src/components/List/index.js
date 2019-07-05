import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const chat = require("../../../assets/chat2.png");
const arrow = require("../../../assets/back.png");
import {DrawerItems} from "react-native";
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
          <View style = {styles.Arrow}>
            <TouchableOpacity>
            <Image style = {styles.backArrow} source = {arrow}></Image>
            </TouchableOpacity>
          </View>
          
          </Body>
          <Title style={styles.textBody}>User 1</Title>
          <Right style={styles.headerRight}/>
        </Header>
        <Content>
          <View style = {styles.outerContainer}>
          <View style = {styles.innerContainer}>

          </View>
          </View>

        </Content>
      </Container>
    );
  }
}
