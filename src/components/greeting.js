import React from 'react';
import { Text, View } from "react-native";
import { useTheme, withTheme } from "react-native-paper";


function Greeting() {
  const font =  useTheme('fonts')
  console.log(font);
  return (
    <View>
      <Text style={{fontSize: 15 }}>Good Afternoon! 👏</Text>
      <Text style={{fontWeight: 'bold', fontSize: 17}}>Shampad Sharkar</Text>
    </View>
  );

}

export default withTheme(Greeting);
