import React from 'react'
import { TouchableOpacity ,TextInput, StyleSheet, Text, View } from 'react-native'

export default class Conversation extends React.Component {
  render () {
    const styles = StyleSheet.create({
      conversation: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: 'black',
        backgroundColor: '#80aaff',
        paddingVertical: 20,
        marginVertical: 5,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10
      },
      unseen: {
        backgroundColor: '#ccccff',
        marginRight: 5,
        borderRadius: 20
      }
    })

    return (
      <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ChatPage')} style={styles.conversation}>
        <View>
          <Text> Name Lastname </Text>
        </View>
        <View>
          <Text> lastmessage </Text>
        </View>
        <View>
          <Text> date </Text>
        </View>
        <View style={styles.unseen}>
          <Text> 1 </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
