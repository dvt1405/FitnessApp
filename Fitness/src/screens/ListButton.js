
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

class ListButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    _onPress = (item) => {
        // this.props.navigation.navigate(item)
    }
    _renderItem = ({item}) => (
        <TouchableOpacity
            onPress={this._onPress(item)}
        >
            <Text>
                {item}
            </Text>
        </TouchableOpacity>
    )
    _keyExtractor = (index, {item}) => index 
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                >

                </FlatList>
            </View>
        );
    }
}

export default ListButton;