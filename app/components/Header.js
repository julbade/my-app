import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.bar}>
      <MaterialIcons
      name="menu"
      size={30}
      />  
    </Text>
    <Text style={styles.headerText}>
      <MaterialIcons
      name="question-answer"
      size={17}
      /> 
      {title}
      </Text>
    

  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 2,
    borderBottomColor: '#47260e'


    
  },
  headerText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Al Nile',
    textAlign: 'right',
    marginLeft: 140
    
    
  },
  bar: {
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Al Nile',
    marginRight: 140
  }
});
export default Header;