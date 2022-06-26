import * as React from 'react';
import { AppRegistry, useColorScheme } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";




const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#22bb9c',
    accent: '#1f222a',
    text: '#fafafa',
  },
};

export default function App() {
  return <NavigationContainer>{
    <PaperProvider theme={theme}>
      <LoginScreen />
      <HomeScreen />
    </PaperProvider>
  }
  </NavigationContainer>;
}
