import React from 'react';
import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <Text>Login</Text>
        <TextInput type="text" placeholder="Username" />
        <TextInput type="password" placeholder="Password" />
        <Button type="submit" title="Login">Login</Button>
    </View>
  );
}
