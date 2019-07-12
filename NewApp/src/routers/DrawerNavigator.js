import React from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../containers/SidebarContainer";
import Home from "../containers/HomeContainer";
import Modal from "../containers/ModalContainer";
import UserList from "../containers/ListContainer";
import Chat from "../containers/ChatContainer";

export default createDrawerNavigator(
  {
    Home: { screen: Home },
    Modal: { screen: Modal },
    UserList: { screen: UserList },
    Chat : {screen: Chat}
  },
  {
    initialRouteName: "Home",
    //contentComponent: props => <SideBar {...props} />
  }
);
