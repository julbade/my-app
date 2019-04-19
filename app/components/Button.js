import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Button = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>
            <MaterialIcons
                name="delete-forever"
                size={24}
                color="white"
              />
 </Text>
  </View>
);


const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40
  },
  headerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
   
  }
});
export default Button;