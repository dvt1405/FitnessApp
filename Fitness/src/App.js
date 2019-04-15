import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AppContainer, drawerScreen } from './screens/StackScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from './components/Styles';
import PersonnalScreen from './screens/PersonalScreen';
// import ViewPager from '@react-native-community/viewpager'
export default class App extends Component {
  render() {
    return (
      <AppContainer />
      // <PersonnalScreen />
    );
  }
}