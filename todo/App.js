import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Planned from './components/Screens/Planned';
import MyDay from './components/Screens/MyDay';
import Important from './components/Screens/Important';



const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='My Day'>
        <Tab.Screen
          name="My Day"
          component={MyDay}
        // options={{title: 'To day'}}
        />
       
        <Tab.Screen
          name="Planned"
          component={Planned}

        />
        <Tab.Screen
          name="Important"
          component={Important}

        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}