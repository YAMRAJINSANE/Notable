import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constant";
import Entypo from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_800ExtraBold,
  Urbanist_900Black,
} from "@expo-google-fonts/urbanist";
import { SafeAreaView } from "react-native";
import { Linking } from "react-native";
import client from "../Sanity/Sanity";
import LoadingScreen from "./Loading";

const Desk = ({ navigation, route }) => {
  const { Post, Cat } = route.params;

  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        width: COLORS.width,
        backgroundColor: "white",
        flex: 1,
        paddingTop: 25,
        alignItems: "center",
        padding: 10,
      }}
    >
      {/* List of subjects */}

      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <FlatList
          data={Cat}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("Semester", {
                    data: item.name,
                    Post: Post,
                    id: item._id,
                  })
                }
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: "black",
                    width: "100%",
                    marginVertical: 6,
                  }}
                  className=" rounded-md flex flex-row justify-between items-center py-5  px-4"
                >
                  <View className=" flex flex-row items-center  ">
                    <SimpleLineIcons name="notebook" size={22} color="black" />
                    <Text
                      className="ml-1 "
                      style={{
                        fontFamily: "Urbanist_600SemiBold",
                        fontSize: 18,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <MaterialIcons name="navigate-next" size={22} color="black" />
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Desk;
