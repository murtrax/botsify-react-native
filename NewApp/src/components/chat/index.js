import React, { Component } from "react";
import { Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content, Alert} from "native-base";
import { StatusBar , View, Image, SectionList, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight} from "react-native";
import styles from "./styles";
//import { List, ListItem } from "react-native-elements";

const avatar = require("../../../assets/avatar2.png");

export default class Chat extends Component {

  state = {
    chatStrip : {marginLeft: 25,
      marginRight: 25,
      marginBottom: 5,
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: "row",}
  }

  shadow = () => {
    this.setState({
      chatStrip: {shadowColor: "#000",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,      
      marginLeft: 25,
      marginRight: 25,
      marginBottom: 5,
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: "row", }}
    )
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




              <SectionList
                renderItem={({item, index, section}) =>  <View><TouchableHighlight onPress = {()=> this.shadow()}>
                  <View style={this.state.chatStrip}>
                <Image source={avatar} style = {styles.chatImage}/>
                <View>
                <Text style= {styles.usernameChat}>Roger</Text>
                <Text key={index} style= {styles.chatText}>{item}{index}</Text>
                </View>
                <View style={{alignItems: "center"}}>
                <Text style={styles.timeText}> 11:57am</Text>
                </View>
                
              </View>
              </TouchableHighlight>
              <View style={{
                borderBottomColor: "black",
                borderBottomWidth: 1, flexDirection: "column", marginLeft: 110, marginRight: 40
              }}
            />
              </View>

            }
                renderSectionHeader={({section: {title}}) => (
                  <Text style={styles.chatUsersText}>Chat Users</Text>
                )}
                sections={[
                  {title: "Title1", data: ["Roger", "What Are You Doing ?"],
                  title1 : "Title2", data1: ["Roger", "What Are You Doing ?"]},
                ]}
                keyExtractor={(item, index) => item + index}
              />
     
             { /*<View style={{flex: 8}}>
                <Text style={styles.chatUsersText}>Chat Users</Text>
              <View style={styles.chatStrip}>
                <Image source={avatar} style = {styles.chatImage}/>
                <Text>Helloo</Text>
              </View>
              <View style={styles.chatStrip}>
                <Image source={avatar} style = {styles.chatImage}/>
                <Text>Helloo</Text>
                
              </View>
              
              </View>*/ }


            </View>
        </View>
      </Content>
      </Container>

       
    );
  }
}
