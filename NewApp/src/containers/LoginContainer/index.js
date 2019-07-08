import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Alert } from "react-native";
import { Item, Input, Toast, Form } from "native-base";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Login from "../../components/Login";
import { userLoginSuccess, userLoginFail } from "../../actions";
import { emailFormat, required, alphaNumeric } from "./validators";
import styles from  "./styles";

const lockIcon = require("../../../assets/icon/lock.png");
const mailIcon = require("../../../assets/icon/mail.png");

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentWillReceiveProps(nextProps, nextState){
    if (this.props.auth.isFailed !== nextProps.auth.isFailed){
      if (nextProps.auth.isFailed && !nextProps.auth.isAuthenticating){
        let message = nextProps.auth.error;
        setTimeout(() => {
          Alert.alert("",message);
        }, 100);
      }
    }

    if (this.props.auth.token !== nextProps.auth.token){
      if (nextProps.auth.token){
        this.props.navigation.navigate("App");
      }
    }
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Item error={error && touched} style={styles.itemForm}>
        <Image source={input.name === "email" ? mailIcon : lockIcon}/>
        <Input
          ref={c => (this.textInput = c)}
          placeholder={input.name === "email" ? "Email" : "Password"}
          secureTextEntry={input.name === "password"}
          {...input}
          style={styles.inputText}
          keyboardType={input.name === "email" ? "email-address" : "default"}
          autoCapitalize = "none"
        />
      </Item>
    );
  }
  authGet(response){
      let collection={}
        collection.username=response.status,
        collection.password=this.props.loginForm.values.password
      var url = 'https://dev.botsify.com/oauth/token'
       fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(collection), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
           .then(response => { 
           console.log('response')
           console.log(response)
               this.props.navigation.navigate("BotDetail")
               
           console.log('response')
       })
        .catch(error => console.error('Error:', error));
  }
  login() {
      this.props.navigation.navigate("Home")
//      console.log(this.props.loginForm.values)
//      let collection={}
//        collection.email=this.props.loginForm.values.email,
//        collection.password=this.props.loginForm.values.password
//      var url = 'https://dev.botsify.com/api/v1/login'
//       fetch(url, {
//        method: 'POST', // *GET, POST, PUT, DELETE, etc.
//        headers: {
//            'Content-Type': 'application/json',
//            // 'Content-Type': 'application/x-www-form-urlencoded',
//        },
//        body: JSON.stringify(collection), // body data type must match "Content-Type" header
//    })
//    .then(response => response.json())
//           .then(response => { 
//          this.authGet(response)
//       })
//        .catch(error => console.error('Error:', error));
//    }
//  onPressSwitch(){
//    let { counter } = this.state;
//    this.setState({
//      counter: counter + 1
//    }, () => {
//      if (this.state.counter === 8){
//        this.props.navigation.navigate("SwitchEnv");
//      }
//    });
  }

  render() {
    const form = (
      <Form>
        <Field
          name="email"
            style={styles.shadow}
          component={this.renderInput}
          validate={[emailFormat, required]}
        />
        <Field
          name="password"
        style={styles.shadow}
          component={this.renderInput}
          validate={[alphaNumeric, required]}
        />
      </Form>
    );
    return (
      <Login
        onPressSwitch={() => this.onPressSwitch()}
        navigation={this.props.navigation}
        loading={this.props.auth.isAuthenticating}
        loginForm={form}
        onLogin={() => this.login()}
      />
    );
  }
}

LoginForm.propTypes = {
  auth: PropTypes.object,
  loginForm: PropTypes.object,
  login: PropTypes.func
};

const LoginContainer = reduxForm({
  form: "login"
})(LoginForm);

const mapStateToProps = state => ({
  auth: state.auth,
  loginForm: state.form.login
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: ({ email, password }) => dispatch(userLoginSuccess({
    email,
    password,
  })),
  loginFail: ({ email, password }) => dispatch(userLoginFail({
    email,
    password,
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
