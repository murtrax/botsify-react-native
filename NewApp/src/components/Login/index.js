import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { Container, Content, Button, Text, View ,Header,Body} from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./styles";

const headerlogo = require('../../../assets/headerlogo.png');

export default class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar hidden={true}/>
        <Spinner visible={this.props.loading}/>
        <Header
              noShadow
              iosBarStyle={"dark-content"}
              androidStatusBarColor={"#fff"}
              style={{ borderBottomWidth: 0,backgroundColor:'#7CD1E9',height:170 }}>
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
                        
                     </View>
                </View>
            </View>
        <Content style={styles.content}>
         
          <View style={styles.containerForm}>
        <Text style={styles.YourBotText}>Login to continue</Text>
            <View style={styles.contentForm}>
              {this.props.loginForm}
              <Button block onPress={() => this.props.onLogin()} style={[styles.buttonLogin,{backgroundColor:'#7CD1E9'}]}>
                <Text uppercase={false} style={styles.textLogin}>Login</Text>
              </Button>
            </View>
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{marginTop:10,fontSize:20,fontWeight:'bold',alignItems: 'center'}}>
                    OR
                </Text>
                <Button block onPress={() => this.props.onLogin()} style={[styles.buttonLoginFB,{backgroundColor:'#3b5998'}]}>
                <Text uppercase={false} style={styles.textLogin}>Login with Facebook</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
