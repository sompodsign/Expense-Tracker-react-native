import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInput } from "react-native";
import { Checkbox, useTheme } from "react-native-paper";

export default function LoginScreen({ navigation }: any) {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === "dark";

  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={colors.primary} />
      <View>
        <Text style={{ ...style.header, color: colors.text }}>
          Login to your account
        </Text>
      </View>
      {/* Input fields */}
      <View style={style.inputContainer}>
        <TextInput
          style={{ ...style.input, color: colors.text }}
          placeholder="Email"
          placeholderTextColor={colors.primary}
        />
        <TextInput
          style={{ ...style.input, color: colors.text }}
          placeholder="Password"
          placeholderTextColor={colors.primary}
          keyboardType={"numeric"}
          underlineColorAndroid="transparent"
        />
      </View>

      {/* Remember Me checkbox */}
      <View style={style.checkboxContainer}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          color={colors.primary}
          uncheckedColor={colors.primary}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={{ ...style.checkboxText, color: colors.text }}>
          Remember Me
        </Text>
      </View>

      {/* Login button */}
      <TouchableOpacity>
        <Text style={{ ...style.button, backgroundColor: colors.primary }}>
          Sign in
        </Text>
      </TouchableOpacity>
      {/*Forget password*/}
      <View style={style.forgetPasswordContainer}>
        <Text style={{ ...style.forgetPasswordText, color: colors.primary }}>
          Forgot the password?
        </Text>
      </View>
      <View style={style.signUpContainer}>
        <Text style={{color: colors.text, ...style.signUp}}>
          Don't have an account?
          <Text style={{color: colors.primary}}> Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingTop: "20%",
    paddingLeft: "5%",
    fontSize: 50,
    fontWeight: "bold",
  },
  inputContainer: {
    padding: "0%",
    marginTop: "10%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    padding: 16,
    borderRadius: 26,
    margin: 10,
    marginTop: "6%",
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  checkboxContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: "2%",
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "1%",
    marginTop: "2%",
  },
  signUpContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: "10%",
  },
  signUp: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: "2%",
    alignSelf: "center",
  },
  forgetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  forgetPasswordText: {
    fontSize: 17,
    fontWeight: "bold",
  }
});
