import React, { Component } from 'react';
import { View, 
    StyleSheet,
    Text 
  } from 'react-native';
  import axios from 'axios';

  
 class ContactList extends Component {
     state = {
         contacts: []
     };

   async  componentWillMount() {
         const { data: contacts } = await axios.get(
             "https://my-json-server.typicode.com/typicode/demo/posts"
         );
         this.setState({ contacts });
         
     }
     renderContacts() {
         return this.state.contacts.map(contact =>
            <Text key={contact.id} style={styles.container} >{contact.title}</Text>)
     }
     render() {
        
    
    return (
       <View>
            {this.renderContacts()}
        </View>    
    );
    }
 } 

 export default ContactList;
 
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center',
      fontSize: 18
    }
      
  
})
