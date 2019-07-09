import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,

} from 'react-native';

import { LinearGradient } from 'expo';
import { primaryGradientArray } from './utils/Colors';
import Header from './components/Header';
import SubTitle from './components/SubTitle';
import Button from './components/Button';
import LoginButton from './components/LoginButton';
import SignupButton from './components/SignupButton'
import Forms from './components/Forms';
import ContactList from './components/ContacList';





const headerTitle = ' Help';


export default class Main extends React.Component {



 
  render() {
     
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <Header title={headerTitle} />
          <SubTitle subtitle="Welcome"/>
          
        </View>
       
        <View> 
           <ScrollView style={styles.scrollView}>  
             <Forms style={styles.formView}/>
            </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    fontSize: 32,
    marginLeft: 50,
    marginTop: 10,
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row'
  },
  scrollView: {
    height: 450,
    marginTop: 10,
  
    
  }
});
