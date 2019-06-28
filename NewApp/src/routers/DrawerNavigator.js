import React from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../containers/SlidebarContainer";
import Home from "../containers/HomeContainer";
import Modal from "../containers/ModalContainer";
import BotDetail from "../containers/BotDetailContainer";
import MyChat from "../containers/MyChatContainer";

export default createDrawerNavigator(
  {
    Home: { screen: Home },
    Modal: { screen: Modal },
    BotDetail: { screen: BotDetail },
    MyChat: { screen: MyChat },
  },
  {
    initialRouteName: "Home",
      drawerPosition:'right',
      drawerType:'slide',
    contentComponent: props => <SideBar {...props} />
  }
);
