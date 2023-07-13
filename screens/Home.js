import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constant";
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
import { SafeAreaView } from "react-native";
import { Linking } from "react-native";
import client from "../Sanity/Sanity";

const Home = ({ navigation }) => {
  const [PostFetched, setPostFetched] = useState([]);
  const [CategoryFetch, setCategoryFetch] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const postPromise = client.fetch(`
        *[_type == "post"] |
        order(_createdAt desc) [0..20] {
          _id,
          title,
          category->{
            _id,
            title
          },
          subject->{
            _id,
            name
          },
          semester->{
            _id,
            title
          },
          course->{
            _id,
            name
          },
         
          uploadDate,
          url
        }
      `);

      const coursePromise = client.fetch(`
        *[_type == "course"] |
        order(_createdAt) {
          _id,
         name,
        
        }
      `);

      const [postData, categoryData] = await Promise.all([
        postPromise,
        coursePromise,
      ]);
      console.log(postData);
      setPostFetched(postData);
      setCategoryFetch(categoryData);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(PostFetched);

  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
  });

  const Data = [
    { Course: "Science" },
    { Course: "Commerce" },
    { Course: "Arts" },
    { Course: "Additional Courses" },
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
        paddingTop: 40,
        alignItems: "center",
        padding: 10,
      }}
    >
      {/* Logo */}
      <View className="w-full px-1 justify-between items-center flex-row flex">
        <Text className="text-2xl" style={{ fontFamily: "Urbanist_900Black" }}>
          Notable
        </Text>
        <Entypo name="instagram" color="black" size={20} />
      </View>
      {/* Card  */}
      <View
        style={{
          borderRadius: 23,
          elevation: 4,
          shadowOffset: { width: 433, height: 330 },
          shadowRadius: 23,
          shadowColor: "#000",
          width: "100%",
          paddingHorizontal: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          height: 200,
          backgroundColor: "#2D2D2D",
          marginVertical: 12,
        }}
      >
        {/* Text */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "Urbanist_700Bold",
              fontSize: 20,
              color: "white",
              paddingHorizontal: 4,
            }}
          >
            Notes Sharing
          </Text>
          <Text
            style={{
              fontFamily: "Urbanist_600SemiBold",
              fontSize: 13,
              color: "white",
              paddingHorizontal: 4,
              width: "90%",
            }}
          >
            Join the community &
          </Text>
          <Text
            style={{
              fontFamily: "Urbanist_600SemiBold",
              fontSize: 13,
              color: "white",
              paddingHorizontal: 4,
              width: "80%",
            }}
          >
            Share your notes with other students.
          </Text>
        </View>
        {/* Image */}
        <View style={{ width: "40%" }}>
          <Image
            source={require("../assets/feture.png")}
            style={{ width: 150, height: "100%", marginHorizontal: 3 }}
          />
        </View>
      </View>
      {/* List of subjects */}
      <Text
        className="text-xl p-2"
        style={{ fontFamily: "Urbanist_700Bold", width: "100%" }}
      >
        Desk
      </Text>
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <FlatList
          data={CategoryFetch}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("Semester", {
                    data: item.name,
                    Post: PostFetched,
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
        <View className="w-full p-4 justify-center items-center flex flex-row">
          <Text style={{ fontFamily: "Urbanist_600SemiBold", fontSize: 9 }}>
            Developer -
          </Text>
          <Pressable
            onPress={() =>
              Linking.openURL("https://www.instagram.com/akashjnv_")
            }
          >
            <Text
              style={{
                fontFamily: "Urbanist_600SemiBold",
                fontSize: 9,
                marginLeft: 2,
              }}
            >
              Akash Kumar
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
