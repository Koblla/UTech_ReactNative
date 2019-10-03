import React from 'react'
import { ImageBackground, Button, TextInput, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

export default class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      fields: {
        email: '',
        password: ''
      }
    }
  }

  render () {
    const styles = StyleSheet.create({
      frame: {
        flex: 1,
        padding: 30,
        backgroundColor: '#4d4dff',
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#000'
      },
      mainFrame: {
        flexDirection: 'row',
        backgroundColor: '#488eed',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        margin: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8
      },
      text: {
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderRadius: 10,
        borderWidth: 0.5,
        fontSize: 25,
        margin: 5,
        marginBottom: 20
      },
      button: {
        marginTop: 25,
        borderRadius: 15,
        fontSize: 20,
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 15
      }
    })
    return (
      <View style={styles.mainFrame}>
        <View style={styles.frame}>
          <Text style={styles.text}> Welcome to our App </Text>
          <TextInput style={styles.input} placeholder='Enter your username' />
          <TextInput style={styles.input} placeholder='Enter your password' />
          <Button onPress={() => this.props.navigation.navigate('TabRoute')} title='Login' style={styles.button} />
        </View>
      </View>
    )
  }
}
