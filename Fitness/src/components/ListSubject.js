import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { dataApp } from '../data/dataList';
import { styles, windowWidth } from './Styles';
import HeaderStackScreen from './HeaderStackScreen';

class ListSubject extends Component {
    
    static navigationOptions = ({navigation}) => ({
        title:navigation.getParam('label', 1).toString(),
        headerStyle: {
            backgroundColor: '#C3C4C9',
            textAlign: 'center',
            elevation: 0,
        },
        headerTitleStyle: {
            fontFamily: 'monospace',
            fontSize: 25,
            textAlign: 'right', 
            shadowColor: '#fff',
            elevation: 0,
            left: windowWidth*0.22
        }

    })
    constructor(props) {
        super(props);
        this.state = {
            data: dataApp,
            idSubject: 0
        };
    }    
    componentWillReceiveProps({nextprops}) {

    }
    _renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.mainHomeScreenTouchable}
        >
            <Text style={styles.mainHomeScreenText}>{item.name}</Text>
        </TouchableOpacity>
    )
    _keyExtractor = (item) => item.id.toString()

    render() {
        const { navigation } = this.props
        const idData = navigation.getParam('idData', 1)
        return (
            <ImageBackground
                source={require('../images/background.jpg')}
                style={{ width: '100%', height: '100%' }}
            >
                <HeaderStackScreen
                    onPress={() => navigation.openDrawer()}
                    // headerText={this.state.data[idData - 1].name}
                />
                <ScrollView
                    //Ios only: scale
                    maximumZoomScale={3}
                    minimumZoomScale={0.2}
                    style={styles.homeScreenContainer}
                    scrollsToTop={true}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.mainHomeScreen}>
                        <FlatList
                            data={this.state.data[idData - 1].listSubjects}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                            style={styles.mainHomeScreenFlatList}
                            style={styles.mainHomeScreenFlatList}
                        />
                    </View>
                </ScrollView>

            </ImageBackground>
        );
    }
}

export default ListSubject;