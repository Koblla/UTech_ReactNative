import React from 'react';
import { ScrollView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';

export default class ChatScrn extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render (){
        const styles = StyleSheet.create ({
            mainPage: {
                backgroundColor: '#4d4dff',
                flex:1,
            },
            top: {
                backgroundColor: '#4d4dff',
                flex:1,
                borderRadius:5,
                flexDirection:'row',
                justifyContent: 'space-between',
                alignItems: 'center'

            },
            middle: {
                backgroundColor: '#80aaff',
                flex:10,
            },
            lower: {
                flexDirection: 'row',
                backgroundColor: '#4d4dff',
                flex:1, 
                borderRadius:5,
        
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
                borderRadius: 8,
            },
            send: {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white',
                marginVertical: 10,
                marginHorizontal:3,
                width:40,
                flex: 2,
                height: 35,
                borderRadius: 10,
                backgroundColor: '#b3b3ff'
            },
            sendT: {
                fontSize: 15,
                color: 'white'
            },
            names: {
                flexDirection: 'row',
                flex: 4,
                backgroundColor: '#3333ff',
                paddingVertical: 15,
                alignItems: 'flex-end',
            },
            sendB: {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white',
                marginVertical: 10,
                marginHorizontal:3,
                width:40,
                flex: 1,
                height: 35,
                borderRadius: 10,
                backgroundColor: '#b3b3ff'
            }
        })
        return(
            <View style={styles.mainPage}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.sendB}>
                        <Text style = {styles.sendT}> Back </Text>
                    </TouchableOpacity>
                    <View style = {styles.names}>
                        <Text style={styles.sendT}> First name </Text>
                        <Text style={styles.sendT}> Last name </Text>
                    </View>
                </View>
                <View style={styles.middle}>
                    <Text> hi </Text>
                </View>
                <View style={styles.lower}>
                    <TextInput placeholder= 'say something...' style={styles.input} multiline = {true} />
                    <TouchableOpacity style={styles.send}>
                        <Text style={styles.sendT}> Send </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}