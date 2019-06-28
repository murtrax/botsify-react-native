import React, { Component } from "react";
import BotDetail from "../../components/BotDetail";

export default class BotDetailContainer extends Component {
  render() {
    return (
      <BotDetail navigation={this.props.navigation}/>
    );
  }
}

