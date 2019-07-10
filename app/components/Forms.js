import React, { Component } from 'react';
import { View, 
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';
import t from 'tcomb-form-native';
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


addContacts = (e) => {
  e.preventDefault()
  let value = this.refs.form.getValue();
  if(value) {
    fetch(config.apiEndpoint, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: value.name,
        gender: value.gender,
        phone: value.phone,
        email: value.email
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData)
      this.setState({ responseData })
    })
    .done()
  }
  
}

  render() {
    
    return (
 
      <View style={styles.container}>
        
        <Form 
          ref="form"
          options={options}
          type={User} 

        />
        <TouchableHighlight style={styles.button} onPress={this.addContacts}>
          <Text style={styles.buttonText}>Add Contact</Text>
        </TouchableHighlight>
        
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
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},


 
});
