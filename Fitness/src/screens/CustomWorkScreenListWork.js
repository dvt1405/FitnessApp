import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import FlatListHorizontalItem from '../components/FlatListHorizontalItem';
import { dataApp } from '../data/dataList';
import Icon from 'react-native-vector-icons/FontAwesome'
class ListCustomWorkScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: dataApp,
            text: '',
            id: 1,
            listSelected: this.props.navigation.getParam('param')
        };
    }
    _onPressHorizontalItem = ({ item }) => {
        this.setState({ text: item.name, id: item.id })
    }
    _renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                width: '100%',
                height: 50,
                backgroundColor: 'orange',
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                marginVertical: 10
            }}
            onPress={() => this.setState({
                listSelected: this.state.listSelected.concat([{
                    id: item.id,
                    parent: this.state.dataList[this.state.id-1].name,
                    name: item.name
                }])
            })}
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
    _keyExtractor = (item) => item.id.toString()
    render() {
        return (
            <View
                style={{ flex: 1 }}
            >
                <TouchableOpacity
                    style={
                        {
                            position: "relative",
                            width: 30, height: 30, borderRadius: 30,
                            right: 0, top: 0
                        }
                    }
                    onPress={() => this.props.navigation.navigate('AddWorkScreen', {
                        listSubjects: this.state.listSelected,
                        id: this.state.id
                    })}
                >
                    <Icon name='plus' size={15} color='black' />
                </TouchableOpacity>
                <FlatListHorizontalItem
                    dataList={this.state.dataList}
                    _onPress={this._onPressHorizontalItem}
                    id={this.state.id}
                />
                <View
                    style={{ flex: 1 }}
                >
                    <FlatList
                        data={this.state.dataList[this.state.id - 1].listSubjects}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        style={{ width: '90%', flex: 1, alignSelf: 'center', marginTop: 20 }}
                    />
                </View>
            </View>
        );
    }
}

export default ListCustomWorkScreen;
