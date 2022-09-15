import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Planned from './components/Screens/Planned';
import MyDay from './components/Screens/MyDay';
import Important from './components/Screens/Important';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from "react-native-vector-icons/Octicons";




const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='My Day'>
        <Tab.Screen
          name={"My Day"}
          component={MyDay}
          options={{
            tabBarIcon: (color) => (<Icon name={'sun-o'} color={color} size={30} />)

          }}
          style={{ padding: 10 }}
        />

        <Tab.Screen
          name={"Planned"}
          component={Planned}
          options={{
            tabBarIcon: (color) => (<MaterialIcons name={'schedule'} color={color} size={30} />)
          }}

        />
        <Tab.Screen
          name={"Important 2"}
          component={Important}
          options={{
            tabBarIcon: (color) => (<Octicons name={'star'} color={color} size={30} />)
          }}

        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}