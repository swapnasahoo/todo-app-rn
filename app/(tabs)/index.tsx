import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const { colorScheme } = useColorScheme();

  const [todos, setTodos] = useState<
    { id: Number; value: String; completed: Boolean }[]
  >([]);

  useEffect(() => {
    async function loadTodos() {
      const savedTodos = await AsyncStorage.getItem("todos");
      const data = savedTodos ? JSON.parse(savedTodos) : [];
      setTodos(data);
    }
    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [todoValue, setTodoValue] = useState("");

  async function addTodo() {
    setTodos([
      ...todos,
      {
        id: todos.length,
        value: todoValue,
        completed: false,
      },
    ]);
    setTodoValue("");
  }

  async function completeTodo(id: Number) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  async function deleteTodo(id: Number) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <View className="p-4 bg-amber-50 dark:bg-gray-900 flex-1">
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {/* TODO HEADER */}
        <Text
          className="text-amber-600 dark:text-amber-500 text-4xl font-semibold m-4 mt-6
          "
        >
          TodoApp
        </Text>
        {/* TODO INPUT */}
        <View className="justify-center mx-4 mt-8 relative ">
          <TextInput
            className="w-full h-14 bg-transparent border-2 border-blue-700 dark:border-blue-100 rounded-full text-xl p-4 py-0 text-black dark:text-white placeholder:text-2x placeholder:text-[#2a2a2a] placeholder:dark:text-[#b5b7b8]"
            placeholder="Enter todo name"
            onChangeText={setTodoValue}
            value={todoValue}
          ></TextInput>
          <Pressable
            style={{
              position: "absolute",
              right: 20,
            }}
            onPress={addTodo}
          >
            <FontAwesome5
              name="plus-circle"
              size={24}
              color={colorScheme === "light" ? "#2a2a2a" : "#fbbf24"}
            />
          </Pressable>
        </View>

        {/* TODO LIST CARD */}
        <FlatList
          data={todos}
          keyExtractor={(todo) => todo.id.toString()}
          renderItem={({ item }) => {
            return (
              <View className="flex-row items-start bg-gray-100 dark:bg-gray-800 gap-4 p-4 rounded-xl shadow-xs mb-4">
                <Pressable onPress={() => completeTodo(item.id)}>
                  {item.completed ? (
                    <Feather
                      name="check-circle"
                      size={24}
                      color={colorScheme === "light" ? "black" : "white"}
                    />
                  ) : (
                    <Feather
                      name="circle"
                      size={24}
                      color={colorScheme === "light" ? "black" : "white"}
                    />
                  )}
                </Pressable>
                <View>
                  <Text
                    className={`font-semibold text-2xl 
                              ${item.completed ? "line-through text-gray-500" : "text-black dark:text-white"}`}
                  >
                    {item.value}
                  </Text>
                  <View className="flex-row gap-4 ml-4 mt-2">
                    <FontAwesome6
                      name="edit"
                      size={24}
                      color={colorScheme === "light" ? "black" : "white"}
                    />
                    <FontAwesome6
                      name="trash-arrow-up"
                      size={24}
                      color={colorScheme === "light" ? "black" : "white"}
                      onPress={() => deleteTodo(item.id)}
                    />
                  </View>
                </View>
              </View>
            );
          }}
          style={{
            marginTop: 48,
          }}
          contentContainerStyle={{
            paddingBottom: 48,
          }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default index;
