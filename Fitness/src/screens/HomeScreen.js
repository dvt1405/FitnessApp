import React, { Component } from 'react';
import {
    AppRegistry, Platform, StyleSheet, Text, View,
    TouchableOpacity, ScrollView, ImageBackground, Image
} from 'react-native';
import HeaderStackScreen from '../Components/HeaderStackScreen';
import { styles } from '../Components/Styles';
import FlatListItem from '../Components/FlatListItem';
import { dataHome } from '../data/dataList';
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends Component {
    static navigationOptions =  {
        drawerLabel: 'HomeScreen',
        tabBarIcon: ({tintColor}) => (<Icon name='home' size={20}/>),
        
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <ImageBackground
                source={require('../images/background.jpg')}
                style={{ width: '100%', height: '100%' , justifyContent: 'center', alignItems: 'center'}}
            >
                <HeaderStackScreen
                    headerText='Fitness'
                />
                <ScrollView
                    
                    //Ios only: scale
                    maximumZoomScale={3}
                    minimumZoomScale={0.2}
                    style={styles.homeScreenContainer}
                    scrollsToTop={true}
                    showsVerticalScrollIndicator={false}
                >


                    <FlatListItem
                        dataList={dataHome}
                        navigation = {navigation}
                        
                    />
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default HomeScreen;