import React, { Component } from 'react';
import { View, 
  StyleSheet,
  Button 
} from 'react-native';
import t from 'tcomb-form-native';
import http from '../services/httpService';
import  config  from '../config.json';




const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  gender: t.String,
  phone: t.String,
});

const options = {
  fields: {
    email: {
      error: 'Required'
    },
    name: {
      error: 'Required'
    },
    gender: {
      error: 'Required'
    },
    phone: {
      error: 'Required'
    },
  },
};


export default class Forms extends Component {

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
addContacts = async () => {
   const data = this.state.contacts;
    await http.post(config.apiEndpoint, data)

}


componentDidMount() {
    this.getContacts()

};




  render() {
    return (
 
      <View style={styles.container}>
        <Form 
          options={options}
          type={User} 

        />
        <Button
          title="Sign Up!"
          onPress={this.addContacts}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
  },


 
});
