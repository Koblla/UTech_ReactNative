import React from 'react'
import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native'
import Conversation from './conversation'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class Conversationlist extends React.Component {
  static navigationOptions= { headerMode: 'none'}
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
        
        <ScrollView>
          <View>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
            <Conversation navigation={this.props.navigation}/>
          </View>
        </ScrollView>
      </View>

    )
  }
}
const AppNavigator = createStackNavigator({
  MainPage: Conversationlist,
});
export default createAppContainer(AppNavigator);