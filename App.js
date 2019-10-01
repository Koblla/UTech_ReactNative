import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login/login.js'
import Conversationlist from './components/conversation/conversationlist'
import Chatscreen from './components/conversation/chatScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const AppStack = createStackNavigator(
{ 
   ChatScreen: Chatscreen,
   ConvList: Conversationlist 
})

export default createAppContainer(createSwitchNavigator(
  {
    Auth: Login,
    ChatScreen: Chatscreen,
    ConvList: Conversationlist 
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
