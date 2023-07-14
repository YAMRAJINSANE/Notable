import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { SIZES } from "../constant";
import { Linking } from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

const CommPerson = ({ route }) => {
  const { name, description, profileURL, id, imageUri, colllege, sem } =
    route.params;
  console.log(name, description, profileURL, id, imageUri, colllege, sem);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView
        style={{
          width: SIZES.width,
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",

          padding: 10,
        }}
      >
        <Image
          style={{
            aspectRatio: 3 / 4,
          }}
          source={{ uri: imageUri }}
          className=" w-[350px] rounded-xl"
        />
        <Text
          style={{ fontFamily: "Urbanist_800ExtraBold" }}
          className="w-full text-2xl px-5 "
        >
          {name}
        </Text>
        <Text
          style={{ fontFamily: "Urbanist_800ExtraBold" }}
          className="w-full text-lg px-5 "
        >
          {colllege} | {sem}
        </Text>
        <View
          style={{
            width: SIZES.width - 50,
            marginVertical: 5,
          }}
          className="w-full px-5  h-[.5px] bg-gray-600"
        />
        <Text
          style={{ fontFamily: "Urbanist_600SemiBold", fontSize: 16 }}
          className="w-full text-lg px-5  "
        >
          {description}
        </Text>
        <View
          style={{
            width: SIZES.width - 50,
            marginVertical: 5,
          }}
          className="w-full px-5  h-[.5px] bg-gray-600"
        />
        <Pressable onPress={() => Linking.openURL(profileURL)}>
          <View
            style={{
              width: SIZES.width - 50,
            }}
            className=" w-full  flex justify-center items-center  mt-5 text-xl text-white  py-4 bg-black rounded-md mx-24 "
          >
            <Text
              className=" text-xl text-white "
              style={{ fontFamily: "Urbanist_700Bold" }}
            >
              Connect
            </Text>
          </View>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CommPerson;
