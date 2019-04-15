import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class ButtonAddCustomWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.buttonAddExercies}
                onPress={() => this.props.navigation.navigate(this.props.targetScreen,{
                    param: this.props.param
                })}
            >
                <Icon name={this.props.nameIcon} size={25} color={this.props.colorIcon} />
            </TouchableOpacity>
        );
    }
}

export default ButtonAddCustomWork;
