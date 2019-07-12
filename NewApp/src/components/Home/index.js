import React, { Component } from "react";
import { Header, Left, Container, Body, Title, Button, Right, Icon, Text, Content, } from "native-base";
import { StatusBar , View, Image, TouchableOpacity, ActivityIndicator, FlatList, Dimensions} from "react-native";
import styles from "./styles";

const avatar = require("../../../assets/avatar1.png");
var count = 0;
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
    //this.fetchBots = this.fetchBots.bind(this);
  }
  
  
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
    count = Object.keys(responseJson.bots).length;
  }).catch(error => {
    console.log(error);});

  }

 
  render() {

    if (this.state.isLoading === true || this.state.isLoading1 === true)
    {
      this.fetchBots(this.state.dataSource);
      return (
        <View>
        <ActivityIndicator/>
        <Text>Loading {this.state.in}{this.state.dataSource2.length} </Text>
        </View>
        
      )
    }

    else 
    {
      var data = this.state.dataSource2;
      var arrayBots = [];
      for (var i = 0; i < data.length; i = i + 2)
      {

        if ( i + 1 !== data.length)
        {
          arrayBots.push(
            <View style={styles.BotViewHorizontal}>
            <TouchableOpacity style={styles.BotViewLeft} onPress={() => this.props.navigation.navigate("Chat")}>
              <Image source={avatar} style = {styles.BotImage}/>
              <Text style={styles.BotNameText}>Bot {this.state.dataSource2[i].id}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.BotViewRight} onPress={() => this.props.navigation.navigate("Chat")}>
            <Image source={avatar} style = {styles.BotImage}/>
            <Text style={styles.BotNameText}>Bot {this.state.dataSource2[i + 1].id}</Text>
            </TouchableOpacity>
              </View>)
        }

        if (i + 1 === data.length)
        {
          arrayBots.push(
            <View style={styles.BotViewHorizontal}>
          <TouchableOpacity style={styles.BotViewLeft} onPress={() => this.props.navigation.navigate("Chat")}>
            <Image source={avatar} style = {styles.BotImage}/>
            <Text style={styles.BotNameText}>Bot {this.state.dataSource2[i].id}</Text>
            </TouchableOpacity>
            </View>)
           
        }
         }

     
      return (

        <Container style={styles.container}>
        <StatusBar translucent={false} />
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#7CD1E9"}
          style={{ borderBottomWidth: 0 ,  alignSelf: "stretch", paddingLeft: 0, paddingRight: 0, borderColor: "#7CD1E9"}}>
          <Left style={[styles.headerLeft, {padding: 0}]}>
            <Button  transparent onPress={() => this.props.navigation.openDrawer()}>
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
            
            
              {arrayBots}
              
              
            </View>
          </View>

        </View>
        </Content>
      </Container>
    );
      
    }

























    {/*

 else 
 {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false} />
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#7CD1E9"}
          style={{ borderBottomWidth: 0 ,  alignSelf: "stretch", paddingLeft: 0, paddingRight: 0, borderColor: "#7CD1E9"}}>
          <Left style={[styles.headerLeft, {padding: 0}]}>
            <Button  transparent onPress={() => this.props.navigation.openDrawer()}>
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
    ); } */}
  }
}
