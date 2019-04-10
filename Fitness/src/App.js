import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AppContainer, drawerScreen } from './Screen/StackScreen';
import HeaderStackScreen from './Components/HeaderStackScreen';
import MenuApp from './Components/MenuApp';
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from './Components/Styles';
import PersonnalScreen from './Screen/PersonalScreen';
// import ViewPager from '@react-native-community/viewpager'
export default class App extends Component {
  render() {
    return (
      <AppContainer />
      // <PersonnalScreen />
    );
  }
}