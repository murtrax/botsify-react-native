import React, { Component } from "react";
import UserList from "../../components/UserList";

export default class ListContainer extends Component {
  render() {
    return (
      <UserList navigation={this.props.navigation}/>
    );
  }
}
