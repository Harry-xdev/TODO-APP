import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, ImageBackground, NavigationContainer, Pressable } from "react-native";
import styles from "../StyleSheet/AuthenticationScreen";


function Login() {

  // const handleOnPress = () => {

  // }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        // source={{ uri: 'asset:/images/Sky Motivation Quote Phone Wallpaper.jpg' }}
      >
        <View>
          <Pressable 
            style={styles.signInBtn}

            >
            <Text>
              Login
            </Text>
          </Pressable>
        </View>

      </ImageBackground>



    </View>
  )
}

export default Login;