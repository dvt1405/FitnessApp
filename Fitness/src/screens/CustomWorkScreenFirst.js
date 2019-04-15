import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../components/Styles';
import { typeAlias } from '@babel/types';
import ButtonAddCustomWork from '../components/ButtonIcon';
//----Create New Custom Exercise 
class CustomWorkScreenFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleWorkout: '',
            isFocused: false,
            dataList: [{
                id: 1,
                name: 'Tay'
            }, {
                id: 2,
                name: 'Chan'
            }, {
                id: 3,
                name: "Vai"
            }],
            param: this.props.navigation.getParam('listSubjects'),//test
            listSelected: [
                
            ]
        };
    }
    componentWillReceiveProps(nextProps) {
        nextProps.navigation.getParam('listSubjects') != null ? this.setState({
            param: nextProps.navigation.getParam('listSubjects'),
            listSelected: nextProps.navigation.getParam('listSubjects')
        }) : null
    }
    _onFocus = () => this.setState({ isFocused: true })
    _onBlur = () => this.setState({ isFocused: false })
    _renderItem = ({ item }) => (<TouchableOpacity
        style={{ width: '100%', backgroundColor: 'orange' }}
    >
        <Text>{item.parent}: {item.name}</Text>
    </TouchableOpacity>)
    _keyExtractor = (item) => item.id.toString() + item.parent
    render() {
        return (
            <View style={styles.createNewCustomExerciseContainer}>
                <TextInput style={[styles.textInputNewCustomExercise,
                { borderColor: this.state.isFocused ? 'orange' : '#DDDDDD' }]}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                    placeholder='Enter your workout title'
                    onChangeText={(text) => this.setState({ titleWorkout: text })}
                    underlineColorAndroid="white"

                />
                <View style={{ flex: 1 }}>
                    <Text>List workout</Text>
                    <FlatList
                        data={this.state.listSelected}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        style={{ width: '100%', backgroundColor: 'blue' }}
                    />
                </View>

                <ButtonAddCustomWork
                    nameIcon='plus'
                    colorIcon='white'
                    navigation={this.props.navigation}
                    targetScreen='SelectWorkScreen'
                    param={this.state.listSelected} // pass listSelected now to targetScreen
                />
            </View>
        );
    }
}

export default CustomWorkScreenFirst;
