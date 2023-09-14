import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = ["Full-time", "Part-time", "Contractual"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const router = useRouter();

  return (
    <View>
      <View className="mt-3 mb-2">
        <Text className="text-xl text-[#444262]">Hello Rifat</Text>
        <Text className="text-2xl text-[#312651]">Find your perfect jobs</Text>
      </View>
      <View className="flex-row justify-center items-center h-12 mt-5">
        <View className="flex-1 justify-center items-center rounded-2xl h-full bg-[#F3F4F8] mr-3">
          <TextInput
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
            className="w-full h-full mx-4 px-3"
          />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          className="w-12 h-full rounded-2xl bg-[#FF7754] justify-center items-center"
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            className="w-1/2 h-1/2 text-[#F3F4F8]"
          />
        </TouchableOpacity>
      </View>
      <View className="w-full mt-4">
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`py-2 px-3 border rounded-2xl ${
                activeJobType === item ? "text-[#444262]" : "text-[#C1C0C8]"
              }`}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text
                className={`${
                  activeJobType === item ? "text-[#444262]" : "text-[#C1C0C8]"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: 20}}
          horizontal
        ></FlatList>
      </View>
    </View>
  );
};

export default Welcome;
