import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import FeedScreen from '../screens/Feed';
import CreateStory from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
              let iconName;
              if(route.name==='Feed'){
                iconName=focused
                ?'book':'book-outline';
              }else if(route.name==='CreatePost'){
                iconName=focused
                ?'create':'create-outline';
              }
              return <Ionicons name={iconName} size={size} color={color}></Ionicons>
            }
          })}
          tabBaroptions={{
            activeTintColor:'#1db954',
            inactiveTintColor:'black'
          }} >
      <Tab.Screen name='Feed' component={FeedScreen} ></Tab.Screen>
      <Tab.Screen name='CreatePost' component={CreateStory} ></Tab.Screen>
          </Tab.Navigator>
    )
}
export default BottomTabNavigator;