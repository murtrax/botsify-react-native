import React, { Component } from "react";
import {  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { View,StatusBar,TouchableOpacity,Image,ScrollView } from "react-native";
import styles from "./styles";
const Avatar = require('../../../assets/default-avatar.png');
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
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
            <Header
              noShadow
              iosBarStyle={"dark-content"}
              androidStatusBarColor={"#fff"}
              style={[styles.curvyheader,{ borderBottomWidth: 0,backgroundColor:'#7CD1E9' }]}>
              <Body style={styles.headerBody}>
              <Title style={styles.textBody}>Bot Detail</Title>
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
                        <View style={{marginLeft:10,flex:1,paddingVertical: 10}}>
                            <Text style={styles.minHeading}>
                                Active Users
                            </Text>
                        </View>
                        <View style={{paddingVertical:20}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                    <TouchableOpacity style={{
                                        height: 80,
                                        width: 80,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        alignSelf: 'center',
                                        borderRadius: 80/2
                                      }}
                                        onPress={() => this.chathistory()}
                                    >
                                        <Image  source={Avatar} style={styles.itemThreeeImage} />
                                    </TouchableOpacity>
                                    <Text style={[styles.activetext,{justifyContent: 'center',
                                    textAlign: 'center',fontSize:14,fontWeight:'bold'}]}>User 1</Text>
                                </View>
                                <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                    <TouchableOpacity style={{
                                        height: 80,
                                        width: 80,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        alignSelf: 'center',
                                        borderRadius: 80/2
                                      }}
                                    >
                                        <Image  source={Avatar} style={styles.itemThreeeImage} />
                                    </TouchableOpacity>
                                     <Text style={[styles.activetext,{justifyContent: 'center',
                                    textAlign: 'center',fontSize:14,fontWeight:'bold'}]}>User 2</Text>
                                </View>
                                <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                    <TouchableOpacity style={{
                                        height: 80,
                                        width: 80,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        alignSelf: 'center',
                                        borderRadius: 80/2
                                      }}
                                    >
                                        <Image  source={Avatar} style={styles.itemThreeeImage} />
                                    </TouchableOpacity>
                                    <Text style={[styles.activetext,{justifyContent: 'center',
                                    textAlign: 'center',fontSize:14,fontWeight:'bold'}]}>User 3</Text>
                                </View>
                                <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                    <TouchableOpacity style={{
                                        height: 80,
                                        width: 80,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        alignSelf: 'center',
                                        borderRadius: 80/2
                                      }}
                                    >
                                        <Image  source={Avatar} style={styles.itemThreeeImage} />
                                    </TouchableOpacity>
                                     <Text style={[styles.activetext,{justifyContent: 'center',
                                    textAlign: 'center',fontSize:14,fontWeight:'bold'}]}>User 4</Text>
                                </View>
                                <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                    <TouchableOpacity style={{
                                        height: 80,
                                        width: 80,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        alignSelf: 'center',
                                        borderRadius: 80/2
                                      }}
                                    >
                                        <Image  source={Avatar} style={styles.itemThreeeImage} />
                                    </TouchableOpacity>
                                     <Text style={[styles.activetext,{justifyContent: 'center',
                                    textAlign: 'center',fontSize:14,fontWeight:'bold'}]}>User 5</Text>
                                </View>
                                <View style={{backgroundColor: 'transparent', marginLeft:15}} >
                                    <TouchableOpacity style={{
                                        height: 80,
                                        width: 80,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        alignSelf: 'center',
                                        borderRadius: 80/2
                                      }}
                                    >
                                        <Image  source={Avatar} style={styles.itemThreeeImage} />
                                    </TouchableOpacity>
                                     <Text style={[styles.activetext,{justifyContent: 'center',
                                    textAlign: 'center',fontSize:14,fontWeight:'bold'}]}>User 6</Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.itemThreeHrBotDetail} />
                        <View style={{marginLeft:10,flex:1,paddingVertical: 10}}>
                            <Text style={styles.minHeading}>
                                Chat History
                            </Text>
                        </View>
                        <View>
                             <ScrollView style={styles.scrollcontainer} contentContainerStyle={{ paddingBottom: 20 }}>
                                <View>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 1</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 2</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 3</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 4</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 5</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 6</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 7</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 8</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 9</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 10</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                    style={styles.itemThreeContainer} >
                                        <View style={styles.itemContailner}>
                                            <View style={styles.itemThreeSubContainer}>
                                                <Image  source={Avatar} style={styles.itemThreeImage} />
                                                    <View style={styles.itemThreeContent}>
                                                        <View style={{marginTop:10}}>
                                                            <Text style={styles.itemThreeTitle}>User 11</Text>
                                                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                                                Users Last Messages....
                                                            </Text>
                                                        </View>
                                                    </View>
                                            </View>
                                        </View>
                                        <View style={styles.itemThreeHr} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
              </Content>
          </Container>
    );
  }
}
