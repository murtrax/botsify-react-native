import { createSwitchNavigator } from "react-navigation";
import App from "./AppNavigator";
import Loading from "../containers/LoadingContainer";
import Login from "../containers/LoginContainer";
import Chat from "../containers/ChatContainer";

export default createSwitchNavigator(
  {
    Loading: Loading,
    App: App,
    Login: Login,
    Chat: Chat
  },
  {
    initialRouteName: "Loading"
  }
);
