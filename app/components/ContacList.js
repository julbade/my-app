import React, { Component } from 'react';
import { View, 
  StyleSheet,
  Text,
  Button 
} from 'react-native';
import http from '../services/httpService';
import  config  from './../config.json';





export default class ContactList extends Component {
    state = {
        contacts: []
    }

    getContacts() {
        http.get(config.apiEndpoint)
            .then(response => 
                response.data.data.map(user => ({
                    name: `${user.name}`,
                    gender: `${user.gender}`,
                    email: `${user.email}`,
                    phone: `${user.phone}`,
                    create_date: `${user.create_date}`,
                    _id: `${user._id}` 
                }))
                )
                .then(contacts => {
                    this.setState({ contacts });
                })
                .catch(error => this.setState({ error }))
    }
    handleDelete(contact){
        const contacts = this.state.contacts.filter(c => 
            c._id !== contact._id)
        http.delete(config.apiEndpoint + "/" + contact._id)
        this.setState({ contacts })      
      }
    

    componentDidMount() {
        this.getContacts()
    }
   
    render() {
        const { contacts } = this.state;
        return (
             <View style={styles.container}>
                {contacts.map(contact =>{
                    const { name, email, phone, gender, create_date, _id} = contact;
                    return (
                        <View style={styles.text} key={contact._id}>
                            <Button 
                            key={contact._id}
                            title="Delete"
                            onPress={this.handleDelete.bind(this, contact)} 
                           />
                        <Text>  
                            create date: {create_date}
                        </Text>
                        <Text>
                            name: {name}
                          </Text>
                          <Text>  
                            email: {email}
                          </Text>
                          <Text>  
                            gender: {gender}
                        </Text>
                        <Text>  
                            phone: {phone}
                        </Text> 
                        </View>
                    )
                })}
             </View>   
        )
    }
    
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff',
      display: 'flex'
    },
    text: {
        margin: 5
    }
  
  
   
  });