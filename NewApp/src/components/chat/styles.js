export default {
    container: {
      flex: 1,
    },
    headerLeft: {
      flex: 0.3,
      backgroundColor: "#7CD1E9",
      alignSelf: "stretch",
    },
    headerBody: {
      flex: 0.4,
      backgroundColor: "#7CD1E9",
      alignSelf: "stretch", 
    },
    textBody:{
      alignSelf: "center",
    },
    headerRight: {
      flex: 0.3,
      backgroundColor: "#7CD1E9",
      alignSelf: "stretch",
    },
    BotsifyHeaderText: {
      alignSelf: "center",
      marginTop: 5,
      marginBottom: 10,
      fontSize: 27,
      color: "white",
      fontWeight: "bold",
      fontFamily: "sans-serif-thin"
    },
    BotsifyHeader: {
      flex: 1,
      backgroundColor: "#7CD1E9",
    },
    BotsifyHeaderRadius:{
        flex: 1,
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19, 
        backgroundColor: "#FFFFFF",
      },
      BotUsersText:{
        textAlign: "left",
        paddingLeft: 25,
        marginTop: 25,
        marginBottom: 25,
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "sans-serif-light",
      },

      BotsSection:{
        flex: 1,
        borderRadius: 14,
        borderTop: 12,
        backgroundColor: "white",
        alignSelf: "stretch",
        //flexDirection: "column",
      },

      activeUsers:
      {
        backgroundColor: "#f2f2f2",
        flex:2,
        alignSelf: "stretch",
      },

      activeUsersText:
      {
        color: "#626f78",
        fontSize: 18,
        marginLeft: 25,
        marginTop: 15,
        marginBottom: 10,
        fontWeight: "bold",
      },

      userImage: {
      margin: 13,
      height: 55,
      width: 55,
      borderColor: "#7CD1E9",
      borderWidth: 2,
      marginBottom: 0,
      borderRadius: 55 / 2
      },

      usernameText:{
        alignSelf: "center",
        margin: 0,
        padding: 0,
        textAlign: "center",
        fontSize: 14

      },

      chatUsersText:
      {
        color: "black",
        fontSize: 20,
        marginLeft: 25,
        marginTop: 25,
        marginBottom: 10,
        fontWeight: "bold",
      },

      chatStrip: {
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 5,
        borderColor: "black",
        borderWidth: 0,
        borderRadius: 4,
        flexDirection: "row",
      },

      chatImage: {
        margin: 13,
        height: 55,
        width: 55,
        borderColor: "#7CD1E9",
        borderWidth: 2,
        marginBottom: 13,
        borderRadius: 55 / 2,
        },

        sectionHeader: {
          paddingTop: 2,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 2,
          color: "black",
          fontSize: 20,
          marginLeft: 25,
          marginTop: 25,
          marginBottom: 10,
          fontWeight: "bold",
          backgroundColor: "white",
      },
      item: {
          padding: 10,
          fontSize: 18,
          height: 44,
      }, 

      usernameChat: {
        color: "black",
        fontSize: 15,
        marginLeft: 5,
        marginTop: 10,
        fontWeight: "bold",
        flexDirection: "row",
      },

      chatText:{
        color: "black",
        fontSize: 15,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 5,
        flexDirection: "row",
      },

      timeText:{
        color: "#626f78",
        fontSize: 11,
        textAlign: "right",
        marginRight: 10,
        marginTop: 10,
        marginBottom: 5,
        alignSelf: "stretch"
      }
  };