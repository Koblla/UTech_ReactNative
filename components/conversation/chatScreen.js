import React from 'react'
import { ScrollView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'
import Footer from './footer'
import Messagebox from './messagebox'
import Header from './header'

export default class ChatScrn extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const styles = StyleSheet.create({
      mainPage: {
        backgroundColor: '#4d4dff',
        flex: 1
      },      
    })
    return (
      <View style={styles.mainPage}>
        <Header />
        <Messagebox />
        <Footer />
      </View>
    )
  }
}
