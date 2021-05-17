import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PlantScreen from './screens/PlantScreen'
import InfoScreen from './screens/InfoScreen'
import InfoAddScreen from './screens/InfoAddScreen'
import CommentScreen from './screens/CommentScreen'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './components/AppStackNavigator'
import {AppTabNavigator} from './components/AppTabNavigator'

export default class App extends React.Component {

  render() {
  return (
    
      
    <AppContainer />

  )
  }

}

const AppContainer = createAppContainer(AppTabNavigator)



//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jessicagavin.com%2Fcarrot-benefits-types%2F&psig=AOvVaw1e_-jdtnAjgdcK4bg38JzD&ust=1618448964124000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDF_LrG_O8CFQAAAAAdAAAAABAJ
//Carrot

//https://www.google.com/url?sa=i&url=https%3A%2F%2Fthesouthern.com%2Flifestyles%2Ffood-and-cooking%2Fdont-fear-the-eggplant-its-not-as-intimidating-as-you-might-think%2Farticle_82d5b949-1e2c-58a4-8ca8-6d120e86e311.html&psig=AOvVaw2SkY7jkue_i5GCHg-mGiqT&ust=1618449010460000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDfr8_G_O8CFQAAAAAdAAAAABAD
//Eggplant

//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fplant%2Flettuce&psig=AOvVaw238tAYGTW3MPFmUUYcGFCJ&ust=1618449029898000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjSz9jG_O8CFQAAAAAdAAAAABAD
//Lettuce

//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FSubu-APPLE-Fruit-Application%2Fdp%2FB01LWX98B2&psig=AOvVaw3K-Vf0Vx__Ab3c8rOSM1UJ&ust=1618449052448000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiCn-PG_O8CFQAAAAAdAAAAABAD
//Apple

//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Forange-fruit&psig=AOvVaw1RvMBM7Fyx7A7TxzOQ49Dj&ust=1618449063678000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCc0-jG_O8CFQAAAAAdAAAAABAD
//Orange