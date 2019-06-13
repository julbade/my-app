import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Button = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>
           Login
    </Text>
  </View>
);


const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
    marginLeft: 50
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    borderWidth: 3,
    width: 130,
    height: 40,
    backgroundColor: 'gray',
    textAlign: 'center'
   
  }
});
export default Button;