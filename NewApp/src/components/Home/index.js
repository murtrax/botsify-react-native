import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";
import { Image, View, TouchableOpacity } from "react-native";

const robot = require("../../../assets/robot.png");
const logo = require("../../../assets/chat2.png");

export default class Home extends Component {

  state = {
      isLoading: true,
      isLoading1: true,
      dataSource: [],
      dataSource2: [],
      in: "stage0"
    };

    constructor(props)
    {
      super(props);

    };

    onList()
    {
      this.props.navigation.navigate('UserList')
    };

    componentDidMount()
    {
      this.fetchToken();

      this.fetchBots();
    }



    fetchToken = async () => {

      let formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("client_id", 19);
    formData.append("client_secret", "S6IlYpLGaI4q0fCv8u32q96cpuTAGwGm5bhJNyZm");
    formData.append("username", "saad.rawasia15@live.com");
    formData.append("password", "test1234");
    formData.append("scope", "");

    await fetch("https://dev.botsify.com/oauth/token", {
        method: "POST",

    body: formData,
  })

  .then((response) => response.json() )
  .then((responseJson) => {
    console.log("First Stage");
    console.log(responseJson);
    if (responseJson != null)
    {

  this.setState({
    isLoading: false,
    isLoading1: true,
    dataSource: responseJson.access_token,
    in: "stage1",
    dataSource2: []
  });
    }
    }).catch(error => {
      console.log(error);});
    }



    fetchBots = async()=>{
  await fetch("https://dev.botsify.com/api/v1/get-bots", {
    method: "post",
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer " + this.state.dataSource

    }
  })


  .then((response) => response.json() )
  .then((responseJson) => {
    console.log("Second Stage");
    console.log(responseJson);
    console.log(responseJson.bots);
    access = this.state.dataSource;
  this.setState({
    isLoading: false,
    isLoading1: false,
    dataSource2: responseJson.bots,
    in: "stage2"
  });

  }).catch(error => {
    console.log(error);});

  }

  render() {
    state = {
        isLoading: true,
        isLoading1: true,
        dataSource: [],
        dataSource2: [],
        in: "stage0"
      };

    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          BarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}

          style={{ borderBottomWidth: 0, backgroundColor: "#7CD1E9", paddingLeft: 0, paddingRight:0}}>
          <Left style={styles.headerLeft}>
          <Button  transparent onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" style={{ color: "#000",}}/>
          </Button>
          </Left>
          <Body style={styles.headerBody}>
            <Image style= {styles.chat2}
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
          <TouchableOpacity style= {styles.bot1} onPress={()=> this.onList()}>
            <Image style={styles.img1}
            source={robot}></Image>
            <Text style= {styles.imgText1}>Bot1</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bot2}  onPress={()=> this.onList()}>
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

          <TouchableOpacity style = {styles.bot4} onPress={() => this.onList()}>
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

          <TouchableOpacity style = {styles.bot6} onPress={() => this.onList()}>
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
