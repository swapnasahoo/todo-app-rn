import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const settings = () => {
  const [enabled, setEnabled] = useState<true | false>(false);

  return (
    <View className="p-4 bg-amber-50 dark:bg-gray-900 flex-1">
      <SafeAreaView className="flex-1">
        {/* SETTINGS HEADER */}
        <Text className="text-amber-600 dark:text-amber-500 text-4xl font-semibold m-4 mt-6">
          Settings
        </Text>

        <View className="flex-row items-center bg-gray-800 shadow-2xs max-w-[90%] gap-4 px-4 py-1 rounded-md">
          <View className="bg-gray-600 p-2 rounded-full shadow-2sx">
            <MaterialIcons name="dark-mode" size={24} color="white" />
          </View>
          <Text className="text-xl font-bold text-amber-50">Change Theme</Text>
          <Switch
            value={enabled}
            onValueChange={setEnabled}
            trackColor={{
              false: "#4e4f52",
              true: "#cc2929",
            }}
            thumbColor="#ffffff"
            style={{
              marginLeft: "auto",
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default settings;
