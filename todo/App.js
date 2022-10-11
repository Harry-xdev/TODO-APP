
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// StackScreens
import StackScreens from './components/Routes/StackScreens';
// TabBar
import BottomTabBar from './components/Routes/BottomTabBar';






export default function App() {

  return (
    <NavigationContainer>
      {/* <StackScreens /> */}
      <BottomTabBar />
    </NavigationContainer>


    // Tab bar code đừng xóa
    // <NavigationContainer>
    //   <Tab.Navigator initialRouteName='Home'>
    //     <Tab.Screen
    //       name= {'Home'}
    //       component={Home}
    //       options={{
    //         tabBarIcon: () => (<MaterialIcons name={'home-filled'} color={'gray'} size={34} />)
    //       }}

    //     />

    //     <Tab.Screen
    //       name={"My Day"}
    //       component={MyDay}
    //       options={{
    //         tabBarIcon: (color) => (<Icon name={'sun-o'} color={color} size={30} />)

    //       }}

    //     />
    //     <Tab.Screen
    //       name={"Important"}
    //       component={Important}
    //       options={{
    //         tabBarIcon: (color) => (<Octicons name={'star'} color={color} size={30} />)
    //       }}

    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>

  )
}