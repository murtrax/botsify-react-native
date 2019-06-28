import React, { Component } from "react";
import MyChat from "../../components/MyChat";

export default class MyChatContainer extends Component {
  render() {
    return (
      <MyChat navigation={this.props.navigation}/>
    );
  }
}

