import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
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
import { urlFor } from "../Sanity/Sanity";

const NotesDetail = ({ route, navigation }) => {
  const { data, BillBord, Post, id, course, subject, category } = route.params;

  const filteredData = Post.filter(
    (obj) =>
      obj.semester.title === data &&
      obj.course.name === course &&
      obj.subject.name === subject &&
      obj.category.title === category
  );
  console.log("////////////////////");
  console.log(filteredData);
  console.log("////////////////////");

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
          data={filteredData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const publishedAt = new Date(item.uploadDate).toLocaleString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );
            const slicedTitle =
              item.title.length > 60
                ? item.title.slice(0, 60) + "..."
                : item.title;
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProgramName", { Url: item.url })
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
                  <View className=" flex flex-row items-center w-full   ">
                    <SimpleLineIcons name="notebook" size={80} color="black" />

                    <View className=" flex flex-col  w-[70%] ">
                      <Text
                        className="ml-1 "
                        style={{
                          fontFamily: "Urbanist_700Bold",
                          fontSize: 18,
                        }}
                      >
                        {slicedTitle}
                      </Text>
                      <View style={{}}>
                        <Text
                          style={{
                            fontFamily: "Urbanist_700Bold",
                            fontSize: 12,
                          }}
                        >
                          • {item.subject.name}
                        </Text>

                        <View className="flex justify-between items-center flex-row">
                          <Text
                            style={{
                              fontFamily: "Urbanist_700Bold",
                              fontSize: 12,
                            }}
                          >
                            • {item.semester.title}
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Urbanist_700Bold",
                              fontSize: 12,
                            }}
                          >
                            • {item.category.title}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontFamily: "Urbanist_700Bold",
                            fontSize: 12,
                          }}
                        >
                          • Upload Date {publishedAt}
                        </Text>
                        <Pressable
                          onPress={() =>
                            navigation.navigate("CommPerson", {
                              name: item.community.name,
                              description: item.community.description,
                              profileURL: item.community.profileURL,
                              id: item.community._id,
                              imageUri: urlFor(item.community.image).url(),
                              colllege: item.community.colllege,
                              sem: item.community.sem,
                            })
                          }
                          className="flex justify-end items-end mt-2 w-full"
                        >
                          <Text
                            style={{
                              fontFamily: "Urbanist_700Bold",
                              fontSize: 10,
                              borderWidth: 1,
                              borderColor: "black",
                              borderRadius: 10,
                              padding: 6,
                            }}
                          >
                            By - {item.community.name}
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotesDetail;
