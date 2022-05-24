import * as React from 'react';
import { useTheme } from "react-native-paper";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";

const MoneyInput = () => {
  const [text, setText] = React.useState("");
  const {colors} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: colors.accent}}>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={text}
      />

      <TextInput
        style={styles.input}
        placeholder="৳ Amount"
        value={text}
        underlineColorAndroid='transparent'
      />
      <TouchableOpacity>
        <Text style={{...styles.button, backgroundColor: colors.primary}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    padding: 16,
    borderRadius: 26,
    margin: 6,
    fontSize: 17,
    color: "#fff",
    fontWeight: "normal",
    textAlign: "center",
  },
});

export default MoneyInput
