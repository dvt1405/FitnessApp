import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './Styles';

class FlatListHorizontalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idPressed: this.props.id
    };
  }
  componentWillReceiveProps(nexProps) {
    this.setState({
      idPressed: nexProps.id
    })
  }
  _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props._onPress({ item })}
      style={[styles.flatListTitleAddNewWorkoutButton,
      {
        // backgroundColor: this.state.idPressed == item.id ? '#4464AD' : 'orange',
      }]}

    >
      <Text
        style={{
          fontSize: 22,
          color: this.state.idPressed == item.id ? 'white' : 'black',
        }}>{item.name}</Text>
    </TouchableOpacity>
  )
  _keyExtractor = (item) => item.id.toString()
  render() {
    this.componentWillReceiveProps
    return (
      <View
        style={styles.flatListTitleAddNewWorkoutContainer}
      >
        <FlatList
          id={this.state.idPressed}
          data={this.props.dataList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          horizontal={true}
          style={styles.flatListTitleAddNewWorkout}
        />
      </View>
    );
  }
}

export default FlatListHorizontalItem;
