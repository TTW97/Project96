import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import database from '../config'
import MyHeader from '../components/MyHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class InfoScreen extends React.Component {

  constructor() {

    super()
    this.state = {

      plantName: '',
      generalInfo: '',
      imageURL: '',
      image: 'https://images.freeimages.com/images/large-previews/eca/sunflower-1394550.jpg'

    }

  }

  addInfo = async() => {

    var plantThere = false

    await database.collection('plants').where('Name','==',this.state.plantName).get().then(snapShot => {snapShot.forEach(doc => {
     
      plantThere = true
      Alert.alert('This plant already exists.')

    })})

    if (plantThere === false) {

      await database.collection('plants').add({

        Name: this.state.plantName,
        PlantInfo: this.state.plantInfo,
        ImageURL: this.state.imageURL,

      })

    }
   
    this.setState({

      plantName: '',
      plantInfo: '',
      imageURL: ''

    })

    Alert.alert('Plant successfully added')

  }

 render() {

   return (

   <View>

    <View>

    <SafeAreaProvider>

      <MyHeader title=" Add Info"/> 

    </SafeAreaProvider>

    </View>

    <View style = {{flex: 1, alignItems: 'center'}}>

      <Image style = {{height: 200, width: 200, alignSelf: 'center'}} 
      source = {{uri: this.state.image}}  />

      <TextInput style = {styles.input}
        placeholder = "Enter the Name of the Plant"
        onChangeText = {(text) => {this.setState({
          plantName: text
        })}} >
      </TextInput>

      <TextInput style = {styles.inputBox}
        placeholder = "Enter Info about the Plant"
        onChangeText = {(text) => {this.setState({
          plantInfo: text
        })}} >
      </TextInput>

      <TextInput style = {styles.inputBox}
        placeholder = "Enter an ImageURL"
        onChangeText = {(text) => {this.setState({
          imageURL: text
        })}} >
      </TextInput>

      <TouchableOpacity style = {styles.button} onPress = {() => {

        console.log('reached')
        this.addInfo()
      
      }}>

          <Text>SUBMIT</Text>

      </TouchableOpacity>


    </View>

    </View>

   )

 }


}

const styles = StyleSheet.create({

  input: {

    width: 250,
    height: 50,
    backgroundColor: '#a1f6d2ff',
    borderWidth: 5,
    marginTop: 35,
    
  },

  biginput: {

    width: 250,
    height: 150,
    backgroundColor: '#a1f6d2ff',
    borderWidth: 5,
    marginTop: 10
    
  },

  inputBox: {

    width: 250,
    height: 50,
    backgroundColor: '#a1f6d2ff',
    borderWidth: 5,
    marginTop: 10

  },

  button: {

    backgroundColor: '#03ba55ff',
    marginTop: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20

  }

})


