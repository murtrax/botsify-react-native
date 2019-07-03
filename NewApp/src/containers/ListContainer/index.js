import React, { Component } from "react";
import List from "../../components/List";

export default class ListContainer extends Component {
  render() {
    return (
      <List navigation={this.props.navigation}/>
    );
  }
}
