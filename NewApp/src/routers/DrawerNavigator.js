import React from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../containers/SlidebarContainer";
import Home from "../containers/HomeContainer";
import Modal from "../containers/ModalContainer";
import List from "../containers/ListContainer";

export default createDrawerNavigator(
  {
    Home: { screen: Home },
    Modal: { screen: Modal },
    List: { screen: List }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <SideBar {...props} />
  }
);
