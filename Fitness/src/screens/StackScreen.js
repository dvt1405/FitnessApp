import React, { Component } from "react";
import {
    createAppContainer, createStackNavigator,
    createDrawerNavigator, DrawerNavigator,
    createBottomTabNavigator, createMaterialTopTabNavigator
} from 'react-navigation'
import { Image } from 'react-native'
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import MenuApp from '../Components/MenuApp';
import { windowWidth } from "../Components/Styles";
import ListSubject from "../Components/ListSubject";
import PersonnalScreen from "./PersonalScreen";
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
const routeConfigs = {
    Home: {
        path: '/',
        screen: HomeScreen,


    },
    ListSubject: {
        screen: ListSubject
    }

}
const drawerNavigatorConfigs = {
    // initialRouteName: 'Home',
    drawerWidth: windowWidth * 0.75,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor: 'blue',
    drawerType: 'front',
    contentOptions: {
        activateTintColor: 'red',
        // inactiveTintColor: 'blue',
        // inactiveBackgroundColor: 'yellow',
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        }
    },
    navigationOptions: {
        // drawerIcon: {
        //     focused: true,
        //     tintColor: 'red'
        // },
        // drawerLabel: {
        //     focused: true,
        //     tintColor: 'red'
        // }
    }
}
export const drawerScreen = createDrawerNavigator(routeConfigs, drawerNavigatorConfigs)
export const StackScreen = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    ListSubject: {
        screen: ListSubject,
        
    }
})
const bottomTab = createMaterialTopTabNavigator({
    Home: {
        screen: StackScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name='home' size={25} color={tintColor} />),
            swipeEnabled: true,
        }
    },
    MyExercise: {
        screen: PersonnalScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (<Icon name='plus' size={25} color={tintColor} />),
            swipeEnabled: true,
        }
    },
    Personal: {
        screen: PersonnalScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name='user' size={25} color={tintColor} />),
            swipeEnabled: true,
        }
    },
    History: {
        screen: PersonnalScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (<Icon name='bookmark' size={25} color={tintColor} />),
            swipeEnabled: true,

        }
    }
}, {
        // resetOnBlur: true,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            order: ['Home', 'MyExercise', 'Personal', 'History'],
            showLabel: false,
            showIcon: true,
            swipeEnabled: true,
            style: {
                backgroundColor: '#909098',
                
            },
            tabStyle: {
                backgroundColor: '#909098'
            },
            indicatorStyle: {
                backgroundColor: '#909098'
            },
            inactiveTintColor: 'black',
            activeTintColor: 'blue',
            pressOpacity: 0.4

        },
        // animationEnabled: true,
    })
export const AppContainer = createAppContainer(bottomTab)