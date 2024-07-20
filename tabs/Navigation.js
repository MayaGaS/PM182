import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // creacion de bottom-tab
import { NavigationContainer } from "@react-navigation/native"; // navegacion 

// importacion de screens
import homeScreen from "./screens/homeScreen";
import settingsScreen from "./screens/settingsScreen";

// iconos 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// variable de bottom-tab
const tab = createBottomTabNavigator ();

// funcion en donde estara todo el tab navigator
function myTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions= {{
                tabBarActiveTintColor: 'purple',
            }}
        >

            <Tab.Screen 
                name="Home"
                component={homeScreen} 
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarBadge: 10,
                }}
            />

            <Tab.Screen 
                name="Settings" 
                component={settingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color, size }) => (
                        <MaterialCommunityIcons name="brightness-5" color={color} size={size} />
                    ),
                    tabBarBadge: 10,
                }}
            />
        </Tab.Navigator>
    );
}

// exportacion de navigation 
export default function Navigation() {
    return (
        <NavigationContainer>
            <myTabs />
        </NavigationContainer>
    );
}