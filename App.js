import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

import HomeScreen from './src/screens/HomeScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import NewsScreen from './src/screens/NewsScreen';
import TvScreen from './src/screens/TvScreen';
import PremiumScreen from './src/screens/PremiumScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';


export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
          activeColor="red"
          inactiveColor="white"
          shifting={false}
          barStyle={{
            backgroundColor: '#212121', 
            height: 65,
            justifyContent: 'center'
          }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Ionicons name="home" color={focused ? "red" : "white"} size={18}/>
            ),
          }}/>
        <Tab.Screen 
          name="Movies" 
          component={MoviesScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <MaterialIcons name="local-movies" color={focused ? "red" : "white"} size={18}/>
            ),
          }}/>
        <Tab.Screen 
          name="Premium" 
          component={PremiumScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <View style={{height: 65, backgroundColor: 'red', position: 'absolute', top: -30}}>
                <Foundation name="sheriff-badge" color={focused ? "red" : "white"} size={18}/>
              </View>
            ),
          }}/>
        <Tab.Screen 
          name="News" 
          component={NewsScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Ionicons name="newspaper" color={focused ? "red" : "white"} size={18}/>
            ),
          }}/>
        <Tab.Screen 
          name="TV" 
          component={TvScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Ionicons name="tv" color={focused ? "red" : "white"} size={18}/>
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})