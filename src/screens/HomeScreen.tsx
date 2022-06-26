import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Greeting } from "../components/greeting";
import { TotalCard } from "../components/totalCard";
import MoneyInput from "../components/moneyInput";
import TransactionHistory from "../components/transactionHistory";
import { useTheme } from "react-native-paper";

const Section = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>

      </Text>
      <Text
        style={[
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>

      </Text>
    </View>
  );
};

const HomeScreen: () => JSX.Element = () => {
  const {colors} = useTheme();
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={colors.primary}/>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    paddingLeft: 10
  }


});

export default HomeScreen;
