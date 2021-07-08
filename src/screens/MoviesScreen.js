import React, {Component} from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class MoviesScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="black"/>
                <Text>MoviesScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})