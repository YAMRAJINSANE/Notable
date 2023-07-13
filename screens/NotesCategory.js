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

const numColumns = 2;

const NotesCategory = ({ route, navigation }) => {
  const { data, BillBord, Post, id, course, subject } = route.params;

  const filteredData = Post.filter(
    (obj) =>
      obj.semester.title === data &&
      obj.course.name === course &&
      obj.subject.name === subject
  );
  const [PostFetched, setPostFetched] = useState([]);

  useEffect(() => {
    const uniqueCategories = [];
    const categoryIds = new Set();

    filteredData.forEach((obj) => {
      if (!categoryIds.has(obj.category._id)) {
        categoryIds.add(obj.category._id);
        uniqueCategories.push({
          id: obj.category._id,
          title: obj.category.title,
        });
      }
    });
    setPostFetched(uniqueCategories);
  }, []);

  console.log(PostFetched);
  const Bill = `${BillBord}/${subject}`;

  const [columnWidth, setColumnWidth] = useState(0);

  useEffect(() => {
    setColumnWidth(SIZES.width / numColumns);
  }, []);
  const Sem = [
    {
      Year: "Sample Paper",
    },
    {
      Year: "Books",
    },
    {
      Year: "PYQ",
    },
    {
      Year: "Study Material",
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
        className=" p-2"
        style={{ fontFamily: "Urbanist_700Bold", width: "100%", fontSize: 14 }}
      >
        {Bill}
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
                  navigation.navigate("NotesDetail", {
                    course: course,
                    Post: Post,
                    subject: subject,
                    data: data,
                    BillBord: Bill,
                    category: item.title,
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
                    className=" rounded-md flex justify-center  items-center py-5    px-4"
                  >
                    <View className=" flex flex-col gap-1 items-center  ">
                      <SimpleLineIcons
                        name="ios-library-outline"
                        size={40}
                        color="black"
                      />
                      <Text
                        style={{
                          fontFamily: "Urbanist_600SemiBold",
                          fontSize: 15,
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

export default NotesCategory;
