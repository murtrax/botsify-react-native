import React, { Component } from "react";
import {  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { View,StatusBar,TouchableOpacity,Image,ScrollView } from "react-native";
import styles from "./styles";
const Avatar = require('../../../assets/default-avatar.png');
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
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
          style={{ borderBottomWidth: 0,backgroundColor:'#7CD1E9' }}>
          <Body style={styles.headerBody}>
          <Title style={styles.textBody}>Botsify</Title>
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
                        <TouchableOpacity
                          onPress={() => this.botdetail()}
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 8</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 10</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.item}>
                            <Image
                                resizeMode="contain"
                                source={Avatar}
                                style={styles.itemImage}
                              />
                            <Text style={styles.itemText}>Bot 12</Text>
                        </TouchableOpacity>
                    </View>
                            </Content>                        
      </Container>
    );
  }
}
