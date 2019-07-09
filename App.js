import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Main from './app/Main';
import ContactList from './app/components/ContacList';



export default class App extends React.Component {
  
  
  render() {
    return (
      <MyNavigator/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const MyNavigator = createSwitchNavigator({
  routeNameOne: Main,
  routeNameTwo: ContactList,
});