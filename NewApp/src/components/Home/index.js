import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { StatusBar , View, Image} from "react-native";
import styles from "./styles";

const avatar = require("../../../assets/avatar1.png");

export default class Home extends Component {
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
          <Title style={styles.textBody}>Home</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>




        <Content style={{backgroundColor: "white"}}>

        <View style={{flex: 1, alignSelf: "stretch"}}>

          <View style={styles.BotsifyHeader}>
          <Text style={styles.BotsifyHeaderText}>Botsify</Text>
          </View>

          <View style={styles.BotsSection}>

            <View  style={{flex:1, backgroundColor: "#7CD1E9"}}>
              <View style={styles.BotsifyHeaderRadius}>
            <Text style={styles.YourBotText}>Your Bots</Text>
             </View>
            </View>

            <View style={{flex:9}}>

              <View style={styles.BotViewHorizontal}>
                <View style={styles.BotViewLeft}>
                <Image source={avatar} style = {styles.BotImage}/>
              <Text style={styles.BotNameText}>Bot 1</Text>
               </View>
               <View style={styles.BotViewRight}>
                <Image source={avatar} style = {styles.BotImage}/>
              <Text style={styles.BotNameText}>Bot 2</Text>
               </View>
              </View>

              <View style={styles.BotViewHorizontal}>
              <View style={styles.BotViewLeft}>
                <Image source={avatar} style = {styles.BotImage}/>
              <Text style={styles.BotNameText}>Bot 3</Text>
               </View>
               <View style={styles.BotViewRight}>
                <Image source={avatar} style = {styles.BotImage}/>
              <Text style={styles.BotNameText}>Bot 4</Text>
               </View>
              </View>

            </View>
          </View>

        </View>
        </Content>
      </Container>
    );
  }
}
