import React from 'react'
import { ScrollView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'

export default class Header extends React.Component {
  render () {
    const styles = StyleSheet.create({
      top: {
        backgroundColor: '#4d4dff',
        flex: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 13,
      },
      names: {
        flexDirection: 'row',
        flex: 4,
        backgroundColor: '#b3b3ff',
        paddingVertical: 15,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 5,
      },
      sendB: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 3,
        width: 40,
        flex: 1,
        height: 35,
        borderRadius: 10,
        backgroundColor: '#b3b3ff'
      }
    })
    return (
      <View style={styles.top}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ConvList')} style={styles.sendB}>
          <Text style={styles.sendT}> Back </Text>
        </TouchableOpacity>
        <View style={styles.names}>
          <Text style={styles.sendT}> name </Text>
          <Text style={styles.sendT}> Last name </Text>
        </View>
      </View>
    )
  }
}
