import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MyHeader from '../components/MyHeader'
import firebase from 'firebase'
import database from '../config'

export default class InfoScreen extends React.Component{

  
  constructor(props) {

    super(props);
    this.state = {

      plantName: this.props.navigation.getParam('details')['Name'],
      plantInfo: this.props.navigation.getParam('details')['PlantInfo'],
      imageURL: this.props.navigation.getParam('details')['ImageURL']

    }

  }
  
  render() {

    return (

      <View>

        <Card>

          <Text style = {{fontWeight: 'bold', fontSize: 15}}>Name: {this.state.plantName}</Text>

        </Card>

        <Card>

          <Text style = {{fontWeight: 'bold',fontSize: 15}}>Info: {this.state.plantInfo}</Text>

        </Card>

        <Card>

          <Image style = {{height: 200, width: 200, alignSelf: 'center', borderWidth: 3}} source = {{uri: this.state.imageURL}}  />

        </Card>

      </View>

    )

  }

}

const styles = StyleSheet.create({

  button: {
    width: 200,
    height: 50,
    backgroundColor: 'purple',
    borderWidth: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }

})