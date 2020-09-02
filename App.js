import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

const App: () => React$Node = () => {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
