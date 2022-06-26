import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Avatar, withTheme } from "react-native-paper";


export function Greeting() {
  return (
    <View style={style.container}>
      <Avatar.Image size={40} source={require('../../assets/person.jpg')} />
      <View style={{ ...style.messages, }}>
      <Text style={{fontSize: 15, color: 'white' }}>Good Afternoon! 👏</Text>
      <Text style={{fontWeight: 'bold', fontSize: 17, color: 'white'}}>Shampad Sharkar</Text>
      </View>
  </View>
);

}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  messages: {
    marginLeft: 10,
  }
})

export default withTheme(Greeting);
