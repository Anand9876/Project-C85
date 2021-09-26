import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../navigation/DrawerNavigation'; 

export default function DashboardScreen(){
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
}
registerRootComponent(DashboardScreen)

