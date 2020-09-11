import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import logo from "../../src/assets/images/logo.png";

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "ReactGram",
        headerTitleAlign: "center",
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => (
          <SimpleLineIcons name="camera" size={25} color="#000" />
        ),
        headerTitle: () => (
          <Image source={logo} resizeMode="contain" style={{ width: 120 }} />
        ),
        headerRight: () => (
          <SimpleLineIcons name="paper-plane" size={23} color="#000" />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;
