import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

class HeaderStackScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View
                style={styles.headerScreenContainer}
            >
                {   //Button open Menu
                    /* <TouchableOpacity style={styles.headerScreenTouchable}
                    onPress={this.props.onPress}
                >
                    <Image
                        style={styles.iconLeftTopScreen}
                        source={require('../images/icon_cake.png')}
                    />
                </TouchableOpacity> */}
                <View
                    style={styles.headerScreenTextCon}
                >
                    <Text style={styles.headerScreenText}>{this.props.headerText}</Text>
                </View>
            </View>
        );
    }
}

export default HeaderStackScreen;