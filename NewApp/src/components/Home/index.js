import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";

//import images from "./Home/images";
import { Image, View, TouchableOpacity } from "react-native";

const robot = require("../../../assets/robot.png");
const logo = require("../../../assets/chat2.png");

export default class Home extends Component {
 onList()
  {
    this.props.navigation.navigate("List")
  }
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
            <Image style= {styles.chat}
              source = {logo}>
            </Image>
          <Title style={styles.textBody}>Botsify</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>

        <Content>
        <View style = {styles.outerContainer}>
          <View style = {styles.innerContainer}>
        <View>
          <Text style = {styles.yourBots}> Your Bots</Text>
        </View>

        <View style = {styles.View1}>
          <TouchableOpacity style= {styles.bot1} onPress={() => this.onList()}>
            <Image style={styles.img1}
            source={robot}></Image>
            <Text style= {styles.imgText1}>Bot1</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bot2 } onPress={() => this.onList()}>
            <Image style={styles.img2}
            source={robot}></Image>
            <Text style= {styles.imgText2}>Bot2</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.View2}>
          <TouchableOpacity style= {styles.bot3} onPress={() => this.onList()}>
            <Image style={styles.img3}
            source={robot}></Image>
            <Text style= {styles.imgText3}>Bot3</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bot4 } onPress={() => this.onList()}>
            <Image style={styles.img4}
            source={robot}></Image>
            <Text style= {styles.imgText4}>Bot4</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.View3}>
          <TouchableOpacity style= {styles.bot5} onPress={() => this.onList()}>
            <Image style={styles.img5}
            source={robot}></Image>
            <Text style= {styles.imgText5}>Bot5</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bot6 } onPress={() => this.onList()}>
            <Image style={styles.img6}
            source={robot}></Image>
            <Text style= {styles.imgText6}>Bot6</Text>
          </TouchableOpacity>
        </View>

          </View>
          </View>
          </Content>
      </Container>
    );
  }
}
