import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./home.routes";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import PostScreen from "../screens/PostScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  Foundation,
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Router = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Home") {
          return <Foundation name="home" size={size} color={color} />;
        }
        if (route.name === "Discovery") {
          return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === "Post") {
          return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === "Notifications") {
          return <AntDesign name="hearto" size={size} color={color} />;
        }
        if (route.name === "Profile") {
          return (
            <MaterialIcons name="person-outline" size={size} color={color} />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: "#000",
      inactiveTintColor: "gray",
      showLabel: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={PostScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default Router;
