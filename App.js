import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login/login.js'
import Conversationlist from './components/conversation/conversationlist'
import Chatscreen from './components/conversation/chatScreen'

export default function App() {
  return (
    <Chatscreen />
  );
}

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
