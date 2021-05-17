import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs'
import PlantScreen from '../screens/PlantScreen'
import InfoAddScreen from '../screens/InfoAddScreen'
import CommentScreen from '../screens/CommentScreen'
import {AppStackNavigator} from './AppStackNavigator'

export const AppTabNavigator = createBottomTabNavigator({

  PlantTab: {screen: AppStackNavigator, 
  navigationOptions: {
    tabBarIcon: <Image/>,
    tabBarLabel: "Plant-Tab"
  }},

  InfoAddTab: {screen: InfoAddScreen, 
  navigationOptions: {
    tabBarIcon: <Image/>,
    tabBarLabel: "Info-Add-Tab"
  }},

  CommentTab: {screen: CommentScreen, 
  navigationOptions: {
    tabBarIcon: <Image/>,
    tabBarLabel: "Comment-Tab"
  }}

})



