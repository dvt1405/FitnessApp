import React, { Component } from "react";
import {
    createAppContainer, createStackNavigator,
    createDrawerNavigator, DrawerNavigator,
    createBottomTabNavigator, createMaterialTopTabNavigator
} from 'react-navigation'
import { Image } from 'react-native'
import HomeScreen from './HomeScreen';
import MenuApp from '../components/MenuApp';
import { windowWidth } from "../components/Styles";
import ListSubject from "../components/ListSubject";
import PersonnalScreen from "./PersonalScreen";
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Login from "../components/Login";
import Register from "../components/Register";
import CustomWorkScreen from "./CustomWorkScreen";
import CustomWorkScreenFirst from "./CustomWorkScreenFirst";
import ListCustomWorkScreen from "./CustomWorkScreenListWork";
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
export const customWorkStackScreen = createStackNavigator({
    CustomWorkouts: {
        screen: CustomWorkScreen,
        navigationOptions: {
            title: 'CustomWork',
            headerStyle: {
                backgroundColor: 'white',
                // textAlign: 'center',
                elevation: 0,
            },headerTitleStyle: {
                fontFamily: 'monospace',
                fontSize: 25,
                textAlign: 'right', 
                shadowColor: '#fff',
                left: windowWidth*0.22,
                color: 'black'
            }
        }
    },
    AddWorkScreen: {
        screen: CustomWorkScreenFirst,
        navigationOptions: {
            title: 'CustomWorks'
        }
    },
    SelectWorkScreen: {
        screen: ListCustomWorkScreen,
        navigationOptions: {
            title: 'Seclect works'
        }
    }
})
export const homeStackScreen = createStackNavigator({
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
        screen: homeStackScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name='home' size={25} color={tintColor} />),
            swipeEnabled: true,
        }
    },
    MyExercise: {
        screen: customWorkStackScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (<Icon name='plus' size={25} color={tintColor} />),
            swipeEnabled: true,
        }
    },
    Personal: {
        screen: Login,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name='user' size={25} color={tintColor} />),
            swipeEnabled: true,
        }
    },
    History: {
        screen: Register,
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
                backgroundColor: 'white',
                
            },
            tabStyle: {
                backgroundColor: 'white'
            },
            indicatorStyle: {
                backgroundColor: '#909098'
            },
            inactiveTintColor: '#909098',
            activeTintColor: 'blue',
            pressOpacity: 0.4

        },
        // animationEnabled: true,
    })
export const AppContainer = createAppContainer(bottomTab)