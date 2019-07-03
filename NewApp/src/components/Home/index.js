import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";

//import images from "./Home/images";
import { Image, View, TouchableOpacity } from "react-native";

const robot = require("../../../assets/robot.png");

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
          <Title style={styles.textBody}>Botsify</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>

        <Content>
          <Text style = {styles.Text}>Your Bots</Text>

          <TouchableOpacity style= {styles.padding} onPress={() => this.onList()}>
            <Image style={styles.robot1}
            source={robot}></Image>
            <Text style= {styles.bot1}>Bot1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onList()}>
            <Image style={styles.robot2}
            source={robot}></Image>
            <Text style= {styles.bot1}>Bot2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onList()}>
            <Image style={styles.robot3}
            source={robot}></Image>
            <Text style= {styles.bot1}>Bot3</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onList()}>
            <Image style={styles.robot4}
            source={robot}></Image>
            <Text style= {styles.bot4}>Bot4</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onList()}>
            <Image style={styles.robot5}
            source={robot}></Image>
            <Text style= {styles.bot5}>Bot5</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.onList()}>
            <Image style={styles.robot6}
            source={robot}></Image>
            <Text style= {styles.bot6}>Bot6</Text>
          </TouchableOpacity>

          </Content>
      </Container>
    );
  }
}
