import React from 'react'
import { ScrollView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'

export default class Messagebox extends React.Component {
  render () {
    const styles = StyleSheet.create({
      middle: {
        backgroundColor: '#80aaff',
        flex: 10
      }
    })
    return (
      <View style={styles.middle}>
        <Text> hi </Text>
      </View>
    )
  }
}
