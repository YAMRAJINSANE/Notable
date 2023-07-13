import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constant";
import Entypo from "react-native-vector-icons/Entypo";
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

const NotesDetail = ({ route }) => {
  const { data } = route.params;

  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
  });

  const Data = [
    {
      title: "Science Pyq 2022 fjkg fkgjadf kkjdkfjgkdaj kfjg  ",
      Category: "PYQ",
      SEM: "I",
      SUBJECT: "Financial Literacy",
    },
    {
      title: "Science Pyq 2022 ",
      Category: "PYQ",
      SEM: "I",
      SUBJECT: "Financial Literacy",
    },
    {
      title: "Science Pyq 2022 ",
      Category: "PYQ",
      SEM: "I",
      SUBJECT: "Financial Literacy",
    },
    {
      title: "Science Pyq 2022 ",
      Category: "PYQ",
      SEM: "I",
      SUBJECT: "Financial Literacy",
    },
    {
      title: "Science Pyq 2022 ",
      Category: "PYQ",
      SEM: "I",
      SUBJECT: "Financial Literacy",
    },
  ];
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
        alignItems: "center",
        padding: 10,
      }}
    >
      {/* Logo */}

      {/* List of subjects */}
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <FlatList
          data={Data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Pressable>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: "black",
                    width: "100%",
                    marginVertical: 6,
                  }}
                  className=" rounded-md flex flex-row justify-between items-center py-5  px-4"
                >
                  <View className=" flex flex-row items-center w-full   ">
                    <SimpleLineIcons name="notebook" size={80} color="black" />

                    <View className=" flex flex-col  w-[70%] ">
                      <Text
                        className="ml-1 "
                        style={{
                          fontFamily: "Urbanist_600SemiBold",
                          fontSize: 18,
                        }}
                      >
                        {item.title}
                      </Text>
                      <View style={{}}>
                        <Text>• {item.SUBJECT}</Text>
                        <View className="flex justify-between items-center flex-row">
                          <Text>• Sem {item.SEM}</Text>
                          <Text>• {item.Category}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotesDetail;
