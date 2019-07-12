import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";

//import images from "./Home/images";
import { Image, View, TouchableOpacity} from "react-native";
import {SectionList, List, ListItem} from 'react-native-elements';

const robot = require("../../../assets/robot.png");
const logo = require("../../../assets/chat2.png");
const arrow = require("../../../assets/back.png");
const search = require("../../../assets/search.png");
const avatar = require("../../../assets/avatar.png");

export default class UserList extends Component {
constructor(props)
{
  super(props);
  this.state={
    data: [{
    name1: 'Damon Salvatore',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'

  },
  {
    name2: 'Connor Walsh',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

  },
  {
    name2: 'Chris Evans',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

  },
  {
    name2: 'Michael Scofield',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'

  },
]
  }
}

  onHome()
  {
    this.props.navigation.navigate('Home')
  };

  onChat()
  {
    this.props.navigation.navigate('Chat')
  };

  render() {
    const list = this.state.data;
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          BarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}

          style={{ borderBottomWidth: 0, backgroundColor: "#7CD1E9", paddingLeft: 0, paddingRight:0}}>
          <Left style={styles.headerLeft}>
              <TouchableOpacity onPress={() => this.onHome()}>
              <Image source = {arrow} style = {styles.backArrow}></Image>
              </TouchableOpacity>
          </Left>
          <Body style={styles.headerBody}>
            <Image style= {styles.chat2}
              source = {logo}>
            </Image>
            <Title style={styles.textBody}>Botsify</Title>
          </Body>
          <Right style={styles.headerRight}>
            <TouchableOpacity onPress={() => this.onList()}>
            <Image source = {search} style = {styles.search}></Image>
            </TouchableOpacity>
          </Right>
        </Header>

        <Content>
        <View style = {styles.outerContainer}>
          <View style = {styles.innerContainer}>

            <View style = {styles.botUser}>
              <Text style = {styles.botUserText}>Bot Users</Text>
            </View>

            <View style = {styles.activeUserView}>
              <View style = {styles.activeUser}>
                <Text style = {styles.activeUserText}>Active Users</Text>
              </View>


              <View style = {styles.userImagesRow}>
              {
                list.map((l) => (
                  <View style = {styles.viewImage1}>
                        <Image source = {avatar} style = {styles.userImage1}></Image>
                        <Text style = {styles.userText1}>Bob</Text>
                  </View>
                    ))
                }
              </View>
              </View>

              <View>
                <Text style = {styles.chatUsersText}>Chat Users</Text>
              </View>


              <View style = {styles.userImagesColumn}>
              {
                list.map((l) => (
                  <TouchableOpacity onPress={() => {this.onChat();}}>
                    <View style = {styles.viewImage}>
                      <View style = {styles.imageView}>
                          <Image source = {avatar} style = {styles.userImage}></Image>
                      </View>
                    </View>

                    <View style = {styles.userTextView}>
                        <Text style = {styles.userText}>User 1</Text>
                        <Text style = {styles.userLastText}>Okay.. see you!</Text>
                    </View>

                    <View style = {styles.userLastTimeView}>
                       <Text style = {styles.userTime}>1:02 PM</Text>
                    </View>

                  </TouchableOpacity>
                    ))
                }
              </View>




            </View>
            </View>
            </Content>
        </Container>
      );
    }
  }
