import React, { Component } from "react";
import { Header, Left, Container, Button, Body, Title, FlatList, Right, Icon, Text, Content, SectionList, Alert} from "native-base";
import { StatusBar , View, Image} from "react-native";
import styles from "./styles";
//import { List, ListItem } from "react-native-elements";

const avatar = require("../../../assets/avatar2.png");

export default class Chat extends Component {

  state = {
    Jon : "What time is the meeting today?",
    Martha: "How are things ?",
    Porsche: "Tell Mark that he needs to send over the design by 5pm",
  }
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
            <Button transparent >
              <Icon name="menu" style={{ color: "#000",}}/>
            </Button>
          </Left>
          <Body style={ [styles.headerBody, {padding: 0}]}>
          <Text style={styles.BotsifyHeaderText} >Botsify</Text>
          </Body>
          <Right style={[styles.headerRight, {padding: 0}]}/>
        </Header>

      <Content style={{backgroundColor: "white", flex: 9}}>
          <View style={styles.BotsSection}>

            <View  style={{flex:1, backgroundColor: "#7CD1E9", borderColor: "#7CD1E9", alignSelf: "stretch"}}>
              <View style={styles.BotsifyHeaderRadius}>
                <Text style={styles.BotUsersText}>Bot Users</Text>
              </View>
            </View>
            <View style={{flex:9}}>
              <View style={styles.activeUsers}>
              <Text style={styles.activeUsersText}>Active Users</Text>
              <View style={{}}>
                <View style={{flexDirection: "row", paddingLeft: 15, paddingRight:15}}>
                  <View style={{flex:1, marginBottom: 15}} >
                    <Image source={avatar} style = {styles.userImage}/>
                    <Text style={styles.usernameText}> Jon</Text>
                  </View>
                  <View style={{flex:1, marginBottom: 15}} >
                    <Image source={avatar} style = {styles.userImage}/>
                    <Text style={styles.usernameText}> Steven</Text>
                  </View>
                  <View style={{flex:1, marginBottom: 15}} >
                    <Image source={avatar} style = {styles.userImage}/>
                    <Text style={styles.usernameText}> Roger</Text>
                  </View>
                  <View style={{flex:1, marginBottom: 15}} >
                    <Image source={avatar} style = {styles.userImage}/>
                    <Text style={styles.usernameText}> Mark</Text>
                  </View>
                  <View style={{flex:1, marginBottom: 15}} >
                    <Image source={avatar} style = {styles.userImage}/>
                    <Text style={styles.usernameText}> Stanley</Text>
                  </View>
                </View>
              </View>
              </View>


              

              <View style={{flex: 8}}>
                <Text style={styles.chatUsersText}>Chat Users</Text>
              <View style={styles.chatStrip}>
                <Image source={avatar} style = {styles.chatImage}/>
                <Text>Helloo</Text>
              </View>
              <View style={styles.chatStrip}>
                <Image source={avatar} style = {styles.chatImage}/>
                <Text>Helloo</Text>
                
              </View>
              
              </View>
            </View>
        </View>
      </Content>
      <FlatList
        data={[{key: "a"}, {key: "b"}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </Container>

       
    );
  }
}