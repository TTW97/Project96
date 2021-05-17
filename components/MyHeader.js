import * as React from 'react'
import { Header, Icon, Badge  } from 'react-native-elements';
import {View} from 'react-native'
import firebase from 'firebase'
import database from '../config'

export default class MyHeader extends React.Component {

  render () {

    return (

      <Header 
    
        centerComponent = {{text: this.props.title, style: {color: 'white', fontSize: 30, fontWeight: 'bold'}}} 
      
      />

    )

  }

}