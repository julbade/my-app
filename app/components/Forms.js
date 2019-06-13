import React, { Component } from 'react';
import { View, 
  StyleSheet,
  Button 
} from 'react-native';
import t from 'tcomb-form-native'; 



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

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value:', value);
  };


  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          options={options}
          type={User} 
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
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
