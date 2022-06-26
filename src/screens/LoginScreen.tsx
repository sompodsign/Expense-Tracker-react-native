import React from 'react';


import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { useTheme, TextInput } from "react-native-paper";
// import { TextInput } from "react-native";


export default function LoginScreen({ navigation }: any) {
  const {colors} = useTheme();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%",
  };


  // @ts-ignore
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={colors.primary}/>
      <View>
        <Text style={{...style.header, color: colors.text}}>Login to your account</Text>
      </View>
      <View style={style.inputContainer}>
      <TextInput
        label="Email"
        onChangeText={(text) => {}}

      />
      <TextInput
        label="Password"
        onChangeText={(text) => {}}

        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingTop: '20%',
    paddingLeft: '5%',
    fontSize: 50,
    fontWeight: 'bold',
  },
    inputContainer: {
    padding: '5%',
    }
}
);


