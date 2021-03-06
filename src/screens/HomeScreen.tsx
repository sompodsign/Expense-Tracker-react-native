import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { useTheme } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Greeting } from "../components/greeting";
import MoneyInput from "../components/moneyInput";
import { TotalCard } from "../components/totalCard";
import TransactionHistory from "../components/transactionHistory";

const Section = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      ></Text>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      ></Text>
    </View>
  );
};

const HomeScreen: () => JSX.Element = () => {
  const { colors } = useTheme();
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={styles.greetingBar}>
        <View style={styles.greeting}>
          <Greeting />
        </View>
      </View>
      <TotalCard />
      <MoneyInput />

      <TransactionHistory />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greetingBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  greeting: {
    paddingLeft: 10,
  },
});

export default HomeScreen;
