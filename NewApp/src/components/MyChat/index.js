import React, { Component } from "react";
import {  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { View,StatusBar,TouchableOpacity,Image,ScrollView,TextInput } from "react-native";
import styles from "./styles";
import { GiftedChat } from 'react-native-gifted-chat'
const Avatar = require('../../../assets/default-avatar.png');
export default class MyChat extends Component {
        constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          messages: [
              {
          _id: 2,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
          {
          _id: 3,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
          ],
        };
  }
    componentWillMount() {
    this.setState({
      messages: [
        
         
         
          
          {
          _id: 6,
          text: 'How are you?',
          createdAt: new Date(),
          user: {
            _id: 1
          },
        },
           {
          _id: 5,
          text: 'Great',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
           {
          _id: 4,
          text: 'I am Good',
          createdAt: new Date(),
          user: {
            _id: 1
          },
        },
          {
          _id: 3,
          text: 'How Are You?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
         image: 'https://facebook.github.io/react/img/logo_og.png',
        },
           {
          _id: 2,
          text: 'Hi',
          createdAt: new Date(),
          user: {
            _id: 1
          },
        },
          {
          _id: 1,
          text: 'Hello',
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
    onChangeText(){
        
    }
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
            <Header
              noShadow
              iosBarStyle={"dark-content"}
              androidStatusBarColor={"#fff"}
               style={{ borderBottomWidth: 0,backgroundColor:'#7CD1E9' }}>
                <Left style={styles.headerLeft}>
                </Left>
                <Body style={styles.headerBody}>
                    <Title style={styles.textBody}>User 1</Title>
                  </Body>
                  <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                          <Icon name="menu" style={{ color: "#000" }}/>
                        </Button>
                </Right>
            </Header>
            <View style={styles.BotsSection}>
                <View  style={{flex:1, backgroundColor: "#7CD1E9"}}>
                    <View style={styles.CurveHeaderRadius}>        
                    </View>
                </View>
            </View>
            <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
      </Container>
    );
  }
}
