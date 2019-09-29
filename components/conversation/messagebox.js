import React from 'react'
import { ScrollView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'

export default class Messagebox extends React.Component {
  render () {
    const styles = StyleSheet.create({
      middle: {
        backgroundColor: '#80aaff',
        flex: 10,
        flexDirection: 'column'
      },
      sender: {
        
        alignSelf: 'flex-end',
        backgroundColor: '#ccccff',
        marginRight: 5,
        borderRadius: 5,
        paddingRight: 2,
        marginTop: 3

      },
      reciver: {
        
        alignSelf: 'flex-start',
        backgroundColor: '#ccccff',
        marginLeft: 5,
        borderRadius: 5,
        paddingLeft: 2,
        marginTop: 3


      }
    })
    return (
      <View style={styles.middle}>
        <View style={styles.sender}>
          <Text> hi </Text>
        </View>
        <View style={styles.reciver}>
          <Text> salam </Text>
        </View>

      </View>
    )
  }
}
