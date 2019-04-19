import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Futura'
  }
});
export default Header;