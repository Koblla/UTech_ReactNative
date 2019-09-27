import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

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

    render(){
        const styles = StyleSheet.create({
            frame: {
                alignItems: 'center',
                justifyContent: 'center',
            }
        })
        return(
            <View style = {styles.frame}>
                <Text> Welcome to our App </Text>
                <TextInput placeholder='Enter your username' />
                <TextInput placeholder='Enter your password' />
            </View>
        )
    }
}