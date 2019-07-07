import React, { Component } from "react";
import {  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { View,StatusBar,TouchableOpacity,TouchableHighlight,Image,ScrollView } from "react-native";
import styles from "./styles";
import {BoxShadow} from 'react-native-shadow'   
const headerlogo = require('../../../assets/headerlogo.png');
const Avatar = require('../../../assets/default-avatar.png');
const imgA = require('../../../assets/1.jpg');
const imgB = require('../../../assets/2.jpg');
const imgC = require('../../../assets/3.jpg');
export default class BotDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
        };
  }
    chathistory() {
      this.props.navigation.navigate("MyChat")
  }
  render() {
        const shadowOpt = {
            height:45,
            color:"#000000",
            border:8,
            radius:8,
            opacity:0.1,
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
                            <Text style={styles.YourBotText}>Bot Users</Text>
                        </View>
                    </View>
                </View>
                <Content>
                        <View style={{backgroundColor:'#F5F5F5',paddingVertical: 15}}>
                            <View style={{marginLeft:10,flex:1,paddingVertical: 5}}>
                                <Text style={styles.minHeading}>
                                    Active Users
                                </Text>
                            </View>
                            <View style={{paddingVertical:15,paddingHorizontal:15}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    >
                                    <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                        <TouchableOpacity style={{
                                            height: 65,
                                            width: 65,
                                            borderColor: '#7CD1E9',
                                            borderWidth: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                            alignSelf: 'center',
                                            borderRadius: 65/2
                                          }}
                                            onPress={() => this.chathistory()}
                                        >
                                            <Image  source={imgA} style={styles.itemThreeeImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.activetext}>User 1</Text>
                                    </View>
                                    <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                        <TouchableOpacity style={{
                                            height: 65,
                                            width: 65,
                                            borderColor: '#7CD1E9',
                                            borderWidth: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                            alignSelf: 'center',
                                            borderRadius: 65/2
                                          }}
                                            onPress={() => this.chathistory()}
                                        >
                                            <Image  source={imgB} style={styles.itemThreeeImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.activetext}>User 1</Text>
                                    </View>
                                    <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                        <TouchableOpacity style={{
                                            height: 65,
                                            width: 65,
                                            borderColor: '#7CD1E9',
                                            borderWidth: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                            alignSelf: 'center',
                                            borderRadius: 65/2
                                          }}
                                            onPress={() => this.chathistory()}
                                        >
                                            <Image  source={imgC} style={styles.itemThreeeImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.activetext}>User 1</Text>
                                    </View>
                                    <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                        <TouchableOpacity style={{
                                            height: 65,
                                            width: 65,
                                            borderColor: '#7CD1E9',
                                            borderWidth: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                            alignSelf: 'center',
                                            borderRadius: 65/2
                                          }}
                                            onPress={() => this.chathistory()}
                                        >
                                            <Image  source={imgA} style={styles.itemThreeeImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.activetext}>User 1</Text>
                                    </View>
                                    <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                        <TouchableOpacity style={{
                                            height: 65,
                                            width: 65,
                                            borderColor: '#7CD1E9',
                                            borderWidth: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                            alignSelf: 'center',
                                            borderRadius: 65/2
                                          }}
                                            onPress={() => this.chathistory()}
                                        >
                                            <Image  source={imgB} style={styles.itemThreeeImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.activetext}>User 1</Text>
                                    </View>
                                    <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                        <TouchableOpacity style={{
                                            height: 65,
                                            width: 65,
                                            borderColor: '#7CD1E9',
                                            borderWidth: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                            alignSelf: 'center',
                                            borderRadius: 65/2
                                          }}
                                            onPress={() => this.chathistory()}
                                        >
                                            <Image  source={imgC} style={styles.itemThreeeImage} />
                                        </TouchableOpacity>
                                        <Text style={styles.activetext}>User 1</Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{marginLeft:15,flex:1,paddingVertical: 10}}>
                            <Text style={styles.chathistory}>
                                Chat History
                            </Text>
                        </View>
                        <View>
                             <ScrollView style={styles.scrollcontainer} contentContainerStyle={{ paddingBottom: 20 }}>
                                <View style={styles.itemWhiteBox}>
                                      <TouchableHighlight
                                        underlayColor='transparent'
                                        style={styles.highlightBox}
                                        onPress={this.props.onPressButton}
                                      >
                                    <View style={styles.listItemBox}>
                                      <View style={styles.leftCol}>
                                        <View style={styles.avatar}>
                                          <Image
                                            source={imgA}
                                            style={{width: 60, height: 60,borderRadius: 60 / 2}}
                                          /> 
                                        </View>
                                        <View style={[styles.info,{marginLeft: 5}]}>
                                          <Text style={[
                                            styles.itemHeaderText,
                                            styles.blackColor,
                                            styles.mediumBold
                                          ]}>
                                            Alex
                                          </Text>
                                          <Text style={[
                                            styles.shortSmallText,
                                             styles.blackColor,
                                            styles.regularBold,
                                          ]}>
                                            Hello how are you?
                                          </Text>
                                        </View>
                                      </View>
                                      <View style={styles.rightCol}>
                                        <View style={styles.ranking}>
                                          <Text style={[
                                               styles.timeSmallText,
                                            styles.lightgreyColor,
                                            styles.regularBold,
                                            {marginTop: -6, marginLeft: 2}
                                          ]}>
                                            11:36 pm
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </TouchableHighlight>
                                </View>
                                <View style={styles.itemWhiteBox}>
                                      <TouchableHighlight
                                        underlayColor='transparent'
                                        style={styles.highlightBox}
                                        onPress={this.props.onPressButton}
                                      >
                                    <View style={styles.listItemBox}>
                                      <View style={styles.leftCol}>
                                        <View style={styles.avatar}>
                                          <Image
                                            source={imgB}
                                            style={{width: 60, height: 60,borderRadius: 60 / 2}}
                                          /> 
                                        </View>
                                        <View style={[styles.info,{marginLeft: 5}]}>
                                          <Text style={[
                                            styles.itemHeaderText,
                                            styles.blackColor,
                                            styles.mediumBold
                                          ]}>
                                            Alex
                                          </Text>
                                          <Text style={[
                                            styles.shortSmallText,
                                             styles.blackColor,
                                            styles.regularBold,
                                          ]}>
                                            Hello how are you?
                                          </Text>
                                        </View>
                                      </View>
                                      <View style={styles.rightCol}>
                                        <View style={styles.ranking}>
                                          <Text style={[
                                               styles.timeSmallText,
                                            styles.lightgreyColor,
                                            styles.regularBold,
                                            {marginTop: -6, marginLeft: 2}
                                          ]}>
                                            11:36 pm
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </TouchableHighlight>
                                </View>
                                <View style={styles.itemWhiteBox}>
                                      <TouchableHighlight
                                        underlayColor='transparent'
                                        style={styles.highlightBox}
                                        onPress={this.props.onPressButton}
                                      >
                                    <View style={styles.listItemBox}>
                                      <View style={styles.leftCol}>
                                        <View style={styles.avatar}>
                                          <Image
                                            source={imgB}
                                            style={{width: 60, height: 60,borderRadius: 60 / 2}}
                                          /> 
                                        </View>
                                        <View style={[styles.info,{marginLeft: 5}]}>
                                          <Text style={[
                                            styles.itemHeaderText,
                                            styles.blackColor,
                                            styles.mediumBold
                                          ]}>
                                            Alex
                                          </Text>
                                          <Text style={[
                                            styles.shortSmallText,
                                             styles.blackColor,
                                            styles.regularBold,
                                          ]}>
                                            Hello how are you?
                                          </Text>
                                        </View>
                                      </View>
                                      <View style={styles.rightCol}>
                                        <View style={styles.ranking}>
                                          <Text style={[
                                               styles.timeSmallText,
                                            styles.lightgreyColor,
                                            styles.regularBold,
                                            {marginTop: -6, marginLeft: 2}
                                          ]}>
                                            11:36 pm
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  </TouchableHighlight>
                                </View>
                            </ScrollView>
                        </View>
              </Content>
          </Container>
    );
  }
}
