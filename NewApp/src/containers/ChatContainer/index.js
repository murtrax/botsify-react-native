import React, { Component } from "react";
import Chat from "../../components/Chat";

export default class ChatContainer extends Component {
  render() {
    return (
      <Chat navigation={this.props.navigation}/>
    );
  }
}
