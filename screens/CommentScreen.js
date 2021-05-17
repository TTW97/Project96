import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import database from '../config'
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class CommentScreen extends React.Component {

  constructor() {

    super()
    this.state = {

      comment: '',
      commments: []

    }
  }

  addComment() {

    database.collection('comments').add({

      Comment: this.state.comment

    })

    this.setState({

      comment: '',
  
    })

    Alert.alert('Comment sucessfully Added')


  }

  getComments = async() => {

  await database.collection('comments').onSnapshot(
      (snapshot) => {
        var commentList = snapshot.docs.map(document => document.data())
        this.setState({
          comments: commentList
        })
  
      }
  )


 }

 componentDidMount() {

   this.getComments()
 }


 render() {

   return (

    <View >

      <SafeAreaProvider>

          <MyHeader title="Comments" navigation = {this.props.navigation}/>

        <View style = {{flex: 1, alignItems: 'center'}}>

          <TextInput style = {styles.input}
            placeholder = "Enter your Comment"
            onChangeText = {(text) => {this.setState({
              comment: text
            })}} >
          </TextInput>

          <TouchableOpacity style = {styles.button} onPress = {() => {

            this.addComment()
          
          }}>

              <Text>SUBMIT</Text>

          </TouchableOpacity>

        </View>

        <View style = {{flex: 1}}>


          <FlatList 
              data = {this.state.comments}
              keyExtractor = {(item, index) => index.toString()}
              renderItem = {({item, i}) => {
                return (
                  <ListItem  key = {i} bottomDivider >
                  <ListItem.Content >
                  <ListItem.Title style = {{color: 'black', fontWeight: 'bold', alignSelf: 'center', borderWidth: 5, padding: 10, backgroundColor: 'pink'}} > {item.Comment} </ListItem.Title>

                  </ListItem.Content>
                  </ListItem>
              
                )
              }}
              >


            </FlatList>

        </View>

      </SafeAreaProvider>

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

  button: {

    backgroundColor: '#03ba55ff',
    marginTop: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    marginBottom: 20

  }

})