import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MyHeader from '../components/MyHeader'
import firebase from 'firebase';
import database from '../config';
import InfoScreen from './InfoScreen'

export default class PlantScreen extends React.Component {

  constructor() {

    super()
    this.state = {

      plants: [],
      images: "#"

    }

  }

 getPlantInfo  = async() => {

  await database.collection('plants').onSnapshot(
      (snapshot) => {
        var plantList = snapshot.docs.map(document => document.data())
        this.setState({
          plants: plantList
        })
        console.log(this.state.plants)
      }
  )


 }

 componentDidMount() {

   this.getPlantInfo()
 }

 render() {

   return (

    <View style = {{flex:1}}>

      <SafeAreaProvider>

       <MyHeader title=" Plants" navigation = {this.props.navigation}/>

      <FlatList 
          data = {this.state.plants}
          keyExtractor = {(item, index) => index.toString()}
          renderItem = {({item, i}) => {
            return (
              <ListItem  key = {i} bottomDivider >
              <ListItem.Content >
              <Image style = {{height: 200, width: 200, alignSelf: 'center', borderWidth: 3}} source = {{uri: item.ImageURL}}  />
              <ListItem.Title style = {{color: 'black', fontWeight: 'bold', alignSelf: 'center', fontSize: 30}} > {item.Name} </ListItem.Title>
    
              <TouchableOpacity style = {styles.input} onPress = {() => {
                
                console.log(item)
                this.props.navigation.navigate('InfoScreen', {'details': item})
                console.log(item)
              

              }}>

                <Text style = {{fontWeight: 'bold', color: 'white'}}>View Planting Info</Text>
              </TouchableOpacity>

              </ListItem.Content>
              </ListItem>
          
            )
          }}
          >


        </FlatList>

      </SafeAreaProvider>

    </View>

   )

 }

}

const styles = StyleSheet.create({
  
  input: {
    width: 300,
    height: 35,
    backgroundColor: '#03ba55ff',
    borderWidth: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }

});