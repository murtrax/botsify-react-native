import React, { Component } from "react";
import Chatting from "../../components/Chatting";

export default class chattingContainer extends Component {

  render() {
    return (
      <Chatting navigation={this.props.navigation}/>
    );
  }
}