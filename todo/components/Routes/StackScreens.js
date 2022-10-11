import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


// Screens
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Important from '../Screens/Important';
import MyDay from '../Screens/MyDay';


const Stack = createNativeStackNavigator();

const StackScreens = () => {

  return (

    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="My Day" component={MyDay} />
      <Stack.Screen name="Important" component={Important} />
    </Stack.Navigator>

  )

}

export default StackScreens;