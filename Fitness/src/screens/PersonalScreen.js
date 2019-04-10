import React, { Component } from 'react';
import { View, Text, SectionList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

class PersonnalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSection: [
                {
                    title: "Sub1",
                    data: ["Tay", "Chan", "Nguc"]
                }, {
                    title: "Sub2",
                    data: ["Tay", "Nguc", "Mong"]
                }, {
                    title: "Sub3",
                    data: ["Tay", "Nguc", "Vai"]
                }
            ]
        };
    }
    _renderItem = ({ item, index, section }) => (
        <View
        >
            <Text>{item}</Text>
        </View>

    )

    _renderSectionHeader = ({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
    )
    _keyExtractor = (item, index) => index + item
    render() {
        return (
            <View
                styles={styles.personalScreenContainer}
            >
                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    sections={this.state.dataSection}
                    keyExtractor={this._keyExtractor}
                    style={styles.sectionList}
                    stickySectionHeadersEnabled={false}
                />
            </View>
        );
    }
}

export default PersonnalScreen;
const styles = StyleSheet.create({
    personalScreenContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    sectionList: {

    }
})