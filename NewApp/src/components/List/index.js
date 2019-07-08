import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
const logo = require("../../../assets/chat2.png");
const arrow = require("../../../assets/back.png");
const avatar = require("../../../assets/avatar.png");
import {DrawerItems} from "react-native";
import { Image, View, TouchableOpacity } from "react-native";

export default class List extends React.Component
{
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (

      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      );
  }
}
