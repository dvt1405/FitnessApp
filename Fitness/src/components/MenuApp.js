import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { dataMenu } from '../data/dataList';
import { styles } from './Styles';
import FlatListItem from './FlatListItem';

class MenuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
      <View
        style={styles.homeScreenContainer}
      >
        <FlatListItem 
          dataList={dataMenu}
        />
      </View>
    );
  }
}

export default MenuApp;