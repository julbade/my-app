import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Button = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>
        Go to profile
 </Text>
  </View>
);


const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40
  },
  headerText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center'
   
  }
});
export default Button;