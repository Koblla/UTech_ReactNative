import React from 'react'
import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native'
import Conversation from './conversation'

export default class Conversationlist extends React.Component {
  render () {
    const styles = StyleSheet.create({
      conversationlist: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#4d4dff'
      },
      input: {
        marginTop: 25,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8

      }
    })
    return (

      <View style={styles.conversationlist}>
        <View>

          <TextInput style={styles.input}
            placeholder='Search Username'
            placeholderTextColor='#DCDCDC'
            returnKeyType='search'
          />
        </View>
        <ScrollView>
          <View>
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </View>
        </ScrollView>
      </View>

    )
  }
}
