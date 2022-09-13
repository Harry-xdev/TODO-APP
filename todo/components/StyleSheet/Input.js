import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  itemContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    width: 380,
    height: 60,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 12,
    
  }, 
  itemTitle: {
    fontSize: 22,

  },

  itemRemove: {
    fontSize: 25,

  }
})

export default inputStyles;