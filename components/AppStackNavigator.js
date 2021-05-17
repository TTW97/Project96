import * as React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack'
import PlantScreen from '../screens/PlantScreen'
import InfoScreen from '../screens/InfoScreen'

export const AppStackNavigator = createStackNavigator({

  PlantScreen: {screen: PlantScreen, navigationOptions: {headerShown: false}},
  InfoScreen: {screen: InfoScreen}

},

{
  initialRouteName: 'PlantScreen'
}

)