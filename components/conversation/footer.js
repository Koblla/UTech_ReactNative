import React from 'react'
import { ScrollView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'

export default class Footer extends React.Component {
  render () {
    const styles = StyleSheet.create({
      lower: {
        flexDirection: 'row',
        backgroundColor: '#4d4dff',
        flex: 1,
        borderRadius: 5

      },
      input: {
        margin: 8,
        flex: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8
      },
      send: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 3,
        width: 40,
        flex: 2,
        height: 35,
        borderRadius: 10,
        backgroundColor: '#b3b3ff'
      },
      sendT: {
        fontSize: 15,
        color: 'white'
      }
    })
    return (

      <View style={styles.lower}>
        <TextInput style={styles.input}
          placeholder='say something...'
          placeholderTextColor='#DCDCDC'
          returnKeyType='send'
        />
        <TouchableOpacity style={styles.send}>
          <Text style={styles.sendT}> Send </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
