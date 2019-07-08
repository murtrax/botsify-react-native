import React, { Component } from "react";
import {  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { View,StatusBar,TouchableOpacity,Image,ScrollView ,TouchableHighlight} from "react-native";
import {BoxShadow} from 'react-native-shadow'
import styles from "./styles";
const Avatar = require('../../../assets/support.png');
const headerlogo = require('../../../assets/headerlogo.png');
export default class Home extends Component {
        constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
    botdetail() {
      this.props.navigation.navigate("BotDetail")
  }
  render() {
         const shadowOpt = {
            width:120,
            height:120,
            color:"#000000",
            border:8,
            radius:8,
            opacity:0.051,
            x:0,
            y:4,
            blur:14,
            style:{marginVertical:5,marginHorizontal:20}
        }
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
            <Header
              noShadow
              iosBarStyle={"dark-content"}
              androidStatusBarColor={"#fff"}
              style={{ borderBottomWidth: 0,backgroundColor:'#7CD1E9' }}>
                  <Body style={styles.headerBody}>
                        <Image
                            resizeMode="contain"
                            source={headerlogo}
                            style={styles.textBody}
                            />
                  </Body>
            </Header>
            <View style={styles.BotsSection}>
                <View  style={{flex:1, backgroundColor: "#7CD1E9"}}>
                    <View style={styles.CurveHeaderRadius}>
                        <Text style={styles.YourBotText}>Your Bots</Text>
                     </View>
                </View>
            </View>
            <Content>
                <View style={styles.row}>
                    <BoxShadow setting={shadowOpt}>
                        <TouchableOpacity
                            onPress={()=> this.botdetail()}
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 3</Text>
                        </TouchableOpacity>
                    </BoxShadow>
                    <BoxShadow setting={shadowOpt}>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 3</Text>
                        </TouchableOpacity>
                    </BoxShadow>
                </View>
                
            </Content>                        
      </Container>
    );
  }
}
