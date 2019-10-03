import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login/login.js'
import Conversationlist from './components/conversation/conversationlist'
import Chatscrn from './components/conversation/chatScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Search from './components/conversation/search.js';

// const AppStack = createStackNavigator(
// { 
//    ChatScreen: Chatscreen,
//    ConvList: Conversationlist 
// })
const TabNav = createBottomTabNavigator({ 
  Main: {
    screen: Conversationlist, navigationOptions: {
      title: 'Conversations'
    }},
  Srch: {screen: Search,
  navigationOptions: {
    title: 'search'
  }}
})
export default createAppContainer(createSwitchNavigator(
  {
    Auth: Login,
    ChatPage: Chatscrn, 
    ConvList: Conversationlist,
    TabRoute: TabNav
    // navigationOptions: {
    //   header: null
    // } 
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
     defaultNavigationOptions: {
        header: null
    }
  }
))

// export default function App() {
//   return (
//     <Chatscreen />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#aaa',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text:{
//     backgroundColor: 'red'
//   }
// });
