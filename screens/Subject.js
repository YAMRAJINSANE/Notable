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

const Subject = ({ route, navigation }) => {
  const { data, nav, Post, id, course } = route.params;

  console.log(Post);
  const filteredData = Post.filter(
    (obj) => obj.course.name === course && obj.semester.title === data
  );

  const [PostFetched, setPostFetched] = useState([]);

  useEffect(() => {
    const uniqueSubjects = [];
    const subjectIds = new Set();

    filteredData.forEach((obj) => {
      if (!subjectIds.has(obj.subject._id)) {
        subjectIds.add(obj.subject._id);
        uniqueSubjects.push({ id: obj.subject._id, name: obj.subject.name });
      }
    });
    setPostFetched(uniqueSubjects);
  }, []);

  console.log("]]]]]]]]]]]]]]]]]]]]]]");
  console.log(PostFetched);
  console.log("]]]]]]]]]]]]]]]]]]]]]]");

  const BillBord = `${nav}/${data}`;

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
      <Text
        className="text-xl p-2"
        style={{ fontFamily: "Urbanist_700Bold", width: "100%", fontSize: 14 }}
      >
        {nav}/{data}
      </Text>
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <FlatList
          data={PostFetched}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("NotesCategory", {
                    course: course,
                    Post: Post,
                    subject: item.name,
                    data: data,
                    BillBord: BillBord,
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

export default Subject;
