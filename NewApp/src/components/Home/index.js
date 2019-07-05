import React, { Component } from "react";
import { Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content, } from "native-base";
import { StatusBar , View, Image, TouchableOpacity} from "react-native";
import styles from "./styles";

const avatar = require("../../../assets/avatar1.png");

export default class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false} />
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#7CD1E9"}
          style={{ borderBottomWidth: 0 ,  alignSelf: "stretch", paddingLeft: 0, paddingRight: 0, borderColor: "#7CD1E9"}}>
          <Left style={[styles.headerLeft, {padding: 0}]}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{ color: "#000",}}/>
            </Button>
          </Left>
          <Body style={ [styles.headerBody, {padding: 0}]}>
          <Text style={styles.BotsifyHeaderText}>Botsify</Text>
          </Body>
          <Right style={[styles.headerRight, {padding: 0}]}/>
        </Header>




        <Content style={{backgroundColor: "white", flex: 9}}>

        <View style={{flex: 1, alignSelf: "stretch"}}>



          <View style={styles.BotsSection}>

            <View  style={{flex:1, backgroundColor: "#7CD1E9", borderColor: "#7CD1E9"}}>
              <View style={styles.BotsifyHeaderRadius}>
            <Text style={styles.YourBotText}>Your Bots</Text>
             </View>
            </View>

            <View style={{flex:9}}>

              <View style={styles.BotViewHorizontal}>
                <TouchableOpacity style={styles.BotViewLeft} onPress={() => this.props.navigation.navigate("Chat")}>
                  <Image source={avatar} style = {styles.BotImage}/>
                  <Text style={styles.BotNameText}>Bot 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.BotViewRight} onPress={() => this.props.navigation.navigate("Chat")}>
                <Image source={avatar} style = {styles.BotImage}/>
                <Text style={styles.BotNameText}>Bot 2</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.BotViewHorizontal}>
              <TouchableOpacity style={styles.BotViewLeft} onPress={() => this.props.navigation.navigate("Chat")}>
                <Image source={avatar} style = {styles.BotImage}/>
              <Text style={styles.BotNameText}>Bot 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.BotViewRight} onPress={() => this.props.navigation.navigate("Chat")}>
                <Image source={avatar} style = {styles.BotImage}/>
              <Text style={styles.BotNameText}>Bot 4</Text>
              </TouchableOpacity>
              </View>

            </View>
          </View>

        </View>
        </Content>
      </Container>
    );
  }
}
