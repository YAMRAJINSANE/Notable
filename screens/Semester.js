import { View, Text, SafeAreaView, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constant";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/Ionicons";
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
import client from "../Sanity/Sanity";

const numColumns = 2;

const Semester = ({ route, navigation }) => {
  const { data, Post, id } = route.params;

  const [columnWidth, setColumnWidth] = useState(0);

  const [PostFetched, setPostFetched] = useState([]);
  const [CategoryFetch, setCategoryFetch] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const filteredData = Post.filter((obj) => obj.course.name === data);

  useEffect(() => {
    const uniqueSemesters = [];
    const semesterTitles = new Set();

    filteredData.forEach((obj) => {
      if (!semesterTitles.has(obj.semester.title)) {
        semesterTitles.add(obj.semester.title);
        uniqueSemesters.push({
          id: obj.semester._id,
          title: obj.semester.title,
        });
      }
    });
    setPostFetched(uniqueSemesters);
  }, []);

  console.log(PostFetched);
  // const filteredData = postData.filter((item) => item._id === id);

  useEffect(() => {
    setColumnWidth(SIZES.width / numColumns);
  }, []);
  const Sem = [
    {
      Year: "I",
    },
    {
      Year: "II",
    },
    {
      Year: "III",
    },
    {
      Year: "IV",
    },
    {
      Year: "V",
    },
    {
      Year: "VI",
    },
  ];
  return (
    <SafeAreaView
      style={{
        width: SIZES.width,
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Text
        className="text-xl p-2"
        style={{ fontFamily: "Urbanist_700Bold", width: "100%", fontSize: 14 }}
      >
        {data}
      </Text>
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <FlatList
          data={PostFetched}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("Subject", {
                    data: item.title,
                    nav: data,
                    Post: Post,
                    id: item._id,
                  })
                }
              >
                <View
                  style={{
                    width: columnWidth - 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: "black",
                      height: 200,
                      width: SIZES.width / 2 - 20,
                      marginVertical: 6,
                      paddingVertical: 10,
                    }}
                    className=" rounded-md flex justify-center items-center py-5    px-4"
                  >
                    <View className=" flex flex-col items-center  ">
                      <SimpleLineIcons
                        name="ios-library-outline"
                        size={40}
                        color="black"
                      />
                      <Text
                        style={{
                          fontFamily: "Urbanist_600SemiBold",
                          fontSize: 20,
                        }}
                      >
                        {item.title}
                      </Text>
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

export default Semester;
