import React, { Component } from "react";
import { Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content, Alert} from "native-base";
import { StatusBar , View, Image, SectionList, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight} from "react-native";
import styles from "./styles";
import { GiftedChat } from "react-native-gifted-chat"

const avatar = require("../../../assets/avatar2.png");

export default class Chatting extends Component {


  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),

          user: {
            _id: 2,
            name: "React Native",
            avatar: avatar,
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
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
          <Text style={styles.BotsifyHeaderText} >Roy</Text>
          </Body>
          <Right style={[styles.headerRight, {padding: 0}]}/>
        </Header>
        <View  style={{flex:1, backgroundColor: "#7CD1E9", borderColor: "#7CD1E9", alignSelf: "stretch"}}>
              <View style={styles.BotsifyHeaderRadius}>
              <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                    _id: 1,
                    }}
                />
              </View>
            </View>
      </Container>
    )
  }
}