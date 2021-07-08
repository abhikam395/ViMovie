import React, {Component} from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="black"/>
                <Text>HomeScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})