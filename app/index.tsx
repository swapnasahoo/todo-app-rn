import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <View className="p-4 bg-gray-900 flex-1">
      <SafeAreaView>
        <ScrollView>
          <View>
            {/* TODO HEADER */}
            <Text
              className="text-amber-500 text-4xl font-semibold m-4 mt-6
          "
            >
              TodoApp
            </Text>
            {/* TODO INPUT */}
            <View className="flex-1 justify-center mx-4 mt-8 relative ">
              <TextInput
                className="w-full h-14 bg-transparent border-2 border-blue-100 rounded-full text-xl p-4 py-0 text-white placeholder:text-2x placeholder:text-[#b5b7b8]"
                placeholder="Enter todo name"
              ></TextInput>
              <Pressable
                style={{
                  position: "absolute",
                  right: 20,
                }}
                onPress={() => console.log(`hello i am pressed ${1}`)}
              >
                <FontAwesome5 name="plus-circle" size={24} color="#fbbf24" />
              </Pressable>
            </View>

            {/* TODO LIST CARD */}
            <View className="mt-8 gap-4">
              <View className="flex-row items-start bg-gray-800 gap-4 p-4 rounded-xl shadow-xs">
                {isCompleted ? (
                  <Feather name="check-circle" size={24} color="white" />
                ) : (
                  <Feather name="circle" size={24} color="white" />
                )}
                <View>
                  <Text
                    className={`font-semibold text-2xl 
                              ${isCompleted ? "line-through text-gray-500" : "text-white"}`}
                  >
                    Watch Youtube
                  </Text>
                  <View className="flex-row gap-4 ml-4 mt-2">
                    <FontAwesome6 name="edit" size={24} color="white" />
                    <FontAwesome6
                      name="trash-arrow-up"
                      size={24}
                      color="white"
                    />
                  </View>
                </View>
              </View>
              <View className="flex-row items-start bg-gray-800 gap-4 p-4 rounded-xl shadow-xs">
                {isCompleted ? (
                  <Feather name="check-circle" size={24} color="white" />
                ) : (
                  <Feather name="circle" size={24} color="white" />
                )}
                <View>
                  <Text
                    className={`font-semibold text-2xl 
                              ${isCompleted ? "line-through text-gray-500" : "text-white"}`}
                  >
                    Watch Youtube
                  </Text>
                  <View className="flex-row gap-4 ml-4 mt-2">
                    <FontAwesome6 name="edit" size={24} color="white" />
                    <FontAwesome6
                      name="trash-arrow-up"
                      size={24}
                      color="white"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;
