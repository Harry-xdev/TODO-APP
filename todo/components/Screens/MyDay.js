import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native";
import itemStyles from "../StyleSheet/Items";


function MyDay() {
  const [inputDay, setInputDay] = useState('');
  const [getList, setList] = useState([])

  const addItem = () => {
    // console.log(inputDay);
    if (inputDay === '') {
      alert('Please input your task!');
    } else {
      setList([
        ...getList,
        { key: Math.random().toString(), data: inputDay }
      ])
      setInputDay('');
    }

  }

  const removeItem = (itemkey) => {
    var newList = getList.filter(item => item.key !== itemkey)
    setList(newList)
  }


  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Input your tasks..."
          onChangeText={text => setInputDay(text)}
          value={inputDay}
        />
        <TouchableOpacity
          onPress={addItem}
        >
          <Text>Add</Text>
        </TouchableOpacity>

      </View>
      <View>
        <Text>{inputDay}</Text>
      </View>
      <ScrollView>
        {getList.map((item) =>
          <TouchableOpacity
            key={item.key}

            style={itemStyles.itemContainer}
          >
            <Text style={itemStyles.itemTitle}>{item.data}</Text>
            <TouchableOpacity
              onPress={() => removeItem(item.key)}
            >
              <Text style={itemStyles.itemRemove}>X</Text>
            </TouchableOpacity>
          </TouchableOpacity>)
        }

      </ScrollView>
    </View>
  )
}

export default MyDay;