import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../components/Styles';
import ButtonAddCustomWork from '../components/ButtonIcon';

class CustomWorkScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [{
                id: 1,
                name: 'Custom 1'
            }, {
                id: 2,
                name: 'Custom 2'
            }, {
                id: 3,
                name: 'Custom 3'
            }]
        };
    }
    _renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemFlatListCustomWorkScreen}
        >
            <Text>{item.name}</Text>
            <Text>DD/MM/YY</Text>
        </TouchableOpacity>)
    _keyExtractor = (item) => item.id.toString()
    render() {
        return (
            <View
                style={styles.customWorkScreenContainer}
            >
                <View
                    style={styles.customWorkScreenMain}
                >
                    <FlatList
                        data={this.state.dataList}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        style={styles.flatListCustomWorkScreen}
                    />
                </View>
                <ButtonAddCustomWork 
                    nameIcon = 'plus'
                    colorIcon = 'white'
                    navigation = {this.props.navigation}
                    targetScreen ='AddWorkScreen'
                />
            </View>
        );
    }
}

export default CustomWorkScreen;
