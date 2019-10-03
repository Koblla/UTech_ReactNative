import React from 'react'
import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native'

export default class Search extends React.Component {
    render(){
        const styles = StyleSheet.create({
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
            },
           back:{
             backgroundColor: '#4d4dff'
           } 
          })
        return(
        <View style={styles.back}>
          <TextInput style={styles.input}
            placeholder='Search Username'
            placeholderTextColor='#DCDCDC'
            returnKeyType='search'
          />
        </View>
        )
    }
}