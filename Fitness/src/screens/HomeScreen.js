import React, { Component } from 'react';
import {
    AppRegistry, Platform, StyleSheet, Text, View, FlatList,
    TouchableOpacity, ScrollView, ImageBackground, Image, Animated, Easing
} from 'react-native';
import HeaderStackScreen from '../components/HeaderStackScreen';
import { styles } from '../components/Styles';
import FlatListItem from '../components/FlatListItem';
import { dataHome } from '../data/dataList';
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'HomeScreen',
        tabBarIcon: ({ tintColor }) => (<Icon name='home' size={20} />),

    }
    state = {
        xValue: new Animated.Value(30),
        scaleValue: new Animated.Value(1)
    }
    //-------change marginTOp header---------
    _animated = (value) => {
        Animated.timing(value, {
            toValue: (value == this.state.xValue ? 5 : this.state.value),
            duration: 10
        }).start()
    }
    // _moveAnimation = () => {
    //     Animated.timing(this.state.xValue, {
    //         toValue: 5,
    //         duration: 10,
    //         easing: Easing.line,
    //     }).start()
    // }
    //----Scale text header------//
    _springAnimation = () => {
        Animated.spring(this.state.scaleValue, {
            toValue: 1.2,
            friction: 2,
            tension: 1,
            delay: 200
        }).start()

    }
    //---------FlatList------------
    _onPress = ({ item }) => {
        this.props.navigation.navigate('ListSubject', {
            idData: item.id,
            label: item.name
        })
    }
    _renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.homeScreenButton}
            onPress={() => this._onPress({ item })}
        >
            <Text style={styles.mainHomeScreenText}>{item.name}</Text>
        </TouchableOpacity>

    )
    _keyExtractor = (item) => item.id.toString()
    render() {
        const navigation = this.props.navigation;
        this._springAnimation()
        return (
            <View
                // source={require('../images/background.jpg')}
                style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
            >
                <Animated.View style={[styles.headerHomeScreen,
                { marginTop: this.state.xValue, }]}

                >
                    <Animated.Text style={[styles.headerHomeScreenText,
                    { transform: [{ scale: this.state.scaleValue }] }
                    ]}>
                        Fitness</Animated.Text>
                </Animated.View>
                <ScrollView

                    //Ios only: scale
                    maximumZoomScale={3}
                    minimumZoomScale={0.2}
                    style={styles.homeScreenScrollView}
                    scrollsToTop={true}
                    showsVerticalScrollIndicator={false}
                // onScrollBeginDrag={() => { this._animated(this.state.xValue) }}
                >
                    <View
                        style={styles.bigItemHomeContainer}
                    >
                        <TouchableOpacity
                            style={[styles.bigItemHomeButton]}
                        >
                            <Text style={[styles.bigItemText, styles.mainHomeScreenText]}>Big Item Header</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flatListContainer}>
                        <FlatList
                            data={dataHome}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                            style={styles.homeScreenFlatList}
                            numColumns={2}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;
