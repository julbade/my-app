import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SubTitle = ({ subtitle }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{subtitle.toUpperCase()}</Text>
  </View>
);


const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'Al Nile',
    textAlign: 'center'
  }
});
export default SubTitle;