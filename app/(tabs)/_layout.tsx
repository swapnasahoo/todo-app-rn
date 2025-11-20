import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1b2438",
          borderTopColor: "#33363d",
        },
        tabBarActiveTintColor: "#e05f25",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="settings-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
