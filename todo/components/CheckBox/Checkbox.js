import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckBox = (props) => {
  const iconName = props.isChecked ?
    'check-circle-outline' : 'checkbox-blank-circle-outline';

  return (
    <View>
      <Pressable style={styles.checkBox}>
        <MaterialCommunityIcons name={iconName} size={27} color='#000' />
      </Pressable>

    </View>
  )


}

const styles = StyleSheet.create({
  checkBox: {
    height: 25,
    width: 25,
    marginTop: 13,
  }
})



export default CheckBox;