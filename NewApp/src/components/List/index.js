import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const chat = require("../../../assets/chat2.png");
const arrow = require("../../../assets/back.png");
const avatar = require("../../../assets/avatar.png");
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

          <View style = {styles.balloon1}>
            <Text style = {styles.text1}>Hi</Text>
            <View style={styles.arrowLeftContainer1}></View>
          </View>

            <Image style = {styles.avatar1} source = {avatar}></Image>

            <View style = {styles.balloon2}>
              <Text style = {styles.text2}>Hello</Text>
              <View style={styles.arrowLeftContainer2}></View>
            </View>
            <Image style = {styles.avatar2} source = {avatar}></Image>

            <View style = {styles.balloon3}>
              <Text style = {styles.text3}>What's going on?</Text>
              <View style={styles.arrowLeftContainer3}></View>
            </View>

            <View style = {styles.balloon4}>
              <Text style = {styles.text4}>Everything is good</Text>
              <View style={styles.arrowLeftContainer4}></View>
            </View>

            <View style = {styles.balloon5}>
              <Text style = {styles.text5}>How about you?</Text>
              <View style={styles.arrowLeftContainer5}></View>
            </View>

            <View style = {styles.balloon6}>
              <Text style = {styles.text6}>Send a message</Text>
              <View style={styles.arrowLeftContainer6}></View>
            </View>



          </View>
          </View>

        </Content>
      </Container>
    );
  }
}
