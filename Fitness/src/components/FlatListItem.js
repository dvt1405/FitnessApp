import React, { Component } from 'react';
import { AppRegistry, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

class FlatListItem extends Component {
    state = {

    };

    _onPress = ({item}) => {
        this.props.navigation.navigate('ListSubject',{
            idData: item.id,
            label: item.name
        })
    }
    _renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.mainHomeScreenTouchable}
            onPress={() => this._onPress({item})}
        >
            <Text style={styles.mainHomeScreenText}>{item.name}</Text>
        </TouchableOpacity>

    )
    _keyExtractor = (item) => item.id.toString()
    render() {
        return (
            <View style={styles.mainHomeScreen}>
                <FlatList
                    data={this.props.dataList}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    style={styles.mainHomeScreenFlatList}
                />
            </View>
        );
    }
}

export default FlatListItem;