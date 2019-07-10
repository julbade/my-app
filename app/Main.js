import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  Button

} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from './utils/Colors';
import Header from './components/Header';
import Forms from './components/Forms';
import ContactList from './components/ContacList';









const headerTitle = ' Help';


class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <Header title={headerTitle} />
          <Button
            title="Profiles"
            onPress={() => navigate('ContactList')}
            />
            <AppContainer/>
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
const  SimpleAppNavigator = createStackNavigator({
  Form: { screen: Forms },
  ContacList: { screen: ContactList }
});

const AppContainer = createAppContainer(SimpleAppNavigator);


export default Main;
